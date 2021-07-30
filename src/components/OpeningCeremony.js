//DEPS
import { motion } from "framer-motion"

//STYLES
// import "./../App.css"
import "./styles/opening-ceremony.css"


export default function OpeningCeremony() {

	const logoOutlining = {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
    }

    const welcomeDisappear = {
        initial: { opacity: 1, pointerEvents: "all" },
        animate: { opacity: 0, pointerEvents: "none" },
    }

	return (
        <motion.div
            id="animationWindow"
            variants={welcomeDisappear}
            initial="initial"
            animate="animate"
            transition={{
                default: { delay: 10 },
            }}
        >
            <img
                id="backgroundImage" 
                src="https://github.com/andresaugusto/portfolioV2/blob/main/media/images/IMG_2695.JPG?raw=true"
                alt='IMG_2695.JPG'
            />
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
                >

                {/* FOR PATH */}

                    <g id="_x30_">
                        <motion.path
                            id="A"
                            className="path-letters"
                            d="M207.14,215.823 207.14,648.176 512.859,648.176z"
                            variants={logoOutlining}
                            initial="initial"
                            animate="animate"
                            transition={{
                                default: { duration: 3, ease: [1, 0.8, 1, 1], delay: 3 },
                                opacity: { duration: .15, ease: "easeInOut", delay: 3 }
                            }}
                        />
                        <motion.path
                            id="O"
                            className="path-letters"
                            d="M348.286,507.031c-20.361-20.361-53.375-20.361-73.736,0s-20.36,53.374,0,73.734c20.362,20.362,53.374,20.362,73.736,0C368.646,560.405,368.647,527.393,348.286,507.031L348.286,507.031z"
                            variants={logoOutlining}
                            initial="initial"
                            animate="animate"
                            transition={{
                                default: { duration: 2.5, ease: [1, 1, 0.8, 1], delay: 5.5 },
                                opacity: { duration: .5, ease: "easeInOut", delay: 5.5 }
                            }}
                        />                            
                        <motion.path
                            id="M"
                            className="path-letters"
                            d="M500.904,601.17 380.664,431.123 435.105,342.457z"
                            variants={logoOutlining}
                            initial="initial"
                            animate="animate"
                            transition={{
                                default: { duration: 2, ease: [1, 0.8, 0.8, 1], delay: 5.2 },
                                opacity: { duration: .5, ease: "easeInOut", delay: 5.2 }
                            }}
                        />

                    {/* FOR FILL */}

                        <path
                            id="AO"
                            className="letter-fill"
                            d="M363.557,543.898c0,28.796-23.344,52.139-52.139,52.139c-28.796,0-52.139-23.343-52.139-52.139c0-28.795,23.343-52.139,52.139-52.139C340.213,491.76,363.557,515.104,363.557,543.898L363.557,543.898zM207.14,215.823v432.353h305.719L207.14,215.823z"
                        />                            
                        <path
                            id="M"
                            className="letter-fill"
                            d="M500.904,601.17 380.664,431.123 435.105,342.457z"
                        />

                    </g>
                </motion.svg>
            </div>
        </motion.div>

	);
}
