"use client";
import {
	GridComponent,
	NavBarComponent,
	SpaceComponent,
} from "@/components";

export default function Home() {
	return (
		<main>
			<NavBarComponent></NavBarComponent>
			<SpaceComponent />
			<GridComponent container>
				<GridComponent item customClass="bg-red-400 col-span-3"></GridComponent>
				<GridComponent
					item
					customClass="bg-blue-400 col-span-6"
				></GridComponent>
				<GridComponent
					item
					customClass="bg-green-400 col-span-3"
				></GridComponent>
			</GridComponent>
		</main>
	);
}
