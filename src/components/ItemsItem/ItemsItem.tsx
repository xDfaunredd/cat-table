import { useState } from "react";
import { Image } from "../../types/types";
import toast from "react-hot-toast";
import { FaHeartCircleCheck, FaHeartCirclePlus } from "react-icons/fa6";
import Modal from "../Modal/Modal";

type Props = {
  image: Image;
  setFavorites: React.Dispatch<React.SetStateAction<Image[]>>;
  favorites: Image[];
};

const ItemsItem = ({ image, setFavorites, favorites }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleClick = () => {
    setSelectedImage(image.url);
    setIsModalOpen(true);
  };

  const handleAddToFavorites = (image: Image) => {
    const isAlreadyFavorite = favorites.some((item) => item.id === image.id);
    if (isAlreadyFavorite) {
      toast.error("Already in favorites!");
      return;
    }

    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 2000);
    toast.success("Successfully added!");
    setFavorites((prev) => [...prev, image]);
  };

  return (
    <>
      <tr key={image.id} className="border-b last:border-none text-center">
        <td className="px-6 py-4">
          <img
            src={image.url}
            alt={`Зображення ${image.id}`}
            className="w-24 h-auto rounded-md mx-auto cursor-pointer"
            onClick={handleClick}
          />
        </td>
        <td className="px-6 py-4 text-gray-700">{image.id}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => handleAddToFavorites(image)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-200 ease-in-out flex ml-auto mr-auto items-center justify-center text-3xl"
          >
            {isActive ? (
              <FaHeartCircleCheck className="text-3xl " />
            ) : (
              <FaHeartCirclePlus className="text-3xl" />
            )}
          </button>
        </td>
      </tr>
      {isModalOpen && (
        <Modal imageUrl={selectedImage} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ItemsItem;
