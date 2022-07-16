import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState([])
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    async function fetchData () {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await res.json()
        setMonsters(json)
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const handleSearchChange = (e) => (
    setSearchField(e.target.value.toLocaleLowerCase())
  )

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={handleSearchChange} placeholder='search monsters' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
