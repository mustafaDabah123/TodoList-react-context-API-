import React , {useState , useContext } from 'react';
import {itemsContext} from '../contextAPI/globalState';
import {FromContainer} from '../styles';

function Form() {
    const [text , setText ] = useState("");
    const {addItems , items} = useContext(itemsContext);

    const handleClick = (e) => {
        e.preventDefault();
        const newItems = {
            id:Math.floor(Math.random() * 100000000),
            text 
        }
        addItems(newItems);
        console.log(items);
        setText("")
    } 

    return (
        <div className="form-container">
            <FromContainer onSubmit={handleClick}>
                <input type='text' placeholder="what needs to be done ? " onChange={(e)=>setText(e.target.value)} value={text} required />
                <input type='submit' value='add' />
            </FromContainer>
        </div>
    )
}
    
export default Form
