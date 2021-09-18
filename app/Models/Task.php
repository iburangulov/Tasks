<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Date;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'time_estimated',
        'time_logged',
        'color'
    ];

    public function getCreatedAtAttribute(string $value): string
    {
        return Date::createFromTimeString($value)->format('Y-m-d H:i:s');
    }

    public function getUpdatedAtAttribute(string $value): string
    {
        return Date::createFromTimeString($value)->format('Y-m-d H:i:s');
    }
}
