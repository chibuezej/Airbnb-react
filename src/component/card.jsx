import "./App.css"
import Star from "../../public/assets/Star 1.png"

function Card(props) {
   
   console.log(props)
    let bageText 
     if (props.openSpots === 0) {bageText = "SOLD OUT"} else if (props.country === "Online") {
        bageText = "ONLINE"
    }
    return(
        <div id="card" className="card">
            {bageText && <div className="card-badge">{bageText}</div>}
            <img src={props.coverImg} alt="Altlete" className="card-image" />
            <div className="card-stats">
            <img src={Star} alt="star-logo" className="card-star" />
            <span>{props.stats.rating}</span>
            < span className="gray">({props.stats.reviewCount}).</span>
            < span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
        <p className="card-price"><span className="bold">From ${props.price} </span>/ person</p>
        </div>
    )
}

export default Card;