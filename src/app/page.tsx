'use client'
import {
	GridComponent,
	NavBarComponent,
	SpaceComponent,
	CardComponent,
	CardContentComponent,
	CardFooterComponent,
	ButtonComponent,
} from "@/components";

export default function Home() {
	return (
		<main>
			<NavBarComponent></NavBarComponent>
			<GridComponent container>
				<GridComponent item customClass="bg-red-400 col-span-2">
					<ButtonComponent
						onClick={() => console.log("click en button 1")}
						type="contained"
					>
						Button 1
					</ButtonComponent>
				</GridComponent>
				<GridComponent item customClass="bg-blue-400 col-span-2">
					<ButtonComponent type="outlined">Button 2</ButtonComponent>
				</GridComponent>
				<GridComponent item customClass="bg-green-400 col-span-2">
					<ButtonComponent>Button 3</ButtonComponent>
				</GridComponent>
				<GridComponent item customClass="bg-slate-400 col-span-2">
					<div className="p-1">04 item</div>
				</GridComponent>
			</GridComponent>
		</main>
	);
}
