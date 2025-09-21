

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import type { HTMLAttributes } from "react";

interface ItemCardProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ItemCard = ({ image, name, description, price, }: ItemCardProps) => {
  

  return (
      <div className="w-[33%] flex p-5 justify-center">
            <Card
              className="w-full max-w-sm bg-[#1a1a1a] p-0 text-white rounded-lg shadow-lg border-0.5 transition-transform duration-300 hover:border-1 hover:border-yellow-300  hover:scale-105 
  hover:shadow-[0_0_15px_rgba(252,211,77,0.7)] hover:shadow-amber-300/60
  focus:shadow-[0_0_15px_rgba(252,211,77,0.7)] focus:shadow-amber-300/60
  ">
              <img
                src={image}
                alt="Delicious gourmet burger"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-semibold text-yellow-400">{name}</h2>
                  <span className="text-xl font-bold text-yellow-500">R$ {price}</span>
                </div>
                <p className="text-gray-300 text-sm">{description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Ver mais
                </Button>
              </CardFooter>
            </Card>
          </div>
  );
};

export default ItemCard;