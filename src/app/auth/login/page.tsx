import { AppLogo } from "@/constant";
import {
	LabelComponent,
	InputComponent,
	ButtonComponent,
	LinkComponent,
} from "@/ui/components";
import { RowComponent } from "@/ui/layout";

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
					<RowComponent direction="column" className="w-full">
						<LabelComponent htmlFor="email">Email address</LabelComponent>
						<RowComponent className="mt-2">
							<InputComponent
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
						</RowComponent>
					</RowComponent>
					<RowComponent direction="column">
						<RowComponent justify="between">
							<LabelComponent htmlFor="password">Password</LabelComponent>
							<LinkComponent href="#" className="text-sm">
								Forgot password?
							</LinkComponent>
						</RowComponent>
						<RowComponent className="mt-2">
							<InputComponent
								id="password"
								name="password"
								type="password"
								required
								autoComplete="current-password"
							/>
						</RowComponent>
					</RowComponent>

					<RowComponent>
						<ButtonComponent variant="contained" fullWidth type="submit">
							Sign in
						</ButtonComponent>
					</RowComponent>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member?{" "}
					<LinkComponent href="#">Start a 14 day free trial</LinkComponent>
				</p>
			</div>
		</main>
	);
}
