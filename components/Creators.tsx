"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Creators = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target); // Stop observing once triggered
				}
			},
			{
				threshold: 0.5, // Trigger when 50% of section is visible
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			id="about"
			className="flex justify-center bg-black sticky top-0 z-10"
			ref={sectionRef}
		>
			<div className="w-full bg-[#FFFFFF1A]">
				<div className="w-full flex flex-col gap-16 justify-center items-center h-[610px] md:h-[900px] font-manrope">
					<span
						className={`text-white font-medium text-2xl md:text-5xl md:leading-13 ${
							isVisible ? "md:animate-text-left" : "opacity-0"
						}`}
					>
						An extraordinary note <br /> for{" "}
						<span className="text-[#00BB77]">makers, creators..</span>
					</span>

					<Image
						src="/copy.svg"
						alt="Copy"
						width={160}
						height={160}
						className={isVisible ? "md:animate-drop-in" : "opacity-0"}
					/>

					<span
						className={`text-white font-medium text-xl text-center leading-7 max-w-[21.5rem] md:max-w-sm ${
							isVisible ? "md:animate-text-right" : "opacity-0"
						}`}
					>
						Creators around the planet use this app for creating{" "}
						<span className="text-[#00BB77]">magic</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Creators;
