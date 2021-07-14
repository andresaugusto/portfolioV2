//COMPS
import OpeningCeremony from './components/OpeningCeremony'

//DEPS
import { motion } from "framer-motion";

//STYLES
import "./App.css";

export default function App() {
	const bgChange = () => {
		document.body.style.backgroundColor = "red";
		document.body.style.backgroundImage = "none";
	};

	return (
		<div style={{ width: "" }}>
			<OpeningCeremony />

				<motion.svg
						id="aomLogo"
						version="1.1"
						x="0px"
						y="0px"
						width="720px"
						height="864px"
						viewBox="0 0 720 864"
						enable-background="new 0 0 720 864"
						pointerEvents="visiblePainted"
					>
						<g id="_x30_">
							<a href="https://www.google.com/search?q=elvin+me+lo+mama&oq=elvin+me+lo+mama&aqs=chrome..69i57j33i160l3j33i299l2.7910j1j1&sourceid=chrome&ie=UTF-8">
								<motion.path
									id="AO"
									fill="rgba(0, 0, 0, 0)"
									className="path-letters"
									display="inline"
									stroke-width="0.3543"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-miterlimit="10"
									d="M363.557,543.898c0,28.796-23.344,52.139-52.139,52.139c-28.796,0-52.139-23.343-52.139-52.139c0-28.795,23.343-52.139,52.139-52.139C340.213,491.76,363.557,515.104,363.557,543.898L363.557,543.898zM207.14,215.823v432.353h305.719L207.14,215.823z"
								/>
							</a>
							<a href="">
								<motion.path
									id="O"
									fill="rgba(0, 0, 0, 0)"
									style={{}}
									className="path-letters"
									display="inline"
									stroke-width="0.3543"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-miterlimit="10"
									d="M259.279,543.898c0-28.795,23.344-52.139,52.139-52.139c28.796,0,52.139,23.344,52.139,52.139c0,28.796-23.343,52.139-52.139,52.139C282.623,596.037,259.279,572.694,259.279,543.898L259.279,543.898z"
								/>
							</a>
							<a href="">
								<motion.path
									id="M"
									fill="rgba(0, 0, 0, 0)"
									style={{animationDelay: '2s'}}
									className="path-letters"
									display="inline"
									stroke-width="0.3543"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-miterlimit="10"
									d="M380.664,431.123 435.105,342.457 500.904,601.17z"
								/>
							</a>
						</g>
					</motion.svg>
			<button onClick={bgChange}>el bg</button>
		</div>
	);
}
