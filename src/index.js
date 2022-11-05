import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//TESTING DATE START 

const topics = [{id: 0,name: "World News", 
					   panels: [{name: "BBC News", url: "https://www.bbc.com"}, 
						   		{name: "NBC News", url: "https://www.nbcnews.com"}	
								]},
				{id: 1, name: "Sports",
						panels: [{name: "ESPN", url:"https://www.espn.com"},
							 	{name: "FOX Sports", url: "https://www.foxsports.com"},
								]}, 
				{id: 2, name: "Technology",
						panels: [{name: "CNET", url: "https://www.cnet.com"},
							 	{name: "WIRED", url: "https://www.wired.com"}
								]}	
				]
root.render(
  <React.StrictMode>
    <App topics={topics}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
