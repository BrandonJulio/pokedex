import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import style from './pokemons.module.css'

import BulbasaurPic from '../assets/bulbasaur.gif'
const Pokemons = () => {
  const [query, setQuery] = useState('BULBASAUR')
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          <Link className={style.listItem} to='/'>
            <img className={style.listItemIcon} src={BulbasaurPic} alt='Bulbasaur' />
            <div className={style.listItemText}>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>
          <Link className={style.listItem} to='/'>
            <img className={style.listItemIcon} src={BulbasaurPic} alt='Bulbasaur' />
            <div className={style.listItemText}>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>
          <Link className={style.listItem} to='/'>
            <img className={style.listItemIcon} src={BulbasaurPic} alt='Bulbasaur' />
            <div className={style.listItemText}>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  )
}

export default Pokemons
