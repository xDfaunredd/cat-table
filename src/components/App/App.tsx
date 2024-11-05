import { useEffect, useState } from "react";
import "./App.css";
import { fetchCatsImages } from "../../services/fetch";
import { Image } from "../../types/types";
import ItemsList from "../ItemsList/ItemsList";
import ReloadButton from "../ReloadButton/ReloadButton";
import { AxiosResponse } from "axios";

function App() {
  const [images, setImages] = useState<Array<Image>>([]);

  useEffect(() => {
    const fetchFunc = async () => {
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

    fetchFunc();
  }, []);

  return (
    <>
      <ReloadButton setImages={setImages} />
      <ItemsList images={images} />
    </>
  );
}

export default App;
