import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState("");
  // Se desestructura el event.target.value
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };
  const onsubmit = (e) => {
    // Se evita que se recargue la página por el envío de formulario
    e.preventDefault();
    // Se puede hacer la lógica para enviar el estado con la data
    // setCategories([...categories,inputValue])
    //Si tenemos más de un caracter se continua con la función
    const valueClean = inputValue.trim() 
    if (valueClean.length<= 1) return;
    // setCategories((categories) => [inputValue, ...categories]); Esto se comenta porque no es lo más optimo
    // ! Aqui lo que obtengo es la función para poder agregar la nueva categoria, pero la función está en
    // ! el componente GiftExpertApp 
    onAddCategory(valueClean)
    // En este caso input value tiene la data y categories trae los datos previos
    setInputValue("")
  };
  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        id="inputV"
        //   Enviando el evento puedo obtener el valor del input
        onChange={onInputChange}
      />
    </form>
  );
};
