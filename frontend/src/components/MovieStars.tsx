import '../styles/MovieStars.css'

import { ReactComponent as StarFull } from '../images/star_full.svg'
import { ReactComponent as StarHalf } from '../images/star_half.svg'
import { ReactComponent as StarEmpty } from '../images/star_empty.svg'

export default function MovieStars() {
  return(
    <div className="dsmovie-stars-container">
        <StarFull />
        <StarFull />
        <StarFull />
        <StarHalf />
        <StarEmpty />
    </div>
  )
}