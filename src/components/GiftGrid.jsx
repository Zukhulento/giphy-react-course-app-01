import React, { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {
  // ! Custom hook, con este hook obtengo las imágenes y el estado de carga de la data
  const { images, isLoading } = useFetchGifs(category);
  //   const [images, setimages] = useState([]);
  //   useEffect(() => {
  // Esta función de getGifts es una promesa por lo que se
  // debe usar then
  //     getGifs(category).then((newImages) => setimages(newImages));
  //   }, []);

  return (
    <>
      <h3>{category}</h3>
      { isLoading ? (<h2>Cargando...</h2>):null}
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
