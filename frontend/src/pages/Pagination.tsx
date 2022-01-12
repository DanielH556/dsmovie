import '../styles/pagination.css'

import {ReactComponent as Arrow} from '../images/arrow.svg'

export default function Pagination() {
  return(
    <div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true} >
          <span className="dsmovie-flip-horizontal"><Arrow /></span>
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} >
          <Arrow />
        </button>
    </div>
    </div>
  )
}