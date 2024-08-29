import path from "path";

// dashboard menu = pages dentro de dashboard
export const menuRoutes = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Marketing", href: "#", current: false },
	{ name: "Reports", href: "#", current: false },
];

const Routes = {
	name: "Dashboard",
	path: "/dashboard",
	href: "#",
	childrens: [
		{
			name: "Team",
			path: "/team",
			href: "#",
		},
		{
			name: "Projects",
			path: "/projects",
			href: "#",
		},
		{
			name: "Marketing",
			path: "/marketing",
			href: "#",
		},
		{
			name: "Reports",
			path: "/reports",
			href: "#",
		},
	],
};
