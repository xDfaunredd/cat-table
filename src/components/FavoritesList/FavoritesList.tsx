import { Image } from "../../types/types";
import FavoritesItem from "../FavoritesItem/FavoritesItem";

type Props = {
  favorites: Image[];
  setFavorites: React.Dispatch<React.SetStateAction<Image[]>>;
};

const FavoritesList = ({ favorites, setFavorites }: Props) => {
  return (
    <ul className="space-y-4">
      {favorites.map((fav) => (
        <FavoritesItem
          key={fav.id}
          favorites={favorites}
          fav={fav}
          setFavorites={setFavorites}
        />
      ))}
    </ul>
  );
};

export default FavoritesList;
