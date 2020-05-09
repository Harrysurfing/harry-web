import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./bird.style.css";

function Bird() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				BIRDS({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					backgroundColor: 0xf1f4f7,
					color1: 0x3e3a3a,
					color2: 0x65aebe,
					colorMode: "variance",
					birdSize: 1.1,
					wingSpan: 16.0,
					speedLimit: 4.0,
					quantity: 3.0,
					backgroundAlpha: 0.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);
	return <div ref={myRef} className="bird"></div>;
}

export default Bird;
