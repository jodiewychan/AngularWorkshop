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

// Create controller module based on ng-controller name in index.html (RestaurantListController).
var restaurantReservationModule = new angular.module('restaurantReservationControllers', []);


// Add Controller to provide the Restaurant List.
// RestaurantListController is the ng-controller value in index.html. It identifies the DOM element that this controller 'controls'
restaurantReservationModule.controller('RestaurantListController', function ($scope) {
	$scope.restaurants = [
        {"name": "Shogun", "cuisine": "Sushi", "tagline": "", "description": "Japanese Teppanyaki Steakhouse & Sushi", "address": "518 College Ave", "rating": 81, "price": 4, "_id": "0M3K8g78cEfMyYE8"},
        {"name": "Carson's Ribs", "cuisine": "Barbecue", "tagline": "America's #1 BBQ", "description": "A Chicago institution since 1977, Carson's is the place visited by presidents, America's favorite athletes, stars of TV, the big screen, and literally millions of BBQ devotees. With hearty portions and a no holds barred attitude of offering only the finest quality available, Carson's promises to be a fabulous dining experience. For those seeking the best in an undeniably American dining tradition, Carson’s is a must!", "address": "1141 N Old World 3rd St", "rating": 85, "price": 3, "_id": "11XmtlX0V48coQSW"},
        {"name": "Zarletti", "cuisine": "Italian", "tagline": "Milwaukee's premier modern italian restaurant.", "description": "Zarletti serves traditional Italian classics in a casual contemporary atmosphere. Opening in 2004 we have been rated by Milwaukee critic Dennis Getto as \"some of the best Italian food being served in Milwaukee these days.\"", "address": "741 N Milwaukee St", "rating": 89, "price": 4, "_id": "1vD8MyaMHbJ8rJjH"},
        {"name": "Kil@Wat", "cuisine": "Asian", "tagline": "Kil@wat's electrifying cuisine and atmosphere is truly a centerpiece of fine Downtown Milwaukee dining.", "description": "Kil@wat combines an inventive interpretation of contemporary American cuisine, an elegant yet comfortable setting, and inspiring views of downtown Milwaukee to create a thoroughly enjoyable dining experience.  With a prime location just steps from the theater district and other attractions, Kil@wat makes an ideal starting point, resting spot, or final destination for anyone on a downtown adventure.", "address": "139 E Kilbourn Ave", "rating": 86, "price": 4, "_id": "BenPJFAV6iiv6bQ4"},
        {"name": "Bartolotta's Lake Park Bistro", "cuisine": "French", "tagline": "At the Bartolotta restaurants we like to think that every meal we serve is special.", "description": "Bartolotta's Lake Park Bistro is one of the premiere brasserie-style French restaurants in Wisconsin. With a location in Milwaukee, it provides an ideal setting for hosting social occasions, corporate group events, weddings and parties.", "address": "3133 E Newberry Blvd", "rating": 83, "price": 4, "_id": "Snv4q2gwQHPED5VL"},
        {"name": "Mader's", "cuisine": "German", "tagline": "We've been preparing for your visit since 1902.", "description": "Over the past 106 years Mader's restaurant has meant many things to many people. From the days of 3 cent beers and .20 cent dinners, through its days of politicians trading confidences over lunch to its many incarnations as a gathering place for citizens from all over the world, Mader's German cuisine restaurant has been a place like no other. More than any other institution Mader's means to persons from every background a backdrop for their most cherished celebrations. Young brides excitedly discuss their wedding plans. The famous and powerful eagerly anticipate their events.", "address": "1041 N Old World 3rd St", "rating": 75, "price": 4, "_id": "ZVcXLPiHfpABeA7j"},
        {"name": "Hinterland Erie Street Gastropub", "cuisine": "Gastropub", "tagline": "Hinterland... a new hub for contemporary American cuisine in Milwaukee, Wisconsin.", "description": "Executive Chef Dan Van Rite and Sous Chef Paul Funk, explore a multicultural approach to cooking and eating. Their journey to create bold flavors and uncommon pairings is a daily mission at Hinterland.", "address": "222 E Erie St", "rating": 86, "price": 4, "_id": "cBeK0FyIbeUqxLxF"},
        {"name": "Sanford", "cuisine": "American", "tagline": "", "description": "It is the philosophy of Sanford Restaurant to start with the finest possible ingredients, coming from as close to home as possible, supporting local farms and artisans whenever possible. We then treat those ingredients with the utmost respect, coaxing and elevating the natural flavor to the highest possible level.", "address": "1547 N Jackson St", "rating": 88, "price": 4, "_id": "qCX06wupGzay7tDx"},
        {"name": "Harbor House", "cuisine": "Seafood", "tagline": "Harbor House Serves Great Seafood with a View.", "description": "Seafood - Steaks - Raw Bar - Cocktails", "address": "550 Harbor Dr", "rating": 78, "price": 4, "_id": "to3XNLNxlHDsz79S"},
        {"name": "Eddie Martini's", "cuisine": "Steakhouse", "tagline": "Our main goal: complete guest satisfaction.", "description": "Eddie Martini's is a 1940's style fine dining restaurant, featuring the freshest in steaks, chops and seafood. Our main goal: complete guest satisfaction.  We will accomplish this by offering service above and beyond our guests' expectations, preparing and serving food and beverages of high, consistent quality and creating an atmosphere that satisfies the wants and needs of our guests in ambiance and decor.", "address": "8612 W Watertown Plank Rd", "rating": 83, "price": 4, "_id": "xnbvJsxyX8NIsabi"}
    ];
/// End of Restaurant List Controller. Needs to contain the restaurant array since we don't want it global.
});

// Create a Restaurant Detail Controller


// Create a Reservation Form Controller


// Create a Reservation Detail Controller