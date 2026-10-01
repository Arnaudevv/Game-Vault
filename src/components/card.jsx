import './card.css'

import noCover from '../assets/game-covers/no-cover.avif'

function Card({ title, year, genre, rating, image }) {
    return (
        <div className="card">
            <div className="card-cover">
                <img className='card-image'
                    src={image || noCover} 
                    alt={title} 
                />
            </div>
            <div className="card-details">
                <p className='card-tittle'>{title}</p>
                <p className='card-year'>{year}</p>
                <p className='card-genre'>{genre}</p>
                <p className='card-rating'>★ {rating} / 10</p>
            </div>
        </div>
    )
}

export default Card