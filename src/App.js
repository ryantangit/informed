import React from "react";
import './App.css';
import Title from './components/Title';
import Topic from './components/Topic';
function App(props) {
 	
	const topics = props.topics.map((topic) => (
		<div>
			<Topic 
				name={topic.name}
				panels={topic.panels}
				key = {topic.key}
			/>
		</div>
	));

	return (      
		<div id="Main">
			<Title />
			{topics}
		</div>
	);
}

export default App;
