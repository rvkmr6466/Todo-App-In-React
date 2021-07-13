import React from 'react';

function TodoItem(props) {
    console.log(props)
    
    /**
     * @desc list items
     *
    */ 
    return (
        <div onClick={() => props.onChecked(props.id)}>
            <li>{props.text}</li>
        </div>
    )


}

export default TodoItem;