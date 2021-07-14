//DEPS
import { motion } from "framer-motion"
import openingBackground from "../../media/images/IMG_2695.JPG"

//STYLES
import "./../App.css";

export default function OpeningCeremony() {

	const bgImage = () => {
		document.body.style.backgroundColor = "red";
		document.body.style.backgroundImage = "none";
	};

	const icon = {
		hidden: {
			pathLength: 0,
			fill: "rgba(0, 0, 0, 0)",
		},
		visible: {
			pathLength: 1,
			// fill: "rgba(0, 0, 0, 1)",
		},
	};

	return (
			<div id="animationWindow">
                <div className="logo-container">
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
                            <motion.path
                                id="A"
                                className="path-letters"
                                display="inline"
                                            stroke-width="0.3543"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                d="M207.14,648.176 207.14,215.823 512.859,648.176z"
                                variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 4, ease: "easeInOut" },
                                    // fill: { duration: 4, ease: [1, 0, 0.8, 1] },
                                }}
                            />
                            <a href="">
                                <motion.path
                                    id="O"
                                    style={{}}
                                    className="path-letters"
                                                display="inline"
                                    stroke-width="0.3543"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    d="M259.279,543.898c0-28.795,23.344-52.139,52.139-52.139c28.796,0,52.139,23.344,52.139,52.139c0,28.796-23.343,52.139-52.139,52.139C282.623,596.037,259.279,572.694,259.279,543.898L259.279,543.898z"
                                    variants={icon}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        default: { duration: 4, ease: "easeInOut", animationDelay: '1s' },
                                        // fill: { duration: 4, ease: [1, 0, 0.8, 1] },
                                    }}
                                />
                            </a>
                            <a href="">
                                <motion.path
                                    id="M"
                                    style={{animationDelay: '2s'}}
                                    className="path-letters"
                                                display="inline"
                                    stroke-width="0.3543"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    d="M380.664,431.123 435.105,342.457 500.904,601.17z"
                                    variants={icon}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        default: { duration: 4, ease: "easeInOut" },
                                        // fill: { duration: 4, ease: [1, 0, 0.8, 1] },
                                    }}
                                />
                            </a>
                        </g>
                    </motion.svg>
                </div>
            </div>

	);
}
