//DEPS
import { useState, useMemo } from "react";
// import { motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";

//VARIABLES
import { FocusedProjectContext, NavStateContext } from "./components/helpers/appContext";

//COMPONENTS
import OpeningCeremony from "./components/OpeningCeremony"
import Background from "./components/Background"
import Nav from "./components/Nav"
import HomeLogo from "./components/HomeLogo"
import CaseStudy from "./components/CaseStudy"

//CONSTS
// import { devBaseName, prodBaseName } from "./components/helpers/baseName"

//STYLES
import "./App.css"

export default function App() {

	//CONTEXT MASTER SETTINGS
	const [ navState, setNavState ] = useState({
		isShowing: false,
		open: false,
		navLinks: {
			featuredGallery: false,
            caseStudyInfoCard: false,
		},
		translateY: null,
		subcontent: {
			open: false,
			title: null,
			jsx: null,
		},
	});
	const [ focusedProject, setFocusedProject ] = useState({
		projectKey: null,
		genMedia: {
			images: {
				mainWide: null,
				mainTablet: null,
				mainPhone: null,
			},
			videos: {
				mainWide1080pFiltered: {
					mp4: null,
					webm: null,
				},
				mainWide1080p: {
					mp4: null,
					webm: null,
				},
				mainWide540p: {
					mp4: null,
					webm: null,
				},
			},
		},
		styleInfluencers: {
			colors: {
				primaryColor: null,
				secondaryColor: null,
			},
		},
	})

	const providerNavState = useMemo (() => ({ navState, setNavState }), [ navState, setNavState ])
	const providerFocusedProject = useMemo (() => ({ focusedProject, setFocusedProject }), [ focusedProject, setFocusedProject ])

	//CONTENT MANAGEMENT THROUGH PAGE NAVIGATION - [difficulties with client side address vs server side address]
	// const neutralAddresses = [`${devBaseName}`, `${devBaseName}/`, `${devBaseName}/featured`, `${devBaseName}/featured/`, `${prodBaseName}`, `${prodBaseName}/`, `${prodBaseName}/featured`, `${prodBaseName}/featured/`]
	// const [ outgoingPage, setOutgoingPage ] = useState(null)

	// useEffect(() => {
	// 	neutralAddresses.includes(window.location.href) ? (
	// 		// setFocusedProject({
	// 		// 	projectKey: null,
	// 		// 	genMedia: {
	// 		// 		images: {
	// 		// 			mainWide: null,
	// 		// 			mainTablet: null,
	// 		// 			mainPhone: null,
	// 		// 		},
	// 		// 		videos: {
	// 		// 			mainWide1080pFiltered: {
	// 		// 				mp4: null,
	// 		// 				webm: null,
	// 		// 			},
	// 		// 			mainWide1080p: {
	// 		// 				mp4: null,
	// 		// 				webm: null,
	// 		// 			},
	// 		// 			mainWide540p: {
	// 		// 				mp4: null,
	// 		// 				webm: null,
	// 		// 			},
	// 		// 		},
	// 		// 	},
	// 		// 	styleInfluencers: {
	// 		// 		colors: {
	// 		// 			primaryColor: null,
	// 		// 			secondaryColor: null,
	// 		// 		},
	// 		// 	},
	// 		// })
	// 		console.log(`home or featured`)
	// 	) : (
	// 		console.log(`NOT home or featured`)
	// 	)
	// })

	// function handlePageChange() {
	// 	neutralAddresses.includes(window.location.href) ? (
	// 		// setNav((prevState) => ({
	// 		// 	open: false,
	// 		// 	navLinks: {
	// 		// 		featuredGallery: false,
	// 		// 	},
	// 		// 	translateY: null,
	// 		// 	subcontent: {
	// 		// 		open: false,
	// 		// 		title: prevState.subcontent.title,
	// 		// 		jsx: prevState.subcontent.jsx,
	// 		// 	},
	// 		// }))
	// 		console.log("set neutral address: "+window.location.href)
	// 	) : (
	// 		// setNav((prevState) => ({
	// 		// 	open: false,
	// 		// 	navLinks: {
	// 		// 		featuredGallery: true,
	// 		// 	},
	// 		// 	translateY: null,
	// 		// 	subcontent: {
	// 		// 		open: false,
	// 		// 		title: prevState.subcontent.title,
	// 		// 		jsx: prevState.subcontent.jsx,
	// 		// 	},
	// 		// }))
	// 		console.log("set NON neutral address: "+window.location.href)
	// 	)
	// 	setOutgoingPage(window.location.href)
	// 	console.log(outgoingPage)
	// }
	// // console.log(document.location.href + " " + window.location.href)

	// useEffect(() => {
	// 	window.location.href!==outgoingPage ? (
	// 		handlePageChange()
	// 		// console.log(document.location.href + " " + window.location.href)
	// 	) : (
	// 		console.log()
	// 	)
	// })

	

	return (
		<div>

			<NavStateContext.Provider value={ providerNavState }>
				<FocusedProjectContext.Provider value={ providerFocusedProject }>

					<Background focusedProject={ focusedProject } />

					<Switch>
						<Route exact path="/" component={ OpeningCeremony } />
						<Route exact path="/featured" component={ HomeLogo } />
						<Route exact path="/project/:pk" component={ CaseStudy } />
					</Switch>

					<Nav />

				</FocusedProjectContext.Provider>
			</NavStateContext.Provider>

		</div>
	)
}
