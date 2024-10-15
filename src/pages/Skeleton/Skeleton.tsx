import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import './Skeleton.scss';
import { useRef } from 'react';
import skeletonPng from '../../assets/skeleton.png';
import joelhoPng from '../../assets/patela.png';
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
            <Link id='joelho' className='joelho' to="/knee">
              <img className='joelho-patela' src={joelhoPng} alt="" />
            </Link>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className='joelho2'>
                  <img className='joelho-patela2' src={joelhoPng} alt="" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] dialog">

                <DialogHeader>
                  <DialogTitle>Tornozelo</DialogTitle>
                  <DialogDescription>
                    Clique sobre uma patologia para saber mais detalhes
                  </DialogDescription>
                </DialogHeader>

                <img className='m-auto' src="src/assets/joelho.png" alt="" />
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Osteoartrite do Joelho</AccordionTrigger>
                    <AccordionContent>
                      <div className='model_wrapper'>
                        <h3>Artigos</h3>
                        <ul>
                          <li>
                            <Link to={"/knee"}>
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
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Lesão do Ligamento Cruzado Anterior (LCA)</AccordionTrigger>
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
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Tendinite Patelar (Joelho de Saltador)</AccordionTrigger>
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