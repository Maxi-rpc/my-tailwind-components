import {
	GridComponent,
	NavBarComponent,
	SpaceComponent,
	CardComponent,
	CardContentComponent,
	CardFooterComponent,
} from "@/components";

export default function Home() {
	return (
		<main>
			<NavBarComponent></NavBarComponent>
			<h1>Body</h1>
			<GridComponent container>
				<GridComponent item customClass="bg-red-400 col-span-2">
					<div className="p-1">01 item</div>
				</GridComponent>
				<GridComponent item customClass="bg-blue-400 col-span-2">
					<div className="p-1">02 item</div>
				</GridComponent>
				<GridComponent item customClass="bg-green-400 col-span-2">
					<div className="p-1">03 item</div>
				</GridComponent>
				<GridComponent item customClass="bg-slate-400 col-span-2">
					<div className="p-1">04 item</div>
				</GridComponent>
			</GridComponent>
		</main>
	);
}
