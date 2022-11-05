import React from "react"
import Panel from './Panel';
import './Topic.css';

function Topic(props){
    
	const panels = props.panels.map((panel) => (
		
		<Panel name={panel.name} url={panel.url} /> 
	
	));	
	console.log(panels)
	

    return (
		<div>
        	<h3> {props.name} </h3>	
			<ul class="panelMenu">
			{panels}
			</ul>
		</div>	
    )
}

export default Topic;
