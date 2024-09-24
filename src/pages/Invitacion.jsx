
import {useState } from "react";
import { useLocation, Navigate} from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Modal from "react-modal";
import data from "../../data";
import CountDown from "/@/components/ContDown";
import TimeLine from "../components/TimeLine";
import Footer from "../components/Footer";
import '/@/styles/invitacion.css'
import '/@/styles/modal.css'
import Slider from "../components/Slider";

//estilos para el modal 
const customStyles = {
  content:{
    width:'80%',
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    transform:'translate(-50%, -50%)',
    textAlign:'center',
    border:'none',
    boxShadow:'10px 10px 10px #bdbdbd',
    backgroundColor:'var(--color_principal)',

  },
};

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
          recepcion_ubicacion,
          regalos_url} = data

  const song = './music/song.mp3'

  //estado para manejar la reproduccion del audio
  const [play,setPlay] = useState(false);
  const [modalIsOpen, setModalIsopen] = useState(true);//estado para manejar el modal

  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";
  let txt1 = 'lugar';
  let txt2 = 'reservado';

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<0 || pases >10){
    return <Navigate to="/notfound" />
  }

  if(pases >1){
    txt1='lugares';
    txt2='reservados'
  }

  const handlePlay = ()=>{
    setPlay(true);
    setModalIsopen(false)
  }


  return (

    <>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsopen(false)}
        style={customStyles}
        contentLabel="Confirmacion de Reproducción"
        ariaHideApp={false} //necesario para evitar adverterncias en pruebas yu desarrollo
        shouldCloseOnOverlayClick={false}
      >
        
        {/* <h5 className="modal-tittle-1">{data.event_type === 'boda' ? 'Nuestra Boda' : 'MIS XV AÑOS'}</h5> */}
        <h2 className="modal-tittle-2">
            <p>{data.nombre_novia}</p>
            <p className="modal-tittle2-y">&</p>
            <p>{data.nombre_novio}</p>
        </h2>
        <p className="modal-content">Para una mejor experiencia, por favor acepta la reproducción automática.</p>   
        <button className="modal-button" onClick={handlePlay}>Aceptar</button>
      </Modal>

      {
        play && (
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
                    <img src="./icons/CHURCH.svg" alt="" />
                  </div>
                  <div className="datos-item_tittle-tittle">
                    <p>Ceremonia Religiosa</p>
                  </div>
                </div>

                <div className="datos-item_body">
                  <div className="datos-item_body-hn">
                    <p className="datos-item_body-hn-h">{religiosa_hora} : {religiosa_minutos} hrs.</p>
                    <p className="datos-item_body-hn-n">{religiosa_lugar}</p>
                  </div>
                  <div className="datos-item_body-direc">
                    <p>{religiosa_direccion}</p>
                    <p>{religiosa_direccion_col}</p>
                    <p>{religiosa_direccion_cd}</p>
                  </div>
                </div>

                <div className="datos-item-fotter">
                  <button className='datos-item-fotter-button'>
                    <a href={religiosa_ubicacion}>Ver ubicación</a>
                  </button>
                </div>
                
              </div> {/*::::::::::F I N   D E   I T E M  :::::::::: */}

              <div className="datos-item">
                <div className="datos-item_tittle">
                  <div className="datos-item_tittle-icon">
                    <img src="./icons/recepcion.svg" alt="" />
                  </div>
                  <div className="datos-item_tittle-tittle">
                    <p>Recepción</p>
                  </div>
                </div>

                <div className="datos-item_body">
                  <div className="datos-item_body-hn">
                    <p className="datos-item_body-hn-h">{recepcion_hora} : {recepcion_minutos} hrs.</p>
                    <p className="datos-item_body-hn-n">{recepcion_lugar}</p>
                  </div>
                  <div className="datos-item_body-direc">
                    <p>{recepcion_direccion}</p>
                    <p>{recepcion_direccion_col}</p>
                    <p>{recepcion_direccion_cd}</p>
                  </div>
                </div>

                <div className="datos-item-fotter">
                  <button className='datos-item-fotter-button'>
                    <a href={recepcion_ubicacion}>Ver ubicación</a>
                  </button>
                </div>
                
              </div> {/*::::::::::F I N   D E   I T E M  :::::::::: */}

            </section>

            <div className="contador_imagen">
                <img src="./img/banner.webp" alt="imagen_2" />
            </div>

            {/*::::::::::T I M E L I N E:::::::::: */}
            <TimeLine />

            {/*::::::::::R E G A L O S :::::::::: */}
            <section className="regalos">
              <div className="regalos-sobres">
                <div className="regalos-sobres-tittle">
                  <img src="./icons/sobres.svg" alt="" />
                  <h3>Lluvia de Sobres</h3>
                </div>
                <div className="regalos-sobres-body">
                  <p>Durante la recepción se te otorgará un sobre para depositar tu obsequio en efectivo.</p>
                </div>
              </div>

              <div className="regalos-mesa">
                <div className="regalos-mesa-tittle">
                  <img src="./icons/regalo.svg" alt="" />
                  <h3>Mesa de Regalos</h3>
                </div>
                <div className="regalos-mesa-body">
                  <p>Si estas pensando en un regalo te dejamos aquí algunas opciones que serían de utilidad para nosotros.</p>
                </div>
                <div className="regalos-mesa-fotter">
                  <button>
                    <a href={regalos_url}>Ir a Mesa de Regalos</a>
                  </button>
                </div>
              </div>

              <Slider />

              <section className="lugares">
                <div className="lugares-number">
                  <p>{pases}</p>
                </div>
                <div className="lugares-text">
                  <p>{txt1} {txt2}</p>
                  <span>en tu honor.</span>
                </div>

                <section className="lugares-child">
                  <p>Adoramos a sus hijos, pero queremos que en nuestra boda solo tengan que preocuparse por pasarla increible. </p>
                  <span>Solo adultos, por favor.</span>
                </section>
              </section>

              
            </section>

            <div className="contador_imagen">
              <img src="./img/banner2.webp" alt="imagen_2" />
            </div>

            <section className="confirmacion">
              <div className="confirmacion-item">
                <div className="confirmacion-item-tittle">
                  <img src="./icons/confirmacion.svg" alt="" />
                  <h3>Confirmación</h3>
                </div>
                <div className="confirmacion-item-body">
                  <p>Es muy importante para nosotros que confirmes tu asistencia.</p>
                </div>
                <div className="confirmacion-item-fotter">
                  <button>
                    <a href={`https://api.whatsapp.com/send?phone=52${data.confirmacion_novia}&text=¡Hola!👋%0AQuiero%20confirmar%20mi%20asistencia%0Aa%20la%20Boda%20de%20${data.nombre_novia}%20y%20${data.nombre_novio}%20💒🤵🏻👰🏻`}>Confirmar</a>
                  </button>
                </div>
              </div>
            </section>

            <div className="reproductor">
              <ReactAudioPlayer
                src={song} 
                autoPlay={true}
                preload="auto"
                />
              <button className="reproductor-boton" onClick={() => document.querySelector('audio').pause()}>
                <img src="./icons/pausa.svg" alt="" />
              </button>
              <button className="reproductor-boton" onClick={() => document.querySelector('audio').play()}>
                <img src="./icons/play.svg" alt="" />
              </button>
              
            </div>
      
            <Footer />
          
          </>
        )
      }
      
        
    </>
    
    
  );
};

export default Invitacion;
