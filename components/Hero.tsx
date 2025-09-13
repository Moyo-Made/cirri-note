import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="flex justify-center items-center relative">
			<Image
				src="/hero-bg.svg"
				alt="Hero bg"
				width={1280}
				height={900}
				className="hidden md:block md:w-[1280px] md:h-[900px]"
			/>

			<Image
				src="/mobile-blur.png"
				alt="Hero bg"
				width={1280}
				height={900}
				className="block md:hidden w-[778px] h-[699px] blur-2xl "
			/>

			<div className="hidden absolute inset-0 md:grid place-items-center font-manrope ">
				<div className="relative w-full max-w-[1190px] aspect-[1190/725]">
					<Image
						src="/hero-img.svg"
						alt="Octopus"
						width={1190}
						height={725}
						className="w-full h-full object-contain mt-12"
					/>

					<span
						className="absolute left-[8%] top-1/3 -translate-y-1/2 text-white font-medium leading-tight
			text-4xl sm:text-5xl md:text-5xl lg:text-7xl
			whitespace-nowrap"
					>
						Note Taking
					</span>

					<span
						className="absolute top-[47%] right-[9%] text-[#00BB77] font-medium
			text-4xl sm:text-5xl md:text-5xl lg:text-7xl 
			whitespace-nowrap"
					>
						Redefined
					</span>
				</div>
			</div>

			<div className="absolute inset-0 md:hidden flex justify-center items-center font-manrope">
				<div className="relative">
					<span className="absolute top-[50px] left-[43%] -translate-x-1/2 text-white text-5xl font-medium whitespace-nowrap">
						Note Taking
					</span>

					<span className="absolute top-[90px] mt-1 left-[39.2%] -translate-x-1/2 text-[#00BB77] text-5xl font-medium whitespace-nowrap">
						Redefined
					</span>

					<Image
						src="/hero-mobile.svg"
						alt="Octopus"
						width={777}
						height={473}
						className="w-full h-auto max-w-[777px] mt-[100px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
