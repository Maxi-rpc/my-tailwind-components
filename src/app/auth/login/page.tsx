import Link from "next/link";
import { AppLogo } from "@/constant";
import {
	TextInputComponent,
	RowComponent,
	ButtonComponent,
} from "@/components";

export default function Login() {
	return (
		<main className="bg-white">
			<h1>Login Page</h1>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="Your Company"
						src={AppLogo}
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
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
						<div>
							<RowComponent justifyContent="between" alignContent="center">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<Link
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</Link>
								</div>
							</RowComponent>
							<div className="mt-2">
								<TextInputComponent
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
								/>
							</div>
						</div>

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
						Not a member?{" "}
						<Link
							href="#"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Start a 14 day free trial
						</Link>
					</p>
				</div>
			</div>
		</main>
	);
}
