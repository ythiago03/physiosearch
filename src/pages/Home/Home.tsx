import React, { useRef } from 'react'

import './home.scss';
import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

const Home = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const zoomToJoelho = () => {
    console.log('clicou');
    
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("joelho");
    }
  };

  const zoomToTornozelo = () => {
    console.log('clicou');
    
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("tornozelo");
    }
  };


  return (
    <main>
      <section className='img-frame'>
        <TransformWrapper
          initialScale={1}
          ref={transformComponentRef}
        >
          <TransformComponent>
            <img src="src/assets/skeleton.png" alt="" />

            <Link id='joelho' className='item1' to="/rota1"></Link>
            <Link id='tornozelo' className='item2'  to="/rota2"></Link>
            <div className='teste' onClick={zoomToJoelho}>Zoom Joelho</div>
            <div className='teste' onClick={zoomToTornozelo}>Zoom tornozelo</div>
          </TransformComponent>
        </TransformWrapper>
        
      </section>
    </main>
  )
}

export default Home