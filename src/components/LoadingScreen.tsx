import Pokedex from '../assets/pokedex.png'
import style from '../components/loadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={style.loadingScreen}>
      <img className={style.loadingScreenIcon} src={Pokedex} alt='Pokedex' />
    </div>
  )
}

export default LoadingScreen
