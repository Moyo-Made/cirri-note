import Image from "next/image";

const Creators = () => {
	return (
		<div className="flex justify-center bg-black">
			<div className="w-full bg-[#FFFFFF1A]">
				<div className="w-full flex flex-col gap-16 justify-center items-center h-[610px]  md:h-[900px] font-manrope">
					<span className="text-white font-medium text-2xl md:text-5xl md:leading-13">
						An extraordinary note <br /> for{" "}
						<span className="text-[#00BB77]">makers, creators..</span>
					</span>

					<Image src="/copy.svg" alt="Copy" width={160} height={160} />

					<span className="text-white font-medium text-xl text-center leading-7 max-w-[21.5rem] md:max-w-sm">
						Creators around the planet use this app for creating{" "}
						<span className="text-[#00BB77]">magic</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Creators;
