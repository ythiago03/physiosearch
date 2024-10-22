import './Article.scss'
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import data from '../../services/fakeApi'
import PartOfBody from '@/interfaces/PartOfBody';
import Pathologie from '@/interfaces/Pathologie';
import ArticleInterface from '@/interfaces/Article';

const Article = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [article, setArticle] = useState<ArticleInterface | undefined>(undefined);

  const getArticle = () => {
    const articleId = queryParams.get('articleId');
    const partOfBodyId = queryParams.get('partOfBody');
    const pathologieId = queryParams.get('pathologieId');

    const filteredPartOfBody: PartOfBody | undefined = data.find(({id}) => id == partOfBodyId)
    const filteredPathologie: Pathologie | undefined = filteredPartOfBody?.pathologies.find(({id}) => id == pathologieId)
    const filteredArticle: ArticleInterface | undefined = filteredPathologie?.articles.find(({id}) => id == articleId)

    return filteredArticle;
  }

  useEffect(() => {
    setArticle(getArticle());
  }, [])

  if(!article){
    return (
     <h1>Nenhum artigo encontrado</h1>
    )
  }
  
  return (
    <main className='article_container'>
      <div className='article_header'>
        <h1>{article.title}</h1>
        <div className='article_tag'>
          <span className="material-symbols-outlined">calendar_month</span>
          <span>{article.dateOfPublication}</span>
        </div>
        <div className='article_tag-wrapper'>
          <Link target='_blank' to={article.link} className='article_tag'>
            <span className="material-symbols-outlined">link</span>
            <span>Artigo Completo</span>
          </Link> 
          <div className='article_tag'>
            <span className="material-symbols-outlined">schedule</span>
            <span> {article.timeOfRead} minutos</span>
          </div>
        </div>
      </div>

      <Separator className='separator' />

      <section className='article_wrapper'>
        {
          article.resume.map(content => {
            return <div key={content.paragraph} className='article_content'>
            <h2>
              {content.title}
              <Separator/>
            </h2>
            <p>
              {content.content}
            </p>
          </div>
          })
        }
      </section>
    </main>
  )
}

export default Article