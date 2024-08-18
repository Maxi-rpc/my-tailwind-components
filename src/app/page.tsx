import Image from "next/image";
import { GridComponent, HeaderComponent, NavBarComponent } from "@/components";

export default function Home() {
	return (
		<main>
			<NavBarComponent></NavBarComponent>
			<h1>Body</h1>
			<GridComponent container cols="4">
				<GridComponent item>
					<div className="bg-red-400 p-1">01</div>
				</GridComponent>
				<GridComponent item>
					<div className="bg-blue-400 p-1">02</div>
				</GridComponent>
				<GridComponent item>
					<div className="bg-green-400 p-1">03</div>
				</GridComponent>
				<GridComponent item>
					<div className="bg-slate-400 p-1">04</div>
				</GridComponent>
			</GridComponent>
		</main>
	);
}
