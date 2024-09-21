
import {useEffect } from "react";
import { useLocation, Navigate} from "react-router-dom";
import data from "../../data";
import CountDown from "/@/components/ContDown";
import Reservacion from '/@/components/Reservacion';
import TimeLine from "../components/TimeLine";
import Footer from "../components/Footer";
import '/@/styles/invitacion.css'
import '/@/styles/modal.css'


const Invitacion = () => {
  // D E ST R U C T U R A C I O N   D E   L A   D A T A   
  const {img_header,
          nombre_novia,
          nombre_novio,
          frase,
          religiosa_lugar,
          religiosa_direccion,
          religiosa_direccion_col,
          religiosa_direccion_cd,
          religiosa_hora,
          religiosa_minutos,
          religiosa_ubicacion,
          recepcion_hora,
          recepcion_minutos,
          recepcion_lugar,
          recepcion_direccion,
          recepcion_direccion_col,
          recepcion_direccion_cd,
          recepcion_ubicacion} = data

  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<0 || pases >10){
    return <Navigate to="/notfound" />
  }


  return (

    <>
      <section className="header">
      
        <div className="header_names-container">
          <div className="header_names">
            <p>{nombre_novia}</p>
            <p>&</p>
            <p>{nombre_novio}</p>
          </div>

          <div className="header_names-container-fake"></div>
        </div>
      </section>

      <section className="contador centrar">
        <p>Ya casi llega la fecha...</p>
        <CountDown />
        <div className="contador_frase">
          <p>{frase}</p>
        </div>
      </section>

      <div className="contador_imagen">
          <img src="./img/back_.webp" alt="imagen_2" />
      </div>
      
      <section className="datos centrar">
        <h2 className="datos-tittle">¡Nos Casamos!</h2>

        <div className="datos-item">
          <div className="datos-item_tittle">
            <div className="datos-item_tittle-icon">
              <img src="" alt="" />
            </div>
            <div className="datos-item_tittle-tittle">
              <p>Ceremonia Religiosa</p>
            </div>
          </div>

          <div className="datos-item_body">
            <div className="datos-item_body-hn">
              <p>{religiosa_hora} : {religiosa_minutos}</p>
              <p>{religiosa_lugar}</p>
            </div>
            <div className="datos-item_body-direc">
              <p>{religiosa_direccion}</p>
              <p>{religiosa_direccion_col}</p>
              <p>{religiosa_direccion_cd}</p>
            </div>
          </div>

          <div className="datos-item-fotter">
            <button>
              <a href={religiosa_ubicacion}>Ver ubicación</a>
            </button>
          </div>
          
        </div> {/*::::::::::F I N   D E   I T E M  :::::::::: */}

        <div className="datos-item">
          <div className="datos-item_tittle">
            <div className="datos-item_tittle-icon">
              <img src="" alt="" />
            </div>
            <div className="datos-item_tittle-tittle">
              <p>Recepción</p>
            </div>
          </div>

          <div className="datos-item_body">
            <div className="datos-item_body-hn">
              <p>{recepcion_hora} : {recepcion_minutos}</p>
              <p>{recepcion_lugar}</p>
            </div>
            <div className="datos-item_body-direc">
              <p>{recepcion_direccion}</p>
              <p>{recepcion_direccion_col}</p>
              <p>{recepcion_direccion_cd}</p>
            </div>
          </div>

          <div className="datos-item-fotter">
            <button>
              <a href={recepcion_ubicacion}>Ver ubicación</a>
            </button>
          </div>
          
        </div> {/*::::::::::F I N   D E   I T E M  :::::::::: */}

      </section>
          
          {/* <TimeLine />
          <div className="lugares">
            <Reservacion pases={pases} />
          </div> */}
          
          <div>
            <Footer />
          </div>
    </>
    
    
  );
};

export default Invitacion;
