import { useEffect, useState } from "react";
import { Image } from "../../types/types";
import ItemsItem from "../ItemsItem/ItemsItem";
import FavoritesList from "../FavoritesList/FavoritesList";
import { FaHeart } from "react-icons/fa6";

type Props = {
  images: Image[];
};

const ItemsList = ({ images }: Props) => {
  const [favorites, setFavorites] = useState<Array<Image>>(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Images List
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-center text-gray-600 font-semibold uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-center text-gray-600 font-semibold uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-center text-gray-600 font-semibold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {images.map((image) => (
              <ItemsItem
                favorites={favorites}
                key={image.id}
                image={image}
                setFavorites={setFavorites}
              />
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl flex justify-center items-center gap-2 font-bold text-center text-gray-700 mt-8 mb-4">
        Favorites <FaHeart />
      </h2>

      <FavoritesList favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
};

export default ItemsList;
