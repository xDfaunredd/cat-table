import { TfiReload } from "react-icons/tfi";
import { fetchCatsImages } from "../../services/fetch";
import { Image } from "../../types/types";
import { AxiosResponse } from "axios";

type Props = {
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
};

const ReloadButton = ({ setImages }: Props) => {
  const handleDelete = async () => {
    try {
      const { data }: AxiosResponse = await fetchCatsImages();
      console.log(data);
      setImages(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-lg transition duration-200 ease-in-out flex items-center justify-center mr-auto ml-auto gap-3 text-3xl mb-10"
    >
      Reload Images <TfiReload />
    </button>
  );
};

export default ReloadButton;
