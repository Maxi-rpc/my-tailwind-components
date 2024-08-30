"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverPanel,
} from "@headlessui/react";
import {
	Bars3Icon,
	BellIcon,
	ChevronDownIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { HeaderPageComponent } from "@/components";
import { ProfileComponent } from "./profile";
import { LogoComponent } from "./logo";
// routes
import { menuRoutes, userNavigation } from "@/routes";

const navigation = menuRoutes;

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const products = [
	{
		name: "Analytics",
		description: "Get a better understanding of your traffic",
		href: "#",
	},
	{
		name: "Engagement",
		description: "Speak directly to your customers",
		href: "#",
	},
];

interface HeaderProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
}

export const HeaderComponent = ({ children, customClass }: HeaderProps) => {
	const pathName = usePathname();
	navigation.map((item) => {
		if (item.name.toLowerCase() == pathName.slice(1).toLowerCase()) {
			item.current = true;
		}
	});
	return (
		<>
			<Disclosure as="nav" className="bg-gray-800">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<LogoComponent
									alt="Company"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									className="h-8 w-8"
								/>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											aria-current={item.current ? "page" : undefined}
											className={`rounded-md px-3 py-2 text-sm font-medium ${
												item.current
													? "bg-gray-900 text-white"
													: "text-gray-300 hover:bg-gray-700 hover:text-white"
											}`}
										>
											{item.name}
										</Link>
									))}
									<Popover className="relative">
										<PopoverButton className="flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
											Product
											<ChevronDownIcon
												aria-hidden="true"
												className="h-5 w-5 flex-none text-gray-400"
											/>
										</PopoverButton>

										<PopoverPanel
											transition
											className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
										>
											<div className="p-4">
												{products.map((item) => (
													<div
														key={item.name}
														className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
													>
														<div className="flex-auto">
															<Link
																href={item.href}
																className="block font-semibold text-gray-900"
															>
																{item.name}
																<span className="absolute inset-0" />
															</Link>
															<p className="mt-1 text-gray-600">
																{item.description}
															</p>
														</div>
													</div>
												))}
											</div>
										</PopoverPanel>
									</Popover>
									<Link
										href="#"
										className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
									>
										Features
									</Link>
								</div>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6">
								<button
									type="button"
									className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only">View notifications</span>
									<BellIcon aria-hidden="true" className="h-6 w-6" />
								</button>

								{/* Profile dropdown */}
								<ProfileComponent />
								
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							{/* Mobile menu button */}
							<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open main menu</span>
								<Bars3Icon
									aria-hidden="true"
									className="block h-6 w-6 group-data-[open]:hidden"
								/>
								<XMarkIcon
									aria-hidden="true"
									className="hidden h-6 w-6 group-data-[open]:block"
								/>
							</DisclosureButton>
						</div>
					</div>
				</div>

				<DisclosurePanel className="md:hidden">
					<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
						{navigation.map((item) => (
							<DisclosureButton
								key={item.name}
								as="a"
								href={item.href}
								aria-current={item.current ? "page" : undefined}
								className={`block rounded-md px-3 py-2 text-base font-medium ${
									item.current
										? "bg-gray-900 text-white"
										: "text-gray-300 hover:bg-gray-700 hover:text-white"
								}`}
							>
								{item.name}
							</DisclosureButton>
						))}
					</div>
					<div className="border-t border-gray-700 pb-3 pt-4">
						<div className="flex items-center px-5">
							<div className="flex-shrink-0">
								<img
									alt=""
									src={user.imageUrl}
									className="h-10 w-10 rounded-full"
								/>
							</div>
							<div className="ml-3">
								<div className="text-base font-medium leading-none text-white">
									{user.name}
								</div>
								<div className="text-sm font-medium leading-none text-gray-400">
									{user.email}
								</div>
							</div>
							<button
								type="button"
								className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span className="absolute -inset-1.5" />
								<span className="sr-only">View notifications</span>
								<BellIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>
						<div className="mt-3 space-y-1 px-2">
							{userNavigation.map((item) => (
								<DisclosureButton
									key={item.name}
									as="a"
									href={item.href}
									className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
					</div>
				</DisclosurePanel>
			</Disclosure>
			<HeaderPageComponent title={pathName.slice(1)}></HeaderPageComponent>
		</>
	);
};
