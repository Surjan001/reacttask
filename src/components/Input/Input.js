import './Input.css'


function Input (props) {


    return(
        <div className='input_root'>
            <label>{props.labelname}</label> <br />
            <input type={props.type} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Input;