import React, { Component } from "react";

import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monster: [],
			searchField: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(user => this.setState({ monster: user }));
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monster, searchField } = this.state;
		const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

		return (
			<div className="App">
				<h1>Monster Rolodex</h1>
				<SearchBox placeholder="Search monster" handleChange={this.handleChange} />
				<CardList monster={filteredMonsters} />
			</div>
		);
	}
}

export default App;
