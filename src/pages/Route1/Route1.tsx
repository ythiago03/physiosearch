import React, { useState } from 'react'
import './Route1.scss'
import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube';

const Route1 = () => {
  const [player, setPlayer] = useState<any>();

  const onPlayerReady = (event: any) => {
    const player = event.target;
    setPlayer(player);
    player.playVideo();
  };

  const seekToTime = (seconds: number) => {
    if(player){
      player.seekTo(seconds)
    }
  }

  const options = {
    height: "390",
    width: "640",
    playerVars: {
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
        <YouTube
        className="youtube"
          videoId="wszljuxRKC8"
          opts={options}
          onReady={onPlayerReady}
        />
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

export default Route1