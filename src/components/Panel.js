import React from 'react'

function Panel(props){
    
    return (
        <div class = "panel">
            <a href = {props.url} target="_blank" rel="noopener noreferrer"> {props.name} </a>
            <p>{props.content}</p>
        </div>
        
        
    )
}


export default Panel;