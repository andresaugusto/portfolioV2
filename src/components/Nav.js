//DEPS
import { useContext } from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

//COMPONENTS
import About from "./subcontent-options/About";
import Work from "./subcontent-options/Work";
import Contact from "./subcontent-options/Contact";

//VARIABLES
import { FocusedProjectContext, NavStateContext } from "./helpers/appContext";
// import { devBaseName, prodBaseName } from "./helpers/baseName"

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
							stroke="rgba(254, 238, 210, 1)"
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
							stroke="rgba(254, 238, 210, 1)"
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
		featuredGallery: {
			title: "featuredGallery",
			jsx: (
				<Link key="featuredGallery" to="/featured">
					<svg
						id="aomLogoNavButton"
						version="1.1"
						x="0px"
						y="0px"
						// width="720px"
						// height="864px"
						viewBox="0 0 720 864"
						enable-background="new 0 0 720 864"
						pointerEvents="visiblePainted"
					>
						<g id="_x30_">
							<path
								id="AO"
								classNameName="logo-buttons"
								d="M363.557,543.898c0,28.796-23.344,52.139-52.139,52.139c-28.796,0-52.139-23.343-52.139-52.139c0-28.795,23.343-52.139,52.139-52.139C340.213,491.76,363.557,515.104,363.557,543.898L363.557,543.898zM207.14,215.823v432.353h305.719L207.14,215.823z"
								style={{
									// strokeWidth: "18px",
									// stroke: "rgba(255, 255, 255, 1)",
									fill: "rgba(254, 238, 210, .75)",
								}}
							/>
							<path
								id="M"
								className="logo-buttons"
								d="M380.664,431.123 435.105,342.457 500.904,601.17z"
								style={{
									// strokeWidth: "18px",
									// stroke: "rgba(255, 255, 255, 1)",
									fill: "rgba(254, 238, 210, .75)",
								}}
							/>
						</g>
					</svg>
				</Link>
			)
		}
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

	//HANDLE CONTEXT
    const { setFocusedProject } = useContext(FocusedProjectContext)
    const { navState, setNavState } = useContext(NavStateContext)

	//NAV TOGGLING
	const toggleNav = () => {
		!navState.open
			? setNavState((prevState) => ({
				isShowing: prevState.isShowing,
				open: !navState.open,
				navLinks: prevState.navLinks,
				translateY: "translateY(0vh)",
				subcontent: {
					open: !navState.subcontent.open,
					title: prevState.subcontent.title,
					jsx: prevState.subcontent.jsx,
				},
			}))
			: setNavState((prevState) => ({
				isShowing: prevState.isShowing,
				open: !navState.open,
				navLinks: prevState.navLinks,
				translateY: null,
				subcontent: {
					open: !navState.subcontent.open,
					title: prevState.subcontent.title,
					jsx: prevState.subcontent.jsx,
				},
			}));
	};

	//SUBCONTENT
	const toggleSubcontent = (x) => {
		switch (x) {
			// (to close open option)
			case navState.subcontent.title: {
				setNavState((prevState) => ({
					isShowing: prevState.isShowing,
					open: prevState.open,
					navLinks: prevState.navLinks,
					translateY: prevState.translateY,
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
				setNavState((prevState) => ({
					isShowing: prevState.isShowing,
					open: prevState.open,
					navLinks: prevState.navLinks,
					translateY: prevState.translateY,
					subcontent: {
						open: true,
						title: navSubcontentOptions.about.title,
						jsx: navSubcontentOptions.about.jsx,
					},
				}));
				break;
			}
			case navSubcontentOptions.work.title: {
				setNavState((prevState) => ({
					isShowing: prevState.isShowing,
					open: prevState.open,
					navLinks: prevState.navLinks,
					translateY: prevState.translateY,
					subcontent: {
						open: true,
						title: navSubcontentOptions.work.title,
						jsx: navSubcontentOptions.work.jsx,
					},
				}));
				break;
			}
			case navSubcontentOptions.contact.title: {
				setNavState((prevState) => ({
					isShowing: prevState.isShowing,
					open: prevState.open,
					navLinks: prevState.navLinks,
					translateY: prevState.translateY,
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

	
    // //  //  //  SECTION TITLE HIGHLIGHT  //  //  //
    // const [focusWork, setFocusWork] = useState(false)
    // const [focusContact, setFocusContact] = useState(false)
    // const [focusAbout, setFocusAbout] = useState(false)


    const ItemContainerAnimation = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
            delayChildren: .10,
            staggerChildren: .10
            }
        },
        exit: { y: 100, opacity: 0 }
    };
    const ItemAnimation = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        },
        exit: { y: 10, opacity: 0 }
    };
    const MenuButtonAnimation = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        },
        exit: { y: 10, opacity: 0 }
    };
    const FeaturedGalleryButtonAnimation = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        },
        exit: { y: -50, opacity: 0 }
    };


	//RETURN
	return (
		<motion.div
			id="navScreen"
            initial="hidden"
            animate="visible"
		>
			<div
				id="navBar"
				style={{
					transform: navState.translateY,
				}}
			>
				<div id="menuButtonContainer">
					{navState.navLinks.featuredGallery? (
						<motion.div id="featuredGalleryButton" variants={FeaturedGalleryButtonAnimation} exit={FeaturedGalleryButtonAnimation.exit} style={{transition: "ease-out 1s"}}>
							{navButtonOptions.featuredGallery.jsx}
						</motion.div>
					) : ( null )}
					{navState.isShowing? (
						<motion.div id="menuButton" className="button" onClick={toggleNav} variants={MenuButtonAnimation} style={{transition: "ease-out 0.05s"}}>
							{!navState.open?navButtonOptions.menuButton.menuIsClosed.jsx:null}
							{navState.open?navButtonOptions.menuButton.menuIsOpen.jsx:null}
						</motion.div>
					) : ( null )}
				</div>
				<div id="navButtonsContainer">
					<div
						id="workButton"
						className="button"
						subcontent="work"
						onClick={(x) =>
							toggleSubcontent(x.target.attributes.subcontent.value)
						}
					>
						 work
					</div>
					<div
						id="contactButton"
						className="button"
						subcontent="contact"
						onClick={(x) =>
							toggleSubcontent(x.target.attributes.subcontent.value)
						}
					>
						 contact
					</div>
					<div
						id="aboutButton"
						className="button"
						subcontent="about"
						onClick={(x) =>
							toggleSubcontent(x.target.attributes.subcontent.value)
						}
					>
						 about
					</div>
				</div>
				{(navState.subcontent.open)&&(navState.subcontent.title==="work") ? navSubcontentOptions.work.jsx : null}
				{(navState.subcontent.open)&&(navState.subcontent.title==="contact") ? navSubcontentOptions.contact.jsx : null}
				{(navState.subcontent.open)&&(navState.subcontent.title==="about") ? navSubcontentOptions.about.jsx : null}
			</div>
		</motion.div>
	)
}
