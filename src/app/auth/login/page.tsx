import { AppLogo } from "@/constant";
import {
	LabelComponent,
	InputComponent,
	ButtonComponent,
} from "@/ui/components";

export default function Login() {
	return (
		<main className="bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img alt="Your Company" src={AppLogo} className="mx-auto h-10 w-auto" />
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form action="#" method="POST" className="space-y-6">
					<div>
						<LabelComponent htmlFor="email">Email address</LabelComponent>
						<div className="mt-2">
							<InputComponent
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-between">
							<LabelComponent htmlFor="password">Password</LabelComponent>
							<div className="text-sm">
								<a
									href="#"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className="mt-2">
							<InputComponent
								id="password"
								name="password"
								type="password"
								required
								autoComplete="current-password"
							/>
						</div>
					</div>

					<div>
						<ButtonComponent fullWidth type="submit">
							Sign in
						</ButtonComponent>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member?{" "}
					<a
						href="#"
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
					>
						Start a 14 day free trial
					</a>
				</p>
			</div>
		</main>
	);
}
