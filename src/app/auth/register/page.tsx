import Link from "next/link";
import { AppLogo } from "@/constant";
import {
	TextInputComponent,
	RowComponent,
	ButtonComponent,
	DialogComponent,
} from "@/components";

export default function Register() {
	return (
		<main className="bg-white">
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="Your Company"
						src={AppLogo}
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Register your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form action="#" method="POST" className="space-y-6">
						<TextInputComponent
							label="Email address"
							id="email"
							name="email"
							type="email"
							autoComplete="email"
						/>
						<TextInputComponent
							label="Password"
							id="password"
							name="password"
							type="password"
							autoComplete="current-password"
						/>
						<TextInputComponent
							label="Repeat Password"
							id="confirm-password"
							name="confirm-password"
							type="password"
							autoComplete="confirm-password"
						/>

						<div>
							<ButtonComponent
								title="Sign In"
								variant="contained"
								fullWidth
								type="submit"
							/>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Have an account?{" "}
						<Link
							href="#"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							redirect to login
						</Link>
					</p>
				</div>
			</div>
			<DialogComponent></DialogComponent>
		</main>
	);
}
