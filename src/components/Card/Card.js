import './Card.css';


function Card (props) {


    return (
        <div className='card_root'>{props.children}</div>
    )
}

export default Card;