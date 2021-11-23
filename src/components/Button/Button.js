import './Button.css'

function Button (props) {
    return(
        <div className='button_root'>
            <button onClick={props.onClick}>{props.buttonval}</button>
        </div>
        
    )
}

export default Button;