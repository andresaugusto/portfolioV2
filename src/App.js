//DEPS
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import { FocusProjectContext, ContextInfluencers } from "./components/helpers/appContext"

//COMPS
import OpeningCeremony from "./components/OpeningCeremony"
import Background from "./components/Background"
import Nav from "./components/Nav"

import HomeLogo from "./components/HomeLogo"

import AVTC from "./components/projects/AVTC"
import Fire from "./components/projects/Fire"
import WIP from "./components/projects/WIP"

//STYLES
import "./App.css"

export default function App() {

	// const bgChange = () => {
	// 	document.body.style.backgroundColor = "red";
	// 	document.body.style.backgroundImage = "none";
	// };

	//CONTEXT MASTER SETTINGS
	const [ focusProject, setFocusProject ] = useState("red")
	const providerFocusProject = useMemo (() => ({ focusProject, setFocusProject }), [ focusProject, setFocusProject ])

	const [ contextInfluencers, setContextInfluencers ] = useState(false)
	const providerContextInfluencers = useMemo (() => ({ contextInfluencers, setContextInfluencers }), [ contextInfluencers, setContextInfluencers ])
	

	return (
		<div>

			<FocusProjectContext.Provider value={ providerFocusProject }>
				<ContextInfluencers.Provider value={ providerContextInfluencers }>

					{/* <OpeningCeremony /> */}
					<Background />

					<Switch>
						{/* {/* <Route exact path="/" component={OpeningCeremony}/> */}
						<Route exact path="/featured" component={HomeLogo}/>
						<Route exact path="/AVTC" component={AVTC}/>
						<Route exact path="/Fire" component={Fire}/>
						<Route exact path="/WIP" component={WIP}/>
					</Switch>

					<Nav />

				</ContextInfluencers.Provider>
			</FocusProjectContext.Provider>

		</div>
	)
}
