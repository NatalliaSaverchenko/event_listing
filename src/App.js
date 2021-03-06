import { useState, useEffect } from 'react'
import CardItem from './components/CardItem/CardItem'

import './App.css'


function App() {
  const [cards, setCards] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [])
  console.log(favorites)

  

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json'
      )
      const result = await data.json()
      setCards(result)
      setFilteredData(result)
    }
    fetchData()
  }, [])
  

  let options_city = ['All', ...Array.from(new Set (cards.map(item=>item.city)))]
  

  const filtered = (param) => {
    const filtered = cards && cards.filter((item) => item.city === param)
    setFilteredData(filtered)
  }
  const onChangeSelectItem = (e) => {
    const selectedId = e.target.value
    if (selectedId === 'All') {
      setFilteredData(cards)
    } else {
      filtered(selectedId)
    }
  }
  return (
    <div className='app-container'
    >
      <h1 className="title">Event Listing</h1>
      <div className="selectContainer">
        <label>
          City:
          <select onChange={onChangeSelectItem}>
            {options_city &&
              options_city.map((option, i) => {
                return (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )
              })}
          </select>
        </label>
        
      </div>
      <div className="listOfCardsItems">
        {filteredData &&
          filteredData.map((card) => {

            return (
              // <div key={card.id} className="cardItem-container">
                <CardItem
                 filteredData={filteredData}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  date={card.date}
                  city={card.city}
                  genre={card.genre}
                  image={card.image}
                  
                />
              // </div>
            )
          })}
      </div>
    </div>
  )
}

export default App
