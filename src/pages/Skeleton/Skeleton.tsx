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

import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { useRef } from 'react';

import skeletonPng from '../../assets/skeleton.png';
import detailedHip from '../../assets/detailedHip.png';
import detailedKnee from '../../assets/detailedKnee.png';
import detailedAnkle from '../../assets/detailedAnkle.png';
import knee from '../../assets/knee.png';
import hip from '../../assets/hip.png';
import ankle from '../../assets/ankle.png';

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

            <Dialog>
                <DialogTrigger asChild>
                  <button className='hip_btn'>
                    <img className='hip' src={hip} alt="" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] dialog">

                  <DialogHeader>
                    <DialogTitle>Quadril</DialogTitle>
                    <DialogDescription>
                      Clique sobre uma patologia para saber mais detalhes
                    </DialogDescription>
                  </DialogHeader>

                  <img className='m-auto' src={detailedHip} alt="" />
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>LCA</AccordionTrigger>
                      <AccordionContent>
                        <div className='model_wrapper'>
                          <h3>Artigos</h3>
                          <ul>
                            <li>
                              <Link to={"/knee"}>
                                <h4>Physical Therapy After an Ankle Sprain <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Knee Osteoarthritis: Pathophysiology and Management <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
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
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de McMurray<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de Compressão de Apley<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Sindrome patelofemoral</AccordionTrigger>
                      <AccordionContent>
                        <div className='model_wrapper'>
                          <h3>Artigos</h3>
                          <ul>
                            <li>
                              <Link to={"/"}>
                                <h4>Biomechanics of the Knee: An Overview <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Knee Osteoarthritis: Pathophysiology and Management <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>ACL Injuries: Mechanisms, Risk Factors, and Prevention <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
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
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de McMurray<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de Compressão de Apley<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger asChild>
                  <button className='knee_btn'>
                    <img className='knee' src={knee} alt="" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] dialog">

                  <DialogHeader>
                    <DialogTitle>Joelho</DialogTitle>
                    <DialogDescription>
                      Clique sobre uma patologia para saber mais detalhes
                    </DialogDescription>
                  </DialogHeader>

                  <img className='m-auto' src={detailedKnee} alt="" />
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>LCA</AccordionTrigger>
                      <AccordionContent>
                        <div className='model_wrapper'>
                          <h3>Artigos</h3>
                          <ul>
                            <li>
                              <Link to={"/knee"}>
                                <h4>Physical Therapy After an Ankle Sprain <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Knee Osteoarthritis: Pathophysiology and Management <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
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
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de McMurray<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de Compressão de Apley<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Sindrome patelofemoral</AccordionTrigger>
                      <AccordionContent>
                        <div className='model_wrapper'>
                          <h3>Artigos</h3>
                          <ul>
                            <li>
                              <Link to={"/"}>
                                <h4>Biomechanics of the Knee: An Overview <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Knee Osteoarthritis: Pathophysiology and Management <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>ACL Injuries: Mechanisms, Risk Factors, and Prevention <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
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
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de McMurray<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de Compressão de Apley<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger asChild>
                  <button className='ankle_btn'>
                    <img className='ankle' src={ankle} alt="" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] dialog">

                  <DialogHeader>
                    <DialogTitle>Tornozelo</DialogTitle>
                    <DialogDescription>
                      Clique sobre uma patologia para saber mais detalhes
                    </DialogDescription>
                  </DialogHeader>

                  <img className='m-auto' src={detailedAnkle} alt="" />
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Entorse</AccordionTrigger>
                      <AccordionContent>
                        <div className='model_wrapper'>
                          <h3>Artigos</h3>
                          <ul>
                            <li>
                              <Link to={"/knee"}>
                                <h4>Physical Therapy After an Ankle Sprain <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Knee Osteoarthritis: Pathophysiology and Management <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
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
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de McMurray<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de Compressão de Apley<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Fascite plantar</AccordionTrigger>
                      <AccordionContent>
                        <div className='model_wrapper'>
                          <h3>Artigos</h3>
                          <ul>
                            <li>
                              <Link to={"/"}>
                                <h4>Biomechanics of the Knee: An Overview <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Knee Osteoarthritis: Pathophysiology and Management <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>ACL Injuries: Mechanisms, Risk Factors, and Prevention <span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
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
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de McMurray<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <h4>Teste de Compressão de Apley<span className="material-symbols-outlined">north_east</span></h4>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </DialogContent>
            </Dialog>

          </TransformComponent>
        </TransformWrapper>  
      </main>
    </section>
  )
}

export default Skeleton