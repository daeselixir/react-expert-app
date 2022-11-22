import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // console.log("Vengo desde AddCategory", newCategory);

    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1 style={{ color: "green" }}>Gif Expert App</h1>

      {/* input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* listado de gif */}

      {categories.map((item, index) => (
        <GifGrid category={item} key={item} />
      ))}
    </>
  );
};

export default GifExpertApp;
