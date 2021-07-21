//COMPS
import { useState } from "react";

//DEPS
import { motion } from "framer-motion";

//STYLES
import "../App.css";

export default function HomeLogo() {
	const [OrbitalValue, setOrbitalValue] = useState ({
		xAxis: 0,
		yAxis: 0
	});

    const [LogoCardTransTimer, setLogoCardTransTimer] = useState ({
        time: "none"
    })

    const [ButtonContainerStyles, setButtonContainerStyles] = useState ({
        zTransformation: "none"
    })

    const [GlowContainerStyles, setGlowContainerStyles] = useState ({
        filter: "blur(8px)",
        strokeWidth: 30
    })

    const [BackgroundImage, setBackgroundImage] = useState ({
        backgroundImage: "blur(8px)",
        strokeWidth: 30
    })

	function CreateOrbitalValue(ev) {
		// console.log(`left: ${ev.pageX}, top: ${ev.pageY}`);
		setOrbitalValue({
			xAxis: (window.innerWidth / 2 - ev.pageX) / -25,
			yAxis: (window.innerHeight / 2 - ev.pageY) / 25
		});
		console.log(`left: ${OrbitalValue.yAxis}, top: ${OrbitalValue.xAxis}`);
	}

    function EnterLogoAnimation() {
        setLogoCardTransTimer({ time: "all 0.12s ease" })
        setButtonContainerStyles({ zTransformation: "translateZ(40px)" })
        setGlowContainerStyles({  })
        console.log(LogoCardTransTimer.time)
        setTimeout(() => {
            setLogoCardTransTimer({ time: "none" })
        }, 120)
    }

    function ExitLogoAnimation() {
        setLogoCardTransTimer({ time: "all 0.5s ease" })
        setButtonContainerStyles({ zTransformation: "translateZ(1px)" })
        setOrbitalValue({ xAxis: 0, yAxis: 0 })
    }

    // AnimateIn

    // AnimateOut

	return (
		<div id="homeContainer">
			<div id="logoCard" 
                onMouseMove={(ev) => CreateOrbitalValue(ev)}
                onMouseEnter={EnterLogoAnimation}
                onMouseLeave={ExitLogoAnimation}
                style={{
                    transform: `rotateY(${OrbitalValue.xAxis}deg) rotateX(${OrbitalValue.yAxis}deg)`,
                    transition: `${LogoCardTransTimer.time}`
                }}
            >
				<div id="buttonContainer"
                    style={{
                        // transform: `${ButtonContainerStyles.zTransformation}`
                    }}
                >
                    <svg
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
                            <a href="">
                                <path
                                    id="O"
                                    className="logo-buttons"
                                    display="inline"
                                    // fill="rgba(251, 192, 192, 0.14)"
                                    stroke="none"
                                    d="M259.279,543.898c0-28.795,23.344-52.139,52.139-52.139c28.796,0,52.139,23.344,52.139,52.139c0,28.796-23.343,52.139-52.139,52.139C282.623,596.037,259.279,572.694,259.279,543.898L259.279,543.898z"
                                />
                            </a>
                            <a href="https://www.google.com/search?q=elvin+me+lo+mama&oq=elvin+me+lo+mama&aqs=chrome..69i57j33i160l3j33i299l2.7910j1j1&sourceid=chrome&ie=UTF-8">
                                <path
                                    id="AO"
                                    className="logo-buttons"
                                    display="inline"
                                    // fill="rgba(251, 192, 192, 0.2)"
                                    // stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    d="M363.557,543.898c0,28.796-23.344,52.139-52.139,52.139c-28.796,0-52.139-23.343-52.139-52.139c0-28.795,23.343-52.139,52.139-52.139C340.213,491.76,363.557,515.104,363.557,543.898L363.557,543.898zM207.14,215.823v432.353h305.719L207.14,215.823z"
                                />
                            </a>
                            <a href="">
                                <path
                                    id="M"
                                    className="logo-buttons"
                                    display="inline"
                                    // fill="rgba(251, 192, 192, 0.2)"
                                    // stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    d="M380.664,431.123 435.105,342.457 500.904,601.17z"
                                />
                            </a>
                        </g>
                    </svg>
                </div>
                <div id="glowContainer"
                    style={{
                        filter: `${GlowContainerStyles.filter}`,
                        strokeWidth: `${GlowContainerStyles.strokeWidth}`
                    }}
                >
                    <svg
                        id="aomLogoGlow"
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
                            <a href="">
                                <path
                                    id="O"
                                    className="logo-buttons-neons"
                                    display="inline"
                                    d="M259.279,543.898c0-28.795,23.344-52.139,52.139-52.139c28.796,0,52.139,23.344,52.139,52.139c0,28.796-23.343,52.139-52.139,52.139C282.623,596.037,259.279,572.694,259.279,543.898L259.279,543.898z"
                                />
                            </a>
                            <a href="https://www.google.com/search?q=elvin+me+lo+mama&oq=elvin+me+lo+mama&aqs=chrome..69i57j33i160l3j33i299l2.7910j1j1&sourceid=chrome&ie=UTF-8">
                                <path
                                    id="AO"
                                    className="logo-buttons-neons"
                                    display="inline"
                                    d="M363.557,543.898c0,28.796-23.344,52.139-52.139,52.139c-28.796,0-52.139-23.343-52.139-52.139c0-28.795,23.343-52.139,52.139-52.139C340.213,491.76,363.557,515.104,363.557,543.898L363.557,543.898zM207.14,215.823v432.353h305.719L207.14,215.823z"
                                />
                            </a>
                            <a href="">
                                <path
                                    id="M"
                                    className="logo-buttons-neons"
                                    display="inline"
                                    d="M380.664,431.123 435.105,342.457 500.904,601.17z"
                                />
                            </a>
                        </g>
                    </svg>
                </div>
			</div>
		</div>
	);
}
