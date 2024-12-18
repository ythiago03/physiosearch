import { Button } from "@/components/ui/button";
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
import { useRef, useState } from 'react';
import skeletonPng from '../../assets/skeleton.png';
import { Skeleton as SkeletonShadCn } from "@/components/ui/skeleton"


import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import './Skeleton.scss';

const Skeleton = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

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

  const loadImage = (imageSrc: string) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => resolve();
      img.onerror = () => reject();
    })
  }

  const getImage = async (src: string): Promise<void> => {
    setIsImageLoading(true)
    await Promise.resolve(loadImage(src))
    setIsImageLoading(false)
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
              return (
              <Drawer key={partOfBody.id}>
                <DrawerTrigger  asChild>
                  <button 
                    className={partOfBody.areaName.toLowerCase()+'_btn'}
                    onClick={() => getImage('/assets/'+partOfBody.areaName.toLowerCase()+'.png')}
                  >
                    <img className={partOfBody.areaName.toLowerCase()} src={'/assets/'+partOfBody.areaName.toLowerCase()+'.png'} alt={'Foto do '+partOfBody.areaName} />
                  </button>
                </DrawerTrigger>
                <DrawerContent>

                  <DrawerHeader>
                    <DrawerTitle>{partOfBody.areaName}</DrawerTitle>
                    <DrawerDescription>
                      Clique sobre uma patologia para saber mais detalhes
                    </DrawerDescription>
                  </DrawerHeader>

                  { 
                    isImageLoading && <SkeletonShadCn className="h-[250px] w-[30%] m-auto rounded-xl" />
                  }

                  <img className='m-auto w-[30%]' src={'/assets/'+partOfBody.areaName.toLowerCase()+'Detalhado.png'} alt="" />
                  <Accordion className="p-10" type="single" collapsible>
                    {
                      partOfBody.pathologies.map(pathology => {
                        return <AccordionItem key={pathology.id} value={pathology.id}>
                        <AccordionTrigger>{pathology.name}</AccordionTrigger>
                        <AccordionContent>
                          {pathology.articles &&
                          <div className='model_wrapper'>
                            <h3>Artigos</h3>
                            <ul>
                              {pathology.articles?.map(article => {
                                return  <li key={article.id}>
                                <Link to={`/article?partOfBody=${partOfBody.id}&pathologieId=${pathology.id}&articleId=${article.id}`}>
                                  <h4>{article.title}<span className="material-symbols-outlined">north_east</span></h4>
                                </Link>
                              </li>
                              })}
                            </ul>
                          </div>
                          }
                          
                          <Separator className='m-4'/>
    
                          {pathology.treatment &&
                          <div className='model_wrapper'>
                            <h3>Testes</h3>
                            <ul>
                              {pathology.treatment?.map(article => {
                                return  <li key={article.id}>
                                <Link to={`/article?partOfBody=${partOfBody.id}&pathologieId=${pathology.id}&articleId=${article.id}`}>
                                  <h4>{article.title}<span className="material-symbols-outlined">north_east</span></h4>
                                </Link>
                              </li>
                              })}
                            </ul>
                          </div>
                          }
                        </AccordionContent>
                      </AccordionItem>
                      })
                    }
                  </Accordion>

                </DrawerContent>
              </Drawer>
            ) 
            })}

          </TransformComponent>
        </TransformWrapper>  
      </main>
    </section>
  )
}

export default Skeleton