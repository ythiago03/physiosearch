import { NavLink } from 'react-router-dom';
import './Skeleton.scss';

const Skeleton = () => {
  return (
    <section className="home_container">
      <nav className="sidebar_container">
        <ul>
          <h4>Generators</h4>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
              <li>
                <span className="material-symbols-outlined">user_attributes</span>
                Person
              </li>
            </NavLink>
          
            <NavLink to='cpf' className={({ isActive }) => (isActive ? 'active' : '')}>
              <li>
                <span className="material-symbols-outlined">id_card</span>
                Cpf
              </li>
            </NavLink>
        </ul>
        <span className='divider'></span>
        <ul>
          <h4>Text</h4>
          <li>
            <span className="material-symbols-outlined">text_fields</span>
            Transform
          </li>
        </ul>
        <ul>
          <h4>Others</h4>
          <NavLink to='public-apis' className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>
              <span className="material-symbols-outlined">integration_instructions</span>
              Public APIs
            </li>
          </NavLink>
          <NavLink to='icons' className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>
              <span className="material-symbols-outlined">mood</span>
              Icons
            </li>
          </NavLink>
          <li>
            <span className="material-symbols-outlined">image</span>
            Free images
          </li>
        </ul>
      </nav>
      
      <main className="main_container">
 
      </main>
    </section>
  )
}

export default Skeleton