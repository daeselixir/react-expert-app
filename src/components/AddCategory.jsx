import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());

    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar algo"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default AddCategory;
