import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Profile />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
