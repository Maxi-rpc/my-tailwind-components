import Image from "next/image";
import { GridComponent, HeaderComponent } from "@/components";

export default function Home() {
	return (
		<main>
			<HeaderComponent></HeaderComponent>
			<hr />
			<h1>Body</h1>
			<GridComponent container>
				<div className="bg-red-400 p-1">01</div>
				<div className="bg-blue-400 p-1">02</div>
				<div className="bg-green-400 p-1">03</div>
				<div className="bg-slate-400 p-1">04</div>
			</GridComponent>
		</main>
	);
}
