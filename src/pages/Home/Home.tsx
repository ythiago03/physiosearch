import React, { useRef } from 'react'

import './home.scss';
import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

const Home = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const zoomToJoelho = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("joelho");
    }
  };

  const zoomToTornozelo = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("tornozelo");
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
      <section className='home_wrapper'>
        <TransformWrapper
          initialScale={1}
          ref={transformComponentRef}
        >
          <TransformComponent>
            <img className='skeleton-full' src="src/assets/skeleton.png" alt="Esqueleto do corpo humano" />

            <Link id='joelho' className='item1' to="/rota1"></Link>
            <Link id='tornozelo' className='item2'  to="/rota2"></Link>
            
          </TransformComponent>
        </TransformWrapper>

        <div className='controls_wrapper'>
            <button className='button-control' onClick={zoomToJoelho}>Joelho</button>
            <button className='button-control' onClick={zoomToTornozelo}>Tornozelo</button>
            <button className='button-control' onClick={zoomOut}>Zoom out -</button>
            <button className='button-control' onClick={zoomIn}>Zoom in +</button>
            <button className='button-control' onClick={resetZoom}>Resetar</button>
        </div> 
      </section>
    </main>
  )
}

export default Home