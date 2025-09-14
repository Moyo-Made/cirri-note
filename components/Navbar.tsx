"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [bannerVisible, setBannerVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY === 0) {
				setBannerVisible(true);
			} else if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setBannerVisible(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const navLinks = [
		{ key: "about", label: "About" },
		{ key: "features", label: "Features" },
		{ key: "faqs", label: "FAQs" },
		{ key: "contact", label: "Contact" },
	];

	return (
		<div
			className={`w-full flex justify-center font-manrope fixed top-0 md:top-[40px] left-0 right-0 z-40 transition-transform duration-300 bg-[#0000007A] ${
				bannerVisible ? "translate-y-0" : "md:-translate-y-[40px]"
			}`}
		>
			<div className="w-full flex justify-between md:justify-between items-center h-[64px] md:h-[104px] md:py-6  px-4 sm:px-6 md:px-10 p-4 md:p-0 sticky backdrop-blur-2xl">
				<Image
					src="/Logo.svg"
					alt="CirriNote"
					width={170}
					height={44}
					className="w-[93px] h-[24px] md:w-[170px] md:h-[44px]"
				/>

				<div className="hidden md:flex">
					<nav className="md:flex space-x-16">
						{navLinks.map(({ key, label }) => (
							<Link
								key={key}
								href={`#${key}`}
								className="!text-white hover:!text-[#00BB77] transition-colors duration-200"
							>
								{label}
							</Link>
						))}
					</nav>
				</div>

				<div className="flex items-center gap-3 md:contents">
					<button className="flex items-center justify-center bg-white backdrop-blur-[8px] rounded-full w-[107px] md:w-[157px] h-[32px] md:h-[56px] cursor-pointer">
						<div className="bg-[#000000] w-[28px] h-[28px] md:w-[52px] md:h-[52px] rounded-full p-[6px] md:p-[14px] text-start ml-1">
							<Image
								src="/cart.svg"
								alt="Cart"
								width={24}
								height={24}
								className="w-[18px] h-[19px] md:w-8 md:h-8 "
							/>
						</div>
						<div className="flex-1 flex justify-center items-center pr-[10px] md:pr-[20px]">
							<span className="text-black text-sm md:text-lg">Try Now</span>
						</div>
					</button>

					<div className="flex md:hidden cursor-pointer">
						<Image src="/menu.svg" alt="Menu" width={24} height={24} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
