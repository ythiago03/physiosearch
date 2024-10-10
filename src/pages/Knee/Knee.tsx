import './Knee.scss'
import { Separator } from "@/components/ui/separator"
import { useState } from 'react';
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube';
import { Skeleton } from "@/components/ui/skeleton"

const Knee = () => {
  const [isPlayerLoading, setIsPlayerLoading] = useState(true)

  const onPlayerReady = (): void => {
    setIsPlayerLoading(false);
  };

  const options = {
    playerVars: {
      rel: 0,
      autoplay: 0,
    },
  };
  return (
    <main className='article_container'>
      <div className='article_header'>
        <h1>A Patela do Joelho: Estrutura e Função Essencial</h1>
        <div className='article_tag'>
          <span className="material-symbols-outlined">calendar_month</span>
          <span> 07 de outubro de 2024</span>
        </div>
        <div className='article_tag-wrapper'>
          <Link target='_blank' to={"https://fonts.google.com"} className='article_tag'>
            <span className="material-symbols-outlined">link</span>
            <span>Artigo</span>
          </Link> 
          <div className='article_tag'>
            <span className="material-symbols-outlined">schedule</span>
            <span> 2 minutos</span>
          </div>
        </div>
      </div>

      <Separator className='separator' />

      <section className='article_wrapper'>
        <div className='article_content'>
          <h2>
            A Patela e sua Anatomia
            <Separator/>
          </h2>
          <p>
            A patela é formada por uma superfície lisa de cartilagem que cobre sua face posterior, permitindo que ela deslize suavemente sobre o fêmur durante os movimentos de flexão e extensão do joelho. Ela é mantida no lugar por ligamentos e músculos que estabilizam a articulação. Na parte inferior, o tendão patelar conecta a patela à tíbia, enquanto a parte superior está unida ao tendão do quadríceps.
          </p>
        </div>
        <div className='article_content'>
          <h2>
            Função Biomecânica da Patela
            <Separator/>
          </h2>
          <p>
            A patela é formada por uma superfície lisa de cartilagem que cobre sua face posterior, permitindo que ela deslize suavemente sobre o fêmur durante os movimentos de flexão e extensão do joelho. Ela é mantida no lugar por ligamentos e músculos que estabilizam a articulação. Na parte inferior, o tendão patelar conecta a patela à tíbia, enquanto a parte superior está unida ao tendão do quadríceps.
          </p>
        </div>
        <div className='article_content'>
          <h2>
            Principais Lesões da Patela
            <Separator/>
          </h2>
          <p>
            A patela é formada por uma superfície lisa de cartilagem que cobre sua face posterior, permitindo que ela deslize suavemente sobre o fêmur durante os movimentos de flexão e extensão do joelho. Ela é mantida no lugar por ligamentos e músculos que estabilizam a articulação. Na parte inferior, o tendão patelar conecta a patela à tíbia, enquanto a parte superior está unida ao tendão do quadríceps.
          </p>
        </div>
        <div 
          className="videoWrapper"
          style={{display: isPlayerLoading ? "none" : "block"}}
        >
          <YouTube
            className="youtube"
            videoId="wszljuxRKC8"
            opts={options}
            onReady={onPlayerReady}
          />
        </div>
        {
          isPlayerLoading &&
          <div className="flex flex-col space-y-3">
            <Skeleton className="m-auto h-[400px] w-[100%] rounded-xl" />
          </div>
        }
        <div className='article_content'>
          <h2>
            Cuidados Preventivos com a Patela
            <Separator/>
          </h2>
          <p>
            Manter uma musculatura equilibrada ao redor do joelho é essencial para evitar lesões na patela. Exercícios que fortalecem o quadríceps, isquiotibiais e músculos da panturrilha, além de um bom alongamento, ajudam a distribuir melhor a carga sobre a articulação e a proteger a patela de sobrecargas. O uso de calçados adequados e a prática de esportes de maneira consciente também podem contribuir para a saúde a longo prazo do joelho.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Knee