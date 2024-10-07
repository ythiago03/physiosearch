import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import './Skeleton.scss';
import { useRef, useState } from 'react';
import skeletonPng from '../../assets/skeleton.png';
import joelhoPng from '../../assets/patela.png';
import { Button } from "@/components/ui/button"

const Skeleton = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [isOssos, setIsOssos] = useState(true);

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
    <section className="home_container">
      <nav className="sidebar_container">
        <ul>
          <h4>Ossos</h4>
          <li onClick={zoomToJoelho}>
            <span className="material-symbols-outlined">user_attributes</span>
            Osso 1
          </li>
      
          <li onClick={zoomToJoelho}>
            <span className="material-symbols-outlined">user_attributes</span>
            Osso 2
          </li>
        </ul>
        <span className='divider'></span>
        <ul>
          <h4>Músculos</h4>
          <li onClick={zoomToJoelho}>
            <span className="material-symbols-outlined">user_attributes</span>
            Músculo 1
          </li>
          <li onClick={zoomToJoelho}>
            <span className="material-symbols-outlined">user_attributes</span>
            Músculo 2
          </li>
          <li onClick={zoomToJoelho}>
            <span className="material-symbols-outlined">user_attributes</span>
            Músculo 3
          </li>
        </ul>
        <span className='divider'></span>
        <ul>
          <h4>Ligamentos</h4>
          <li onClick={zoomToJoelho}>
            <span className="material-symbols-outlined">user_attributes</span>
            Ligamento 1
          </li>
          <li onClick={zoomToJoelho}>
            <span className="material-symbols-outlined">user_attributes</span>
            Ligamento 2
          </li>
        </ul>
      </nav>
      
      <main className="main_container">
        <div className='controls-wrapper'>
          <Button className='button-control' onClick={zoomIn}>Zoom in +</Button>
          <Button className='button-control' onClick={zoomOut}>Zoom out -</Button>
          <Button className='button-control' onClick={resetZoom}>Resetar</Button>
        </div>
        <span onClick={() => setIsOssos(!isOssos)} className="material-symbols-outlined">cached</span>
        {isOssos &&<TransformWrapper
          initialScale={1}
          ref={transformComponentRef}
        >
          <TransformComponent>
            <img className='bg-yellow-300 skeleton-full' src={skeletonPng} alt="Esqueleto do corpo humano" />
            <Link id='joelho' className='joelho' to="/knee">
              <img className='joelho-patela' src={joelhoPng} alt="" />
            </Link>

          </TransformComponent>
        </TransformWrapper>}

        {!isOssos && <TransformWrapper
          initialScale={1}
          ref={transformComponentRef}
        >
          <TransformComponent>
            <img className='bg-lime-300 skeleton-full' src={skeletonPng} alt="Esqueleto do corpo humano" />
            <Link id='joelho' className='joelho' to="/rota1">
              <img className='joelho-patela' src={joelhoPng} alt="" />
            </Link>

          </TransformComponent>
        </TransformWrapper>}
      </main>
    </section>
  )
}

export default Skeleton