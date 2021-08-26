//DEPS
import { useState, useContext } from "react";

//COMPS
import About from "./subcontent-options/About";
import Work from "./subcontent-options/Work";
import Contact from "./subcontent-options/Contact";

//STYLES
import "./styles/nav.css";

//FUNC
export default function Nav() {
	//NAV STATE

	const [nav, setNav] = useState({
		open: false,
		translateY: null,
		subcontent: {
			open: false,
			title: null,
			content: null,
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
						content: prevState.subcontent.content,
					},
			  }))
			: setNav((prevState) => ({
					open: !nav.open,
					translateY: null,
					subcontent: {
						open: !nav.subcontent.open,
						title: prevState.subcontent.title,
						content: prevState.subcontent.content,
					},
			  }));
	};

	//SUBCONTENT

	const navSubcontentOptions = {
		about: {
			title: "about",
			content: (
				<div id="infoContainer">
					<About />
				</div>
			),
		},
		work: {
			title: "work",
			content: (
				<div id="infoContainer">
					<Work />
				</div>
			),
		},
		contact: {
			title: "contact",
			content: (
				<div id="infoContainer">
					<Contact />
				</div>
			),
		},
	};

	const toggleSubcontent = (x) => {
		switch (x) {
			// (to close open option)
			case nav.subcontent.title: {
				setNav((prevState) => ({
					open: prevState.open,
					translateY: prevState.translateY,
					subcontent: {
						open: false,
						title: null,
						content: null,
					},
				}));
				break;
			}
			// (to open/switch option)
			case navSubcontentOptions.about.title: {
				setNav((prevState) => ({
					open: prevState.open,
					translateY: prevState.translateY,
					subcontent: {
						open: true,
						title: navSubcontentOptions.about.title,
						content: navSubcontentOptions.about.content,
					},
				}));
				break;
			}
			case navSubcontentOptions.work.title: {
				setNav((prevState) => ({
					open: prevState.open,
					translateY: prevState.translateY,
					subcontent: {
						open: true,
						title: navSubcontentOptions.work.title,
						content: navSubcontentOptions.work.content,
					},
				}));
				break;
			}
			case navSubcontentOptions.contact.title: {
				setNav((prevState) => ({
					open: prevState.open,
					translateY: prevState.translateY,
					subcontent: {
						open: true,
						title: navSubcontentOptions.contact.title,
						content: navSubcontentOptions.contact.content,
					},
				}));
				break;
			}
			default:
				break;
		}
	};

	return (
		<div id="navScreen">
			<div
				id="navBar"
				style={{
					transform: nav.translateY,
				}}
			>
				<div id="menuButtonContainer">
					<div id="menuButton" class="button" onClick={toggleNav}>
						{nav.open === true ? (
							"X"
						) : (
							<svg viewBox="0 0 37 22">
								<line
									x1="6.55671e-08"
									y1="1.25"
									x2="37"
									y2="1.25"
									stroke="white"
									stroke-width="1.5"
								/>
								<line
									x1="6.55671e-08"
									y1="11.25"
									x2="37"
									y2="11.25"
									stroke="white"
									stroke-width="1.5"
								/>
								<line
									x1="6.55671e-08"
									y1="21.25"
									x2="37"
									y2="21.25"
									stroke="white"
									stroke-width="1.5"
								/>
							</svg>
						)}
					</div>
				</div>
				<div id="navButtonsContainer">
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
				</div>
				{nav.subcontent.open ? nav.subcontent.content : null}
			</div>
		</div>
	);
}
