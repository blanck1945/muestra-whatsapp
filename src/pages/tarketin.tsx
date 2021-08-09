import axios from "axios";
import React, { useState } from "react";
import { getTime } from "../getTime";

function Tarjetin() {
  const [formState, setFormState] = useState<string>("qr");
  const [dataToSend, setDataToSend] = useState<any>({
    cel: "61427148",
    user: "Benito",
    comercio: "Gallomania",
    now: "",
  });

  const handleInput = (e: any) => {
    const { value, name } = e.target;
    console.log({ value, name });

    setDataToSend({
      ...dataToSend,
      [name]: value,
    });
  };

  const sendData = async () => {
    setDataToSend({
      ...dataToSend,
      now: getTime(),
    });
    try {
      const response = await axios.post(
        "https://python-whatsapp-1933.herokuapp.com/app/send-message",
        dataToSend
      );
      console.log(response);
      setFormState("timmer");
    } catch (err) {
      console.error("Error de envio de datos", err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {formState === "qr" && (
          <>
            <h2>Simulador Tarjetin</h2>
            <button onClick={() => setFormState("tel")}>QR lector</button>
            <p>
              Al clickear este boton se simula el evento de lectura del tarjetin
            </p>
          </>
        )}
        {formState === "tel" && (
          <>
            <input
              onChange={(e) => handleInput(e)}
              type="text"
              name="cel"
              placeholder="Asocie su numero al tarjetin"
            />
            <input
              onChange={(e) => handleInput(e)}
              type="text"
              name="user"
              placeholder="Nombre del usuario"
            />
            <button onClick={() => sendData()}>Asociar</button>
          </>
        )}
        {formState === "timmer" && (
          <>
            <p>Mensaje enviado con exito </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Tarjetin;

//50416625
