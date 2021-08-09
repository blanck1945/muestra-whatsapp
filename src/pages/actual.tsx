import React from "react";

const ActualPage = () => {
  const getURL = () => {
    return `https://web.whatsapp.com/send?phone=541152201025&text=Hola%20Vanesa`;
  };
  return (
    <div>
      <a target="_blank" href={getURL()} rel="noreferrer">
        Pedir Ayuda
      </a>
    </div>
  );
};

export default ActualPage;
