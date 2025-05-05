<?php

use App\Http\Controllers\Savings\AllocationController;
use App\Http\Controllers\Savings\ExpensesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    //TODO: render the savings allocation pages
    Route::group(['prefix' => 'savings'], function () {
        //? allocation related routes
        Route::get('allocation', [AllocationController::class, 'index'])->name('savings.allocation');

        //? expenses related routes
        Route::get('expenses', [ExpensesController::class, 'index'])->name('savings.expenses');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
