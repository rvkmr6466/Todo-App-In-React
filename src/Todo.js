/**
 * @author Ravi Kumar
 * @since 12 July 2021
 */

// import react module
import React, { useState } from 'react';

/**
 * @function Todo
 * @desc it is a functional component that will return some JSX and will render in App functional component
 * @returns 
 */
function Todo() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    /**
     * @function handleChange
     * @desc Catches all the input values typed 
     * @param {*} event 
     */
    function handleChange(event) {
        console.log(event.target.value);
        const newValue = event.target.value;
        setInputText(newValue);
    }

    /**
     * @description on click add button, item will be added in the list below input field
     */
    function handleClick() {
        setItems(prevValue => {
            return [...prevValue, inputText]
        })

        setInputText("");
    }

    return (
        <div className="todo-container">
            <header className="todo-header">Todo List</header>
            <div className="field-container">
                <input
                    onChange={handleChange}
                    name="input"
                    value={inputText}
                    type="text" />
                <button
                    type="button"
                    onClick={handleClick}>+</button>
            </div>
            <div className="items-container">
                <ul>
                    {
                        items.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Todo;