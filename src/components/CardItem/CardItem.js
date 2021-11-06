import './cardItem.css'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CardItem = ({ id, name, date, city, genre, image }) => {
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
            <div className='bookMark'>
            <FontAwesomeIcon style={{fontSize: '18px'}} icon={faBookmark} />
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
