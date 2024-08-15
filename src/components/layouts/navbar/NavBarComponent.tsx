"use client";

import { useState } from "react";
import { NavItemComponent } from "./NavItemComponent";
import { NavDropdownComponent } from "./NavDropdownComponent";
import { NavBarLogoComponent } from "./NavBarLogoComponent";
import { SesionSectionComponent } from "./sesion";
import { NavItemMobileComponent } from "./NavItemMobileComponent";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	PopoverGroup,
} from "@headlessui/react";
import {
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from "@heroicons/react/20/solid";

interface HeaderProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	container?: boolean;
}

const menuLinks = [
	{
		name: "Features",
		href: "#",
	},
	{
		name: "Marketplace",
		href: "#",
	},
	{
		name: "Company",
		href: "#",
	},
];
const products = [
	{
		name: "Analytics",
		description: "Get a better understanding of your traffic",
		href: "#",
		icon: ChartPieIcon,
	},
	{
		name: "Engagement",
		description: "Speak directly to your customers",
		href: "#",
		icon: CursorArrowRaysIcon,
	},
];
const callsToAction = [
	{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
	{ name: "Contact sales", href: "#", icon: PhoneIcon },
];

export const NavBarComponent = ({
	children,
	customClass = "",
	container = false,
}: HeaderProps) => {
	const isContainer = container && "px-5";
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header className={`${isContainer} ${customClass} bg-white`}>
				<nav
					aria-label="Global"
					className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				>
					<NavBarLogoComponent
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="logotemplate"
					/>
					<PopoverGroup className="hidden lg:flex lg:gap-x-12">
						<NavDropdownComponent></NavDropdownComponent>
						{menuLinks.map((item) => (
							<NavItemComponent key={item.name} href={item.href}>
								{item.name}
							</NavItemComponent>
						))}
					</PopoverGroup>
					<SesionSectionComponent />
					{/* mobile menu */}
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden"
				>
					<div className="fixed inset-0 z-10" />
					<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									alt=""
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									className="h-8 w-auto"
								/>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									<Disclosure as="div" className="-mx-3">
										<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											Product
											<ChevronDownIcon
												aria-hidden="true"
												className="h-5 w-5 flex-none group-data-[open]:rotate-180"
											/>
										</DisclosureButton>
										<DisclosurePanel className="mt-2 space-y-2">
											{[...products, ...callsToAction].map((item) => (
												<DisclosureButton
													key={item.name}
													as="a"
													href={item.href}
													className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</DisclosureButton>
											))}
										</DisclosurePanel>
									</Disclosure>
									{menuLinks.map((item) => (
										<NavItemMobileComponent key={item.name} href={item.href}>
											{item.name}
										</NavItemMobileComponent>
									))}
								</div>
								<div className="py-6">
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Log in
									</a>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
		</>
	);
};
