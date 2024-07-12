import Image from "next/image";
import { GridComponent } from "@/components";

export default function Home() {
	return (
		<main>
			<h1>Layout template</h1>
			<div>
				<GridComponent cols={'3'}>
					<div className="bg-slate-400 p-1">01</div>
					<div className="bg-slate-400 p-1">02</div>
					<div className="bg-slate-400 p-1">03</div>
					<div className="bg-slate-400 p-1">04</div>
					<div className="bg-slate-400 p-1">05</div>
					<div className="bg-slate-400 p-1">06</div>
				</GridComponent>
			</div>
		</main>
	);
}
