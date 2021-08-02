//DEPS
import { motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";

//COMPS
import OpeningCeremony from './components/OpeningCeremony'
import HomeLogo from './components/HomeLogo'
import AVTC from "./components/projects/AVTC"
import Fire from "./components/projects/Fire"
import WIP from "./components/projects/WIP"

//STYLES
import "./App.css";

export default function App() {

	// const bgChange = () => {
	// 	document.body.style.backgroundColor = "red";
	// 	document.body.style.backgroundImage = "none";
	// };

	return (
		<div>
			{/* <OpeningCeremony /> */}
			{/* <HomeLogo /> */}
			<Switch>
				{/* {/* <Route exact path="/" component={OpeningCeremony}/> */}
				<Route exact path="/" component={HomeLogo}/>
				<Route exact path="/AVTC" component={AVTC}/>
				<Route exact path="/Fire" component={Fire}/>
				<Route exact path="/WIP" component={WIP}/>
			</Switch>
			{/* <button onClick={bgChange}>el bg</button> */}
		</div>
	)
}
