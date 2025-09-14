import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="bg-[#1C1C1C]">
			<div className="bg-[#000000A3] border border-t-[#FFFFFF1A] h-[288px] px-10 py-20">
				<div className="flex flex-col gap-10 md:gap-16">
					<div className="flex flex-col gap-10 md:gap-0 md:items-center md:flex-row md:justify-between">
						<Image src="/Logo.svg" alt="Logo" width={170} height={44} />

						<div className="flex items-center gap-12 h-[32px]">
							<Link href="/">
								<Image src="/linkedin.svg" alt="ig" width={32} height={32} />
							</Link>
							<Link href="/">
								<Image src="/ig.svg" alt="ig" width={32} height={32} />
							</Link>
							<Link href="/">
								<Image src="/x.svg" alt="ig" width={32} height={32} />
							</Link>
						</div>
					</div>

					<div className="flex flex-col gap-1 md:gap-0 md:flex-row md:items-center md:justify-between">
						<span className="text-[#FFFFFF80] text-sm font-medium">
							© CirriNote 2025
						</span>

						<span className="text-[#FFFFFF80] text-sm font-medium">
							Crafted with passion by CreoWis
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
