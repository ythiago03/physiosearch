import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer_container'>
    
    <span className='gitHub'>
        <Link target='_blank' to={"https://github.com/ythiago03/physiosearch"}>
            <h3>Github</h3>
            <span className="material-symbols-outlined">north_east</span>
        </Link>
    </span>

    <span>
        Built with <Link target='_blank' to={"https://react.dev/"}>React.js</Link>, <Link target='_blank' to={"https://tailwindcss.com/"}>Tailwindcss</Link> and <Link target='_blank' to={"https://ui.shadcn.com/"}>Shadcn</Link> by <Link target='_blank' to={"https://github.com/ythiago03"}>Thiago Henrique</Link>.
    </span>
    </footer>
  )
}

export default Footer