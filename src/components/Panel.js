import React from 'react'

function Panel(props){
    
    return (
		<li>
            <a href = {props.url} target="_blank" rel="noopener noreferrer"> {props.name} </a>
            <p>{props.content}</p>
      	</li> 
        
    )
}


export default Panel;
