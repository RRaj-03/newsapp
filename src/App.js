import "./App.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import News from "./components/news";
import LiveNews from "./components/livenews";

function App() {
	const [search, setsearch] = useState({
		searchText: " ",
		search: false,
	});
	const searching = () => {
		const searchTEXT = document.getElementById("searchbar").value;
		setsearch({
			searchText: searchTEXT,
			search: true,
		});
		document.getElementById("searchbar").value = "";
	};
	return (
		<>
			<BrowserRouter>
				<Navbar searching={searching} />
				<LiveNews />
				<Routes>
					<Route
						exact
						path="/"
						element={<News search={search} key="general" />}
					/>
					<Route
						exact
						path="business"
						element={
							<News search={search} key="business" category="business" />
						}
					/>
					<Route
						exact
						path="technology"
						element={
							<News search={search} key="technology" category="technology" />
						}
					/>
					<Route
						exact
						path="sports"
						element={<News search={search} key="sports" category="sports" />}
					/>
					<Route
						exact
						path="science"
						element={<News search={search} key="science" category="science" />}
					/>
					<Route
						exact
						path="health"
						element={<News search={search} key="health" category="health" />}
					/>
					<Route
						exact
						path="entertainment"
						element={
							<News
								search={search}
								key="entertainment"
								category="entertainment"
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
