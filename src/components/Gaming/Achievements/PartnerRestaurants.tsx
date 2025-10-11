import React from "react";
import type { Restaurant } from "../data/achievementsData";

interface PartnerRestaurantsProps {
  restaurants: Restaurant[];
}

const PartnerRestaurants: React.FC<PartnerRestaurantsProps> = ({
  restaurants,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-bold text-gray-900">
        🍽️ Partner Restaurants
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-blue-400 hover:shadow-md"
          >
            <div className="mb-3 text-5xl">{restaurant.logo}</div>
            <h4 className="text-lg font-bold text-gray-900">
              {restaurant.name}
            </h4>
            <p className="mt-1 text-sm text-gray-600">
              {restaurant.description}
            </p>
            <p className="mt-2 text-xs text-gray-500">
              📍 {restaurant.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerRestaurants;
