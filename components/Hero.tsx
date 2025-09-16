import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div id="hero" className="flex justify-center items-center relative ">
			<div
				className="hidden md:block w-full h-[900px] bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url(/hero-bg.svg)" }}
			></div>

			<div className="block w-full md:hidden bg-black justify-center ">
				<Image
					src="/mobile-blur.png"
					alt="Hero bg"
					width={391}
					height={800}
					className="w-full h-[800px] blur-2xl"
				/>
			</div>

			<div className="hidden absolute inset-0 md:grid place-items-center font-manrope">
				<div className="relative w-full max-w-[1190px] aspect-[1190/725]">
					<Image
						src="/hero-img.svg"
						alt="Octopus"
						width={1190}
						height={725}
						className="animate-octopus w-full h-full object-contain mt-12"
					/>

					<span
						className="animate-note-taking absolute md:left-[10%] lg:left-[5%] xl:left-[8%] top-1/3 -translate-y-1/2 text-white font-medium leading-tight
			text-4xl md:text-5xl lg:text-7xl
			whitespace-nowrap"
					>
						Note Taking
					</span>

					<span
						className="animate-redefined absolute top-[47%] md:right-[12%] lg:right-[6%] xl:right-[9%] text-[#00BB77] font-medium
			text-4xl  md:text-5xl lg:text-7xl 
			whitespace-nowrap"
					>
						Redefined
					</span>
				</div>
			</div>

			<div className="w-full absolute inset-0 md:hidden flex items-center font-manrope">
				{" "}
				<div className="relative">
					<span className="absolute top-[40px] left-[43%] -translate-x-1/2 text-white text-5xl font-medium whitespace-nowrap">
						Note Taking
					</span>

					<span className="absolute top-[80px] mt-1 left-[39.2%] -translate-x-1/2 text-[#00BB77] text-5xl font-medium whitespace-nowrap">
						Redefined
					</span>

					<div className="w-full overflow-hidden">
						<Image
							src="/hero-mobile.svg"
							alt="Octopus"
							width={777}
							height={473}
							className="w-auto h-auto max-w-[777px] mt-[170px] ml-auto block"
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
