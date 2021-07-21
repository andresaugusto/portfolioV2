//COMPS
import OpeningCeremony from './components/OpeningCeremony'
import HomeLogo from './components/HomeLogo'

//DEPS
import { motion } from "framer-motion";

//STYLES
import "./App.css";

export default function App() {

	// const bgChange = () => {
	// 	document.body.style.backgroundColor = "red";
	// 	document.body.style.backgroundImage = "none";
	// };

	return (
		<div>
			<OpeningCeremony />
			<HomeLogo />
			{/* <button onClick={bgChange}>el bg</button> */}
		</div>
	);
}
