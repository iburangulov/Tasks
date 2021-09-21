<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response|string
     */
    public function signIn(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return Response::noContent(403);
        }
        $user->tokens()->where('name', $request->device_name)->delete();
        return Response::make($user->createToken($request->device_name)->plainTextToken);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function signUp(Request $request): \Illuminate\Http\Response
    {
        //TODO validation
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required'
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
        ]);
        $token = $user->createToken($request->device_name);
        return Response::make($token->plainTextToken);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response|void
     */
    public function check(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required'
        ]);
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return Response::noContent(403);
        }
        if ($token = PersonalAccessToken::findToken($request->token)) {
            $tokenable = $token->tokenable()->first();
            if ($token->name === $request->device_name && $tokenable->getMorphClass() === get_class($user) && $tokenable->id === $user->id) {
                return Response::make($request->token);
            }
            return Response::noContent(403);
        }
    }
}
