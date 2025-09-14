import React from "react";

interface FeatureCardProps {
	className?: string;
	title?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	className = "",
	title = "Feature Name",
}) => (
	<div
		className={`bg-[#1C1C1C] rounded-2xl p-10 flex items-end w-[280px] h-[260px] lg:w-[388px] lg:h-[320px] ${className}`}
	>
		<span className="text-[#FFFFFFCC] text-3xl font-medium max-w-[112px]">
			{title}
		</span>
	</div>
);

const Features = () => {
	const featuresData = [
		{ id: 1, title: "Smart Notes" },
		{ id: 2, title: "AI Writing Assistant" },
		{ id: 3, title: "Cloud Sync" },
		{ id: 4, title: "Voice Recording" },
		{ id: 5, title: "Team Collaboration" },
		{ id: 6, title: "Advanced Search" },
	];
	return (
		<div className="w-full flex justify-center font-manrope bg-black">
			<div className="w-full pt-24 md:pt-40 px-10">
				<div className="flex flex-col space-y-4 ">
					<div className="bg-[#00BB77] text-black text-sm font-medium flex justify-center items-center max-w-[122px] h-[30px] rounded-full">
						Whats the best
					</div>
					<span className="text-white text-5xl lg:text-6xl xl:text-7xl font-medium ">
						Key Features
					</span>
					<span className="text-[#FFFFFF80] text-xl max-w-[280px] md:max-w-[380px]">
						We&apos;re proud to announce with the features that empower
						creatives every day.
					</span>
				</div>

				<div className="lg:grid lg:grid-cols-12 lg:grid-rows-9 lg:gap-3 pt-10 lg:pt-16 flex flex-col lg:flex-none gap-4">
					{/* Mobile: Horizontal scroll container for cards */}
					<div className="flex overflow-x-auto gap-4 pb-4 lg:hidden">
						{featuresData.map((feature) => (
							<FeatureCard
								key={feature.id}
								className="flex-shrink-0"
								title={feature.title}
							/>
						))}
					</div>

					{/* Desktop: Grid layout - hidden on mobile */}
					<div className="hidden lg:contents">
						<FeatureCard className="col-span-4 row-span-2 col-start-1 row-start-1" />
						<FeatureCard className="col-span-4 row-span-2 col-start-9 row-start-1" />
						<FeatureCard className="col-span-4 row-span-2 col-start-5 row-start-3" />
						<div className="col-span-6 row-span-2 col-start-1 row-start-5 flex items-center max-w-[650px]">
							<span className="text-4xl lg:text-5xl text-[#FFFFFF80] font-medium leading-tight pl-10">
								Creative people worldwide rely on this app to craft ideas into{" "}
								<span className="text-[#00BB77]">digital magic</span>.
							</span>
						</div>
						<FeatureCard className="col-span-4 row-span-2 col-start-9 row-start-5" />
						<FeatureCard className="col-span-4 row-span-2 col-start-1 row-start-7" />
						<FeatureCard className="col-span-4 row-span-2 col-start-5 row-start-7" />
					</div>

					{/* Mobile: Text below cards */}
					<div className="md:hidden max-w-[298px] pb-28">
						<span className="text-2xl text-[#FFFFFF80] font-medium leading-tight">
							Creative people worldwide rely on this app to craft ideas into{" "}
							<span className="text-[#00BB77]">digital magic</span>.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
