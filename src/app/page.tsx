"use client";
import {
	GridComponent,
	NavBarComponent,
	SpaceComponent,
	CardComponent,
	CardContentComponent,
	CardFooterComponent,
	ButtonComponent,
	FormExampleComponent,
} from "@/components";

export default function Home() {
	return (
		<main>
			<NavBarComponent></NavBarComponent>
			<SpaceComponent />
			<GridComponent container>
				<GridComponent item customClass="bg-red-400 col-span-3"></GridComponent>
				<GridComponent item customClass="bg-blue-400 col-span-6">
					<FormExampleComponent></FormExampleComponent>
				</GridComponent>
				<GridComponent item customClass="bg-green-400 col-span-3">
					<ButtonComponent title="Btn con props"></ButtonComponent>
				</GridComponent>
			</GridComponent>
		</main>
	);
}
