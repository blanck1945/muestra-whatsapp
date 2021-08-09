import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LinkPage = () => {
  let history = useHistory();

  useEffect(() => {
    const sendUserMsg = async () => {
      try {
        const response = await axios.post(
          "https://python-whatsapp-1933.herokuapp.com/send-user-message"
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    sendUserMsg();
  }, []);

  return (
    <div>
      <p>Link te envia a esta pagina - Contactando al servicio de Tap </p>
      <p>Numero del usuario: {history.location.search.split("=")[1]} </p>
    </div>
  );
};

export default LinkPage;
