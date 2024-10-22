import './Navbar.scss'
import ThemeToggle from '../Theme/theme-toggle'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Info } from "lucide-react"
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

const Navbar = () => {
  return (
    <header className='navbar_container'>
      <Link to={"/"}>
        <h1>PhysioSearch</h1>
      </Link>

      <div  className='btn_wrapper'>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" size="icon">
              <Info className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <span className="sr-only">Informações</span>
            </Button>
          </DialogTrigger>

          <DialogContent className='w-[80%]'>
            <DialogHeader>
              <DialogTitle>PhysioSearch</DialogTitle>
              <DialogDescription>
                Dúvidas frenquentes sobre o site.
              </DialogDescription>
            </DialogHeader>

            <Separator/>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  O que é?
                </AccordionTrigger>
                <AccordionContent>
                  PhysioSearch é um projeto proposto por um grupo de estudantes de fisioterapia com o objetivo de facilitar o estudo e a visualização do corpo humano. O sistema permite que os estudantes visualizem um esqueleto 2D interativo, onde podem aplicar zoom, manipular a imagem e acessar informações detalhadas de áreas específicas do corpo. Cada parte clicável do esqueleto redireciona os usuários para uma visualização mais detalhada da área, que inclui links para artigos e tratamentos relacionados.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Como funciona?
                </AccordionTrigger>
                <AccordionContent>
                  Você pode utilizar o app visualizando e interagindo com o esquetelo e as áreas clicáveis para ter informações sobre patologias, artigos e testes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Quais são as áreas clicáveis?
                </AccordionTrigger>
                <AccordionContent>
                  As áreas clicáveis do esqueleto são o quadril, o joelho e o tornozelo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Onde encontro os artigos e testes?
                </AccordionTrigger>
                <AccordionContent>
                  Para visualizar os artigos e testes, clique em uma das áreas clicáveis do esqueleto, na caixa que abrir, escolha a patologia desejada para ver uma lista de artigos e testes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </DialogContent>
        </Dialog>
        
        <ThemeToggle/>
      </div>
    </header>
  )
}

export default Navbar