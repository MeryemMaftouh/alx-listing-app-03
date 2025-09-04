// components/common/Card.tsx
import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, location, image, price }) => {
  return (
    <div className="border rounded-lg  border-transparent overflow-hidden shadow-sm w-72">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg text-black font-mono ">{title}</h2>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="text-black font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default Card;
