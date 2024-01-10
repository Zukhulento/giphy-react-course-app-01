import { useState } from "react";
import { AddCategory,GiftGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto Shippuden"]);
  const onAddCategory = (NewCategory) => {
    // Con esto se valida duplicidad
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <div>GifExpertApp</div>
      {/* Input  */}
      <AddCategory onAddCategory={onAddCategory} />
      {/* listado de gift */}
      <ol>
        {/* gift item */}
        {categories.map((category) => (
          <GiftGrid key={category} category={category}/>
        ))}
      </ol>
    </>
  );
};
