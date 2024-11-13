import { useNavigate, useParams } from 'react-router-dom'
import PokeballImg from '../assets/pokeball.png'
import Footer from '../components/Footer'
import style from './pokemon.module.css'
// import Bulbasaur from '../assets/bulbasaur.gif'
import { PokemonDetails } from '../types/types'
import { useState, useEffect } from 'react'
import { fecthPokemon } from '../api/fecthPokemon'
import LoadingScreen from '../components/LoadingScreen'
import { waitFor } from '../utils/utils'

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemon, setPokemon] = useState<PokemonDetails>()
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function getPokemon () {
      setIsLoading(true)
      await waitFor(500)
      const fecthedPokemon = await fecthPokemon(name as string)
      setPokemon(fecthedPokemon)
      setIsLoading(false)
    }
    getPokemon()
  }, [name])

  if (isLoading) {
    return <LoadingScreen />
  }
  return (
    <>
      <button className={style.pokeballButton} onClick={() => navigate(-1)}>
        <img className={style.pokeballImg} src={PokeballImg} alt='Pokeball' /> Go Back
      </button>
      <div className={style.pokemon}>
        <main className={style.pokemonInfo}>
          <div className={style.pokemonTitle}>
            {pokemon?.name?.toUpperCase()}
          </div>
          <div>Nr. {pokemon?.id}</div>
          <div><img
            className={style.pokemonInfoImg}
            src={pokemon?.imgSrc} alt={pokemon?.name}
               />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defendese: {pokemon?.defense}</div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Pokemon
