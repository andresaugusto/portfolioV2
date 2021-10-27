//DEPS
import { useState, useContext } from "react";
import { motion } from "framer-motion"

//COMPS
import About from "./subcontent-options/About";
import Work from "./subcontent-options/Work";
import Contact from "./subcontent-options/Contact";

//CONSTS
import { localBaseName, deployedBaseName } from "./helpers/baseName"

//STYLES
import "./styles/nav.css";

//FUNC
export default function Nav() {


	//OBJECTS
	const navButtonOptions = {
		menuButton: {
			menuIsOpen: {
				title: "closeMenu",
				line1: {
					x1: "6.55671e-08",
					y1: "21.25",
					x2: "37",
					y2: "1.25",
					stroke: "white",
					rotateY: null,
				},
				line2: {
					x1: "calc(((6.55671e-08)+(37))/2)",
					y1: "11.25",
					x2: "calc(((6.55671e-08)+(37))/2)",
					y2: "11.25",
					stroke: "white",
					rotateY: null,
				},
				line3: {
					x1: "6.55671e-08",
					y1: "1.25",
					x2: "37",
					y2: "21.25",
					stroke: "white",
					rotateY: null,
				},
				jsx: (
					<svg viewBox="0 0 37 22">
						<line
							x1="6.55671e-08"
							y1="21.25"
							x2="37"
							y2="1.25"
							stroke="white"
							// stroke-width="1.5"
						>
							<animate
								attributeName="x1"
								from="6.55671e-08"
								to="37"
								dur=".56s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
							<animate
								attributeName="x2"
								from="37"
								to="6.55671e-08"
								dur=".56s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
							<animate
								attributeName="y2"
								from="21.25"
								to="1.25"
								dur=".56s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
						</line>
						{/* <line
							x1="calc(((6.55671e-08)+(37))/2)"
							y1="11.25"
							x2="calc(((6.55671e-08)+(37))/2)"
							y2="11.25"
							stroke="white"
							// stroke-width="1.5"
						>
							<animate
								attributeName="x1"
								from="6.55671e-08"
								to="calc(((6.55671e-08)+(37))/2)"
								dur=".25s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
							<animate
								attributeName="x2"
								from="37"
								to="calc(((6.55671e-08)+(37))/2)"
								dur=".25s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
						</line> */}
						<line
							id="menuButtonBlurredLine"
							x1="6.55671e-08"
							y1="21.25"
							x2="37"
							y2="1.25"
							stroke="white"
							// stroke-width="1.5"
						>
							<animate
								attributeName="y1"
								from="1.25"
								to="21.25"
								dur=".5s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
						</line>
					</svg>
				)
			},
			menuIsClosed: {
				title: "openMenu",
				line1: {
					x1: "6.55671e-08",
					y1: "1.25",
					x2: "37",
					y2: "1.25",
					stroke: "white",
					rotateY: null,
				},
				line2: {
					x1: "6.55671e-08",
					y1: "11.25",
					x2: "37",
					y2: "11.25",
					stroke: "white",
					rotateY: null,
				},
				line3: {
					x1: "6.55671e-08",
					y1: "21.25",
					x2: "37",
					y2: "21.25",
					stroke: "white",
					rotateY: null,
				},
				jsx: (
					<svg viewBox="0 0 37 22">
						<line
							x1="6.55671e-08"
							y1="1.25"
							x2="37"
							y2="1.25"
							stroke="white"
							// stroke-width="1.5"
						>
							<animate
								attributeName="x1"
								from="37"
								to="6.55671e-08"
								dur=".56s"
								fill="freeze"
								keySplines="0 1 .25 1"								
							/>
							<animate
								attributeName="x2"
								from="6.55671e-08"
								to="37"
								dur=".56s"
								fill="freeze"
								keySplines="0 1 .25 1"								
							/>
							<animate
								attributeName="y2"
								from="21.25"
								to="1.25"
								dur=".56s"
								fill="freeze"
								keySplines="0 0 .25 1"								
							/>
						</line>
						{/* <line
							x1="6.55671e-08"
							y1="11.25"
							x2="37"
							y2="11.25"
							stroke="white"
							// stroke-width="1.5"
						>
							<animate
								attributeName="x1"
								from="calc(((6.55671e-08)+(37))/2)"
								to="6.55671e-08"
								dur=".25s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
							<animate
								attributeName="x2"
								from="calc(((6.55671e-08)+(37))/2)"
								to="37"
								dur=".25s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
						</line> */}
						<line
							id="menuButtonBlurredLine"
							x1="6.55671e-08"
							y1="21.25"
							x2="37"
							y2="21.25"
							stroke="rgba(254, 238, 210, 1)"
							// stroke-width="1.5"
						>
							<animate
								attributeName="y1"
								from="1.25"
								to="21.25"
								dur=".5s"
								fill="freeze"
								keySplines="0 1 .25 1"
							/>
						</line>
					</svg>
				)
			},
		},
	};
	const navSubcontentOptions = {
		about: {
			title: "about",
			jsx: (
				<div id="infoContainer">
					<About />
				</div>
			),
		},
		work: {
			title: "work",
			jsx: (
				<div id="infoContainer">
					<Work />
				</div>
			),
		},
		contact: {
			title: "contact",
			jsx: (
				<div id="infoContainer">
					<Contact />
				</div>
			),
		},
	};

	//NAV STATE
	const [nav, setNav] = useState({
		open: false,
		translateY: null,
		subcontent: {
			open: false,
			title: null,
			jsx: null,
		},
	});

	//NAV TOGGLING
	const toggleNav = () => {
		nav.open === false
			? setNav((prevState) => ({
					open: !nav.open,
					translateY: "translateY(0)",
					subcontent: {
						open: !nav.subcontent.open,
						title: prevState.subcontent.title,
						jsx: prevState.subcontent.jsx,
					},
			  }))
			: setNav((prevState) => ({
					open: !nav.open,
					translateY: null,
					subcontent: {
						open: !nav.subcontent.open,
						title: prevState.subcontent.title,
						jsx: prevState.subcontent.jsx,
					},
			  }));
	};

	//SUBCONTENT
	const toggleSubcontent = (x) => {
		switch (x) {
			// (to close open option)
			case nav.subcontent.title: {
				setNav((prevState) => ({
					open: prevState.open,
					translateY: prevState.translateY,
					buttons: prevState.buttons,
					subcontent: {
						open: false,
						title: null,
						jsx: null,
					},
				}));
				break;
			}
			// (to open/switch option)
			case navSubcontentOptions.about.title: {
				setNav((prevState) => ({
					open: prevState.open,
					translateY: prevState.translateY,
					buttons: prevState.buttons,
					subcontent: {
						open: true,
						title: navSubcontentOptions.about.title,
						jsx: navSubcontentOptions.about.jsx,
					},
				}));
				break;
			}
			case navSubcontentOptions.work.title: {
				setNav((prevState) => ({
					open: prevState.open,
					translateY: prevState.translateY,
					buttons: prevState.buttons,
					subcontent: {
						open: true,
						title: navSubcontentOptions.work.title,
						jsx: navSubcontentOptions.work.jsx,
					},
				}));
				break;
			}
			case navSubcontentOptions.contact.title: {
				setNav((prevState) => ({
					open: prevState.open,
					translateY: prevState.translateY,
					buttons: prevState.buttons,
					subcontent: {
						open: true,
						title: navSubcontentOptions.contact.title,
						jsx: navSubcontentOptions.contact.jsx,
					},
				}));
				break;
			}
			default:
				break;
		}
	};

	
    // //  //  //  ITEM HIGHLIGHT  //  //  //
    // const [focusHome, setFocusHome] = useState(false)
    // const [focusGallery, setFocusGallery] = useState(false)
    // const [focusResidentArtists, setFocusResidentArtists] = useState(false)
    // const [focusMerchandise, setFocusMerchandise] = useState(false)
    // const [focusContactUs, setFocusContactUs] = useState(false)
    // const closeAndUnfocusTitles = () => {
    //     setFocusHome(false)
    //     setFocusGallery(false)
    //     setFocusResidentArtists(false)
    //     setFocusMerchandise(false)
    //     setFocusContactUs(false)
    // }


	//RETURN
	return (
		<div id="navScreen">
			<div
				id="navBar"
				style={{
					transform: nav.translateY,
				}}
			>
				<div id="menuButtonContainer">
					{console.log(window.location.href)}
					{window.location.href===(`${localBaseName}/`||`${deployedBaseName}/`)||(`${localBaseName}/featured`||`${deployedBaseName}/featured`) ? (
						<div></div>
					) : (
						<div>la machine</div>
					)}
					<div id="menuButton" class="button" onClick={toggleNav}>
						{!nav.open?navButtonOptions.menuButton.menuIsClosed.jsx:null}
						{nav.open?navButtonOptions.menuButton.menuIsOpen.jsx:null}
					</div>
				</div>
				<div id="navButtonsContainer">
					<div
						id="workButton"
						class="button"
						subcontent="work"
						onClick={(x) =>
							toggleSubcontent(x.target.attributes.subcontent.value)
						}
					>
						 work
					</div>
					<div
						id="contactButton"
						class="button"
						subcontent="contact"
						onClick={(x) =>
							toggleSubcontent(x.target.attributes.subcontent.value)
						}
					>
						 contact
					</div>
					<div
						id="aboutButton"
						class="button"
						subcontent="about"
						onClick={(x) =>
							toggleSubcontent(x.target.attributes.subcontent.value)
						}
					>
						 about
					</div>
				</div>
				{(nav.subcontent.open)&&(nav.subcontent.title==="work") ? navSubcontentOptions.work.jsx : null}
				{(nav.subcontent.open)&&(nav.subcontent.title==="contact") ? navSubcontentOptions.contact.jsx : null}
				{(nav.subcontent.open)&&(nav.subcontent.title==="about") ? navSubcontentOptions.about.jsx : null}
			</div>
		</div>
	)
}
