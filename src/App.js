//DEPS
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import { FocusedProjectContext, ContextInfluencers } from "./components/helpers/appContext"

//COMPS
import OpeningCeremony from "./components/OpeningCeremony"
import Background from "./components/Background"
import Nav from "./components/Nav"

import HomeLogo from "./components/HomeLogo"

//STYLES
import "./App.css"

export default function App() {

	// const bgChange = () => {
	// 	document.body.style.backgroundColor = "red";
	// 	document.body.style.backgroundImage = "none";
	// };

	//CONTEXT MASTER SETTINGS
	const [ focusedProject, setFocusedProject ] = useState({
		projectKey: null,
		genMedia: {
			images: {
				mainWide: null,
				mainTablet: null,
				mainPhone: null,
			},
			videos: {
				mainWide1080pX4: {
					mp4: null,
					alternative: null,
				},
				mainWide540pX4: {
					mp4: null,
					alternative: null,
				},
			},
		},
		styleInfluencers: {
			colors: {
				primaryColor: null,
				secondaryColor: null,
			}
		}
	})
	const providerFocusedProject = useMemo (() => ({ focusedProject, setFocusedProject }), [ focusedProject, setFocusedProject ])

	const [ contextInfluencers, setContextInfluencers ] = useState(false)
	const providerContextInfluencers = useMemo (() => ({ contextInfluencers, setContextInfluencers }), [ contextInfluencers, setContextInfluencers ])
	

	return (
		<div>

			<FocusedProjectContext.Provider value={ providerFocusedProject }>
				<ContextInfluencers.Provider value={ providerContextInfluencers }>

					{/* <OpeningCeremony /> */}
					<Background focusedProject={ focusedProject }/>

					<Switch>
						{/* {/* <Route exact path="/" component={OpeningCeremony}/> */}
						<Route exact path="/featured" component={HomeLogo}/>
						{/* <Route exact path='project/:projectKey' component={CaseStudy} /> */}
						{/* <Route exact path="/AVTC" component={AVTC}/>
						<Route exact path="/Fire" component={Fire}/>
						<Route exact path="/WIP" component={WIP}/> */}
					</Switch>

					<Nav />

				</ContextInfluencers.Provider>
			</FocusedProjectContext.Provider>

		</div>
	)
}
