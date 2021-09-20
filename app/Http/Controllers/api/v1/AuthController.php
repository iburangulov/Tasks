<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

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
        return $user->createToken($request->device_name)->plainTextToken;
    }

    public function signUp(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
        ]);
        $token = $user->createToken('api_token');
        return Response::make($token->plainTextToken);
    }

}
