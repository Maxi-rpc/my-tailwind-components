import { GridComponent, NavBarComponent, SpaceComponent } from "@/components";

export default function Home() {
	return (
		<main>
			<NavBarComponent></NavBarComponent>
			<h1>Body</h1>
			<GridComponent container>
				<GridComponent item customClass="bg-red-400 col-span-4">
					<div className="p-1">01 item</div>
					<div className="p-1">01 item</div>
					<div className="p-1">01 item</div>
				</GridComponent>
				<GridComponent item customClass="bg-blue-400">
					<div className="p-1">02 item</div>
				</GridComponent>
				<GridComponent item customClass="bg-green-400">
					<div className="p-1">03 item</div>
				</GridComponent>
				<GridComponent item customClass="bg-slate-400">
					<div className="p-1">04 item</div>
				</GridComponent>
			</GridComponent>
			<SpaceComponent />
			<GridComponent container>
				<GridComponent item customClass="bg-slate-400 col-span-2">
					<div className="p-1">Row unico</div>
				</GridComponent>
			</GridComponent>
		</main>
	);
}
