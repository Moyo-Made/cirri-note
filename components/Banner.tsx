"use client";

import { useState, useEffect } from "react";

const Banner = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY === 0) {
				setIsVisible(true);
			} else if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setIsVisible(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const content = (
		<>
			<span className="text-white">✦</span>
			<span className="text-white">Get one year FREE</span>
			<span className="text-white">✦</span>
			<span className="text-white">Only for limited users</span>
			<span className="text-white">✦</span>
			<span className="text-white">Join the launch event</span>
		</>
	);

	return (
		<div className="flex justify-center font-manrope fixed top-0 left-0 right-0 z-50 ">
			<div
				className={`w-full bg-[#166E4E] relative overflow-hidden transition-transform duration-300 ${
					isVisible ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<div
					className={`w-full hidden md:block  md:max-w-[1280px] h-[40px]`}
				>
					{/* Fade gradients on left and right */}
					<div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#166E4E] to-transparent z-10"></div>
					<div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#166E4E] to-transparent z-10"></div>

					<div className="flex items-center h-full">
						<div className="flex items-center gap-12 animate-scroll whitespace-nowrap">
							{content}
							{content}
							{content}
							{content}
							{content}
						</div>
					</div>

					<style jsx>{`
						@keyframes scroll {
							0% {
								transform: translateX(0%);
							}
							100% {
								transform: translateX(-50%);
							}
						}

						.animate-scroll {
							animation: scroll 15s linear infinite;
						}
					`}</style>
				</div>
			</div>
		</div>
	);
};

export default Banner;
