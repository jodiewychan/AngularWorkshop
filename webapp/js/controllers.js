
/*
 * The MIT License (MIT)
 *
 *  Copyright (c) 2014 © NVISIA, LLC.
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

// Create bootstrap module based on ng-app name.
// First argument matches the ng-app directive in index.html.
var restaurantReservationModule = new angular.module('restaurantReservationControllers', ['formatters', 'restaurantServices']);

// RestaurantListController is the ng-controller value in index.html. It identifies the DOM element that this controller 'controls'
restaurantReservationModule.controller('RestaurantListController', function ($scope, Restaurant) {
    Restaurant.GetAllRestaurants().success(function (restaurants) {
        $scope.restaurants = restaurants;
        $scope.orderProp = 'name'; // Defaults the order property to the Name value.
    });

/// End of Restaurant List Controller. Needs to contain the restaurant array since we don't want it global.
});

// Create a Restaurant Detail Controller
restaurantReservationModule.controller('RestaurantDetailController', function ($scope, $routeParams, Restaurant) {
    Restaurant.GetRestaurant({restaurantId: $routeParams.id}).success(function (restaurant) {
        $scope.restaurant = restaurant;
    });

    Restaurant.GetReservations({restaurantId: $routeParams.id}).success(function (data) {
        $scope.available = data.available;
    });

    $scope.selectTime = function (selectedTime) {
        $scope.selectedTime = selectedTime;
    };

/// End of Restaurant List Controller. Needs to contain the restaurant array since we don't want it global.
});

// Create a Reservation Form Controller
restaurantReservationModule.controller('ReservationFormController', function ($scope, $location, Restaurant) {

});

// Create a Reservation Detail Controller