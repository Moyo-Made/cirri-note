"use client";

const Banner = () => {
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
		<div className="w-full flex justify-center font-manrope">
			<div className="bg-[#166E4E] hidden lg:block lg:w-[1280px] h-[40px] relative overflow-hidden">
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
	);
};

export default Banner;
