import './index.css'

function InputText(props){
    return (
        <div className="input">
            <label>
                { props.title + ":" }
                <input type="text" />
            </label>
        </div>
    );
}

export default InputText