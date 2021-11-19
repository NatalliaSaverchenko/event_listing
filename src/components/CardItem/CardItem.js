import { useState } from 'react'

import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as solidfaBookMark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './cardItem.css'

const CardItem = ({
  id,
  name,
  date,
  city,
  genre,
  image,
  favorites,
  setFavorites,
  filteredData,
  
}) => {
  const [isInFavorites, setIsInFavorites] = useState(!!favorites.find(item => item.id === id))

  const removeduplicates = (favorites) => {
    let filteredFavorites = favorites.filter(
      (item, index, array) =>
        array.findIndex((elem) => item.id === elem.id) === index
    )
    return filteredFavorites
  }

  const onSaveItemClick = () => {
    // debugger
    let newfavorite = {
      id: id,
      name: name,
      date: date,
      city: city,
      genre: genre,
      image: image,
    }

    let newfavorites = favorites.concat(newfavorite)
    let realfavorites = removeduplicates(newfavorites)
    setFavorites(realfavorites)
    setIsInFavorites(true)
    localStorage.setItem('favorites', JSON.stringify(realfavorites))
  }
  return (
    <div className="cardItem">
      <div
        className="cardItemImage"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="cardItemInfo">
          <div className="cardItemBookMark">
            <div className="cardItemDate">
              <span>{date.slice(0, 2)}</span>
            </div>
            
            <div onClick={onSaveItemClick} className="bookMark">
            {isInFavorites ? <FontAwesomeIcon style={{ fontSize: '18px' }} icon={solidfaBookMark} /> : 
            <FontAwesomeIcon style={{ fontSize: '18px' }} icon={faBookmark} />}
              
            </div>
          </div>
          <div>
            <span>{name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardItem
