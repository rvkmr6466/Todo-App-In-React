import React from 'react';
import Todo from './Todo';

function App() {

	const DateObject = new Date();
	const curYear = DateObject.getFullYear();
	// console.log(curYear);

	return (
		<div className="App">
			<header className="App-header">
				To Do List
			</header>

			<Todo />

			<footer className="App-footer">
				Copyright &#169; <span id="year">{curYear}</span>
			</footer>
		</div>
	);
}

export default App;
