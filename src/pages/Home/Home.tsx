import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import './Home.scss';
import { Button } from "@/components/ui/button"


import skeletonPng from '../../assets/skeleton.png';
import joelhoPng from '../../assets/patela.png';

const Home = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const zoomToJoelho = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("joelho");
    }
  };

  const zoomOut = () => {
    if(transformComponentRef.current){
      const { zoomOut } = transformComponentRef.current
      zoomOut()
    }
  }

  const zoomIn = () => {
    if(transformComponentRef.current){
      const { zoomIn } = transformComponentRef.current
      zoomIn()
    }
  }

  const resetZoom = () => {
    if(transformComponentRef.current){
      const { resetTransform } = transformComponentRef.current
      resetTransform()
    }
  }

  return (
    <main className='home_container'>
      <div className='teste'>
        <ul className="list">
          <li className="icon-content">
            <button>
            <div className="filled"></div>
            <svg 
              className="bi bi-github"
              fill="currentColor"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              id="muscle"
            >
              <path d="m20.73,7.82c-.24-1-.56-1.98-.96-2.92-.09-.22-.22-.41-.39-.58-.55-.54-1.18-.98-1.86-1.33-.6-.3-1.24-.52-1.89-.65-.54-.11-1.11.05-1.51.42-.26.24-.5.5-.71.79-.54.72-.89,1.55-1.05,2.48-.16.9.39,1.77,1.29,2.02.42.12.88.17,1.29.18l-.56,2.24c-.5-.26-1.08-.49-1.74-.62-.7-.14-1.35-.14-1.92-.07-.02-.07-.04-.13-.08-.2-.39-.56-1.5-1.91-3.47-2.31-2.44-.49-4.28.87-4.62,1.15-.32.26-.37.73-.11,1.05s.73.37,1.06.11c.25-.21,1.6-1.21,3.38-.85,1.17.24,1.92.95,2.3,1.4-.17.06-.33.13-.46.18-.38.17-.54.62-.37.99.17.38.61.54.99.38.55-.25,1.68-.63,3.03-.37,1.8.35,2.83,1.59,3.19,2.11.15.21.38.32.62.32.15,0,.3-.04.43-.13.34-.24.42-.7.19-1.04-.2-.29-.57-.75-1.11-1.22.03-.05.06-.11.07-.17l.8-3.19c.28-.09.55-.19.81-.32.37-.19.52-.64.33-1.01-.19-.37-.64-.51-1.01-.33-.36.18-.93.4-1.65.4h0c-.33,0-.65-.04-.97-.13-.15-.04-.23-.17-.21-.31.12-.69.38-1.31.78-1.84.15-.21.33-.4.52-.58.06-.05.13-.07.2-.06.53.11,1.04.28,1.52.52.55.27,1.05.63,1.54,1.14.36.87.66,1.78.88,2.7.64,2.66.67,5.43.09,8.24-2.07.61-4.2.89-6.34.84-1.97-.04-3.91-.37-5.79-.96-.25-.08-.53-.02-.73.16-.2.18-.28.45-.23.72.12.55.12,1.13,0,1.67-.17.78-.55,1.34-.84,1.68-.27.32-.23.79.08,1.06.14.12.31.18.49.18.21,0,.42-.09.57-.26.57-.67.97-1.47,1.16-2.33.08-.37.12-.75.13-1.13,1.67.44,3.39.68,5.12.72,2.45.05,4.89-.29,7.24-1.04.25-.08.45-.29.5-.55.73-3.18.73-6.32,0-9.34Z"></path>
              <path d="m12.49,15.95c.68,0,1.26-.11,1.7-.22.4-.11.64-.52.53-.92-.11-.4-.52-.64-.92-.53-.6.16-1.54.29-2.61,0-.63-.17-1.21-.46-1.74-.87-.33-.26-.8-.2-1.05.13-.25.33-.19.8.13,1.05.68.53,1.44.91,2.26,1.13.6.16,1.17.22,1.69.22Z"></path>
            </svg>
          </button>
          <div className="tooltip">Ver Músculos</div>
        </li>
        <li className="icon-content">
          <button>
            <div className="filled"></div>
            <svg 
              className="bi bi-github"
              fill="currentColor"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              id="muscle"
            >
              <path d="m20.73,7.82c-.24-1-.56-1.98-.96-2.92-.09-.22-.22-.41-.39-.58-.55-.54-1.18-.98-1.86-1.33-.6-.3-1.24-.52-1.89-.65-.54-.11-1.11.05-1.51.42-.26.24-.5.5-.71.79-.54.72-.89,1.55-1.05,2.48-.16.9.39,1.77,1.29,2.02.42.12.88.17,1.29.18l-.56,2.24c-.5-.26-1.08-.49-1.74-.62-.7-.14-1.35-.14-1.92-.07-.02-.07-.04-.13-.08-.2-.39-.56-1.5-1.91-3.47-2.31-2.44-.49-4.28.87-4.62,1.15-.32.26-.37.73-.11,1.05s.73.37,1.06.11c.25-.21,1.6-1.21,3.38-.85,1.17.24,1.92.95,2.3,1.4-.17.06-.33.13-.46.18-.38.17-.54.62-.37.99.17.38.61.54.99.38.55-.25,1.68-.63,3.03-.37,1.8.35,2.83,1.59,3.19,2.11.15.21.38.32.62.32.15,0,.3-.04.43-.13.34-.24.42-.7.19-1.04-.2-.29-.57-.75-1.11-1.22.03-.05.06-.11.07-.17l.8-3.19c.28-.09.55-.19.81-.32.37-.19.52-.64.33-1.01-.19-.37-.64-.51-1.01-.33-.36.18-.93.4-1.65.4h0c-.33,0-.65-.04-.97-.13-.15-.04-.23-.17-.21-.31.12-.69.38-1.31.78-1.84.15-.21.33-.4.52-.58.06-.05.13-.07.2-.06.53.11,1.04.28,1.52.52.55.27,1.05.63,1.54,1.14.36.87.66,1.78.88,2.7.64,2.66.67,5.43.09,8.24-2.07.61-4.2.89-6.34.84-1.97-.04-3.91-.37-5.79-.96-.25-.08-.53-.02-.73.16-.2.18-.28.45-.23.72.12.55.12,1.13,0,1.67-.17.78-.55,1.34-.84,1.68-.27.32-.23.79.08,1.06.14.12.31.18.49.18.21,0,.42-.09.57-.26.57-.67.97-1.47,1.16-2.33.08-.37.12-.75.13-1.13,1.67.44,3.39.68,5.12.72,2.45.05,4.89-.29,7.24-1.04.25-.08.45-.29.5-.55.73-3.18.73-6.32,0-9.34Z"></path>
              <path d="m12.49,15.95c.68,0,1.26-.11,1.7-.22.4-.11.64-.52.53-.92-.11-.4-.52-.64-.92-.53-.6.16-1.54.29-2.61,0-.63-.17-1.21-.46-1.74-.87-.33-.26-.8-.2-1.05.13-.25.33-.19.8.13,1.05.68.53,1.44.91,2.26,1.13.6.16,1.17.22,1.69.22Z"></path>
            </svg>
          </button>
          <div className="tooltip">Ver Ligamentos</div>
        </li>
      </ul>
      </div>
      <div className='controls_wrapper'>
          <button className='bg-[#50d71e] button-control' onClick={zoomToJoelho}>Joelho</button>
          <button className='button-control' onClick={zoomIn}>Zoom in +</button>
          <button className='button-control' onClick={zoomOut}>Zoom out -</button>
          <Button>Click me</Button>
          <button className='button-control' onClick={resetZoom}>Resetar</button>
          
      </div> 
      <section className='home_wrapper'>
        <Link to="/" className='replace' >
          <span className="material-symbols-outlined">cached</span>
        </Link>
        <TransformWrapper
          initialScale={1}
          ref={transformComponentRef}
        >
          <TransformComponent>
            <img className='skeleton-full' src={skeletonPng} alt="Esqueleto do corpo humano" />
            <Link id='joelho' className='joelho' to="/rota1">
              <img className='joelho-patela' src={joelhoPng} alt="" />
            </Link>

          </TransformComponent>
        </TransformWrapper>
      </section>
    </main>
  )
}

export default Home