import './cardItem.css'
const CardItem = ({ id, name, date, city, genre, image }) => {
    
  return (
    <div className="cardItem">
      <div
        className="cardItemImage"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="cardItemInfo">
          <div className='cardItemDate'>
            <span>{date.slice(0,2)}</span>
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
