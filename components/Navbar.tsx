import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	const navLinks = [
		{ key: "about", label: "About" },
		{ key: "features", label: "Features" },
		{ key: "faqs", label: "FAQs" },
		{ key: "contact", label: "Contact" },
	];

	return (
		<div className="w-full flex justify-center font-manrope">
			<div className="flex justify-between lg:justify-between items-center bg-[#000000] w-[390px] h-[64px] lg:w-[1280px] lg:h-[104px] lg:py-6 lg:px-10 p-4 lg:p-0 sticky backdrop-blur-xl">
				<Image
					src="/Logo.svg"
					alt="CirriNote"
					width={170}
					height={44}
					className="w-[93px] h-[24px] lg:w-[170px] lg:h-[44px]"
				/>

				<div className="hidden lg:flex">
					<nav className="lg:flex space-x-8">
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

				<div className="flex items-center gap-3 lg:contents">
					<button className="flex items-center justify-center bg-white backdrop-blur-[8px] rounded-full w-[107px] lg:w-[157px] h-[32px] lg:h-[56px] cursor-pointer">
						<div className="bg-[#000000] w-[28px] h-[28px] lg:w-[52px] lg:h-[52px] rounded-full p-[6px] lg:p-[14px] text-start ml-1">
							<Image
								src="/cart.svg"
								alt="Cart"
								width={24}
								height={24}
								className="w-[18px] h-[19px] lg:w-8 lg:h-8 "
							/>
						</div>
						<div className="flex-1 flex justify-center items-center pr-[10px] lg:pr-[20px]">
							<span className="text-black text-sm lg:text-lg">Try Now</span>
						</div>
					</button>

					<div className="flex lg:hidden cursor-pointer">
						<Image src="/menu.svg" alt="Menu" width={24} height={24} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
