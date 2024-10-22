import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from '@/components/ui/separator';
import data from "../../services/fakeApi.ts"
import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { useRef } from 'react';

import skeletonPng from '../../assets/skeleton.png';

import './Skeleton.scss';

const Skeleton = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

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
      <main className="main_container">
        <div className='controls-wrapper'>
          <Button className='button-control' onClick={zoomIn}>Zoom in +</Button>
          <Button className='button-control' onClick={zoomOut}>Zoom out -</Button>
          <Button className='button-control' onClick={resetZoom}>Resetar</Button>
        </div>
        
        <TransformWrapper
          initialScale={1}
          centerOnInit={true}
          ref={transformComponentRef}
        >
          <TransformComponent>
            <img className='skeleton-full' src={skeletonPng} alt="Esqueleto do corpo humano" />

            { data.map(partOfBody => {
              return <Dialog key={partOfBody.id}>
              <DialogTrigger asChild>
                <button className={partOfBody.areaName.toLowerCase()+'_btn'}>
                  <img className={partOfBody.areaName.toLowerCase()} src={'/assets/'+partOfBody.areaName.toLowerCase()+'.png'} alt={'Foto do '+partOfBody.areaName} />
                </button>
              </DialogTrigger>
              <DialogContent className="w-[80%] dialog">

                <DialogHeader>
                  <DialogTitle>{partOfBody.areaName}</DialogTitle>
                  <DialogDescription>
                    Clique sobre uma patologia para saber mais detalhes
                  </DialogDescription>
                </DialogHeader>

                <img className='m-auto w-[80%]' src={'/assets/'+partOfBody.areaName.toLowerCase()+'Detalhado.png'} alt="" />
                <Accordion type="single" collapsible>
                  {
                    partOfBody.pathologies.map(pathology => {
                      return <AccordionItem key={pathology.id} value={pathology.id}>
                      <AccordionTrigger>{pathology.name}</AccordionTrigger>
                      <AccordionContent>
                        <div className='model_wrapper'>
                          <h3>Artigos</h3>
                          <ul>
                            {pathology.articles.map(article => {
                              return  <li key={article.id}>
                              <Link to={`/article?partOfBody=${partOfBody.id}&pathologieId=${pathology.id}&articleId=${article.id}`}>
                                <h4>{article.title}<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            })}
                          </ul>
                        </div>
                        
                        <Separator className='m-4'/>
  
                        <div className='model_wrapper'>
                          <h3>Testes</h3>
                          <ul>
                            <li>
                              <Link to={"/"}>
                              <h4>Teste de Lachman<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    })
                  }
                </Accordion>

              </DialogContent>
            </Dialog>
              
            })}

          </TransformComponent>
        </TransformWrapper>  
      </main>
    </section>
  )
}

export default Skeleton