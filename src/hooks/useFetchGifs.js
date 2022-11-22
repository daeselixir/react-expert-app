import { useEffect, useState } from "react";
import { getGif } from "../herlpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifRend = async () => {
    const newimg = await getGif(category);
    setImages(newimg);
    setIsLoading(false)
  };

  useEffect(() => {
    getGifRend();
  }, []);

  return {
    images,
    isLoading
  };
};

export default useFetchGifs;
