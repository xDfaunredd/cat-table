import { Image } from "../../types/types";
import toast from "react-hot-toast";
import { FaHeartCircleMinus } from "react-icons/fa6";

type Prop = {
  fav: Image;
  favorites: Image[];
  setFavorites: React.Dispatch<React.SetStateAction<Image[]>>;
};

const FavoritesItem = ({ fav, favorites, setFavorites }: Prop) => {
  const handleDelete = () => {
    const filteredItems = favorites.filter((item) => item.id !== fav.id);

    setFavorites(filteredItems);

    toast.success("Successfully deleted!");
  };

  return (
    <>
      <li
        key={fav.id}
        className="flex items-center justify-between space-x-4 bg-white p-4 rounded-lg shadow"
      >
        <img
          src={fav.url}
          alt={`Зображення ${fav.id}`}
          className="w-12 h-auto rounded-md"
        />
        <span className="text-gray-700 font-medium">ID: {fav.id}</span>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out"
        >
          <FaHeartCircleMinus className="text-3xl" />
        </button>
      </li>
    </>
  );
};

export default FavoritesItem;
