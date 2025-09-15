"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [bannerVisible, setBannerVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

	// Smooth scroll function
	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string
	) => {
		e.preventDefault();

		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			const navbarHeight = window.innerWidth >= 768 ? 144 : 64; // Account for navbar height (md:104px + md:40px top offset = 144, mobile: 64px)
			const targetPosition = targetElement.offsetTop - navbarHeight;

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			});
		}

		// Close mobile menu after clicking
		setMobileMenuOpen(false);
	};

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
			<div className="w-full flex justify-between md:justify-between items-center h-[64px] md:h-[104px] md:py-6 px-4 sm:px-6 md:px-10 p-4 md:p-0 backdrop-blur-2xl">
				<Link href="/">
					<Image
						src="/Logo.svg"
						alt="CirriNote"
						width={170}
						height={44}
						className="w-[93px] h-[24px] md:w-[170px] md:h-[44px]"
					/>
				</Link>

				<div className="hidden md:flex">
					<nav className="md:flex space-x-16">
						{navLinks.map(({ key, label }) => (
							<Link
								key={key}
								href={`#${key}`}
								onClick={(e) => handleSmoothScroll(e, key)}
								className="!text-white hover:!text-[#00BB77] transition-colors duration-200 cursor-pointer"
							>
								{label}
							</Link>
						))}
					</nav>
				</div>

				{/* Mobile Menu Overlay */}
				<div
					className={`fixed top-[64px] left-0 right-0 bottom-0 md:hidden transition-all duration-300 ease-in-out font-manrope ${
						mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
					}`}
				>
					<div className="bg-[#000] backdrop-blur-2xl z-50">
						<div className="flex flex-col items-center justify-center h-full px-4 py-8 space-y-8">
							{navLinks.map(({ key, label }, index) => (
								<Link
									key={key}
									href={`#${key}`}
									onClick={(e) => handleSmoothScroll(e, key)}
									className={`!text-white hover:!text-[#00BB77] transition-all duration-300 transform cursor-pointer ${
										mobileMenuOpen
											? "translate-y-0 opacity-100"
											: "translate-y-8 opacity-0"
									}`}
									style={{
										transitionDelay: mobileMenuOpen
											? `${index * 100}ms`
											: "0ms",
									}}
								>
									{label}
								</Link>
							))}
						</div>
					</div>
				</div>

				<div className="flex items-center gap-3 md:contents">
					<button
						className="flex items-center justify-center bg-white backdrop-blur-[8px] rounded-full w-[107px] md:w-[157px] h-[32px] md:h-[56px] cursor-pointer group relative overflow-hidden 
				hover:scale-110 md:hover:scale-100 transition-transform duration-300 ease-in-out origin-center"
					>
						<div
							className="bg-[#000000] w-[28px] h-[28px] md:w-[52px] md:h-[52px] rounded-full p-[6px] md:p-[14px] text-start 
                group-hover:w-[calc(100%-5px)] group-hover:h-[calc(100%-5px)] group-hover:ml-0 group-hover:p-[6px] group-hover:md:p-[14px]
                transition-all duration-300 ease-in-out absolute left-1 top-1/2 -translate-y-1/2 group-hover:left-0.5 group-hover:top-1/2 group-hover:-translate-y-1/2
                flex items-center group-hover:rounded-full"
						>
							<Image
								src="/cart.svg"
								alt="Cart"
								width={24}
								height={24}
								className="w-[18px] h-[19px] md:w-8 md:h-8 transition-all duration-300 ease-in-out group-hover:scale-110 ml-0"
							/>
						</div>
						<div className="absolute inset-0 flex justify-center items-center pl-[10px] md:pl-10 z-10">
							<span className="text-black text-sm md:text-lg group-hover:text-white transition-all duration-300 ease-in-out">
								Try Now
							</span>
						</div>
					</button>

					<div
						className="flex md:hidden cursor-pointer"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X width={24} height={24} className="text-[#FFFFFF80]" />
						) : (
							<Image src="/menu.svg" alt="Menu" width={24} height={24} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
