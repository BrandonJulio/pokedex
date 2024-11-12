import { Link } from 'react-router-dom'
import Styles from './footer.module.css'

// Assets folder
import PokeminPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemlPic from '../assets/pokeball.png'
// Components
const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Link className={Styles.footerLink} to='/pokemons'>
        <img className={Styles.footerIcon} src={PokeminPic} alt='Pokeball' />
        Pokemons
      </Link>
      <Link className={Styles.footerLink} to='/items'>
        <img className={Styles.footerIcon} src={ItemlPic} alt='Pokeball' />
        Items
      </Link>
      <Link className={Styles.footerLink} to='/location'>
        <img className={Styles.footerIcon} src={LocationPic} alt='Pokeball' />
        Map
      </Link>
    </footer>
  )
}

export default Footer
