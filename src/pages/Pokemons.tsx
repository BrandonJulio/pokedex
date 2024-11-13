import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import style from './pokemons.module.css'
// import BulbasaurPic from '../assets/bulbasaur.gif'
import { Pokemon } from '../types/types.d'
import { fetchPokemons } from '../api/fecthPokemons'
import LoadingScreen from '../components/LoadingScreen'
import { waitFor } from '../utils/utils'

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true)
      await waitFor(1000)
      const allPokemons = await fetchPokemons()
      setPokemons(allPokemons)
      setIsLoading(false)
    }
    fetchAllPokemons()
  }, [])

  if (isLoading || !pokemons) {
    return <LoadingScreen />
  }

  const filteredPokemons = pokemons.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase())
  })
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav className={style.nav}>
          {filteredPokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={style.listItem}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={style.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={style.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  )
}

export default Pokemons
