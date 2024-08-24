import {
	ButtonComponent,
	CardComponent,
	CardContentComponent,
} from "@/components";
import {
	TextAreaInputComponent,
	TextInputComponent,
	TextPathInputComponent,
} from "./text";
import { SelectInputComponent } from "./select";

interface FormExampleProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
}

export const FormExampleComponent = ({
	children,
	customClass,
}: FormExampleProps) => {
	return (
		<>
			<div className={`${customClass}`}>
				<CardComponent>
					<CardContentComponent>
						<h1>Form Example</h1>
						<form>
							<div className="space-y-12">
								<div className="border-b border-gray-900/10 pb-12">
									<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
										<div className="sm:col-span-4">
											<TextPathInputComponent
												label="Username"
												path="workcation.com/"
												placeholder="janesmith"
												type="text"
											/>
										</div>
										<div className="col-span-full">
											<TextAreaInputComponent
												label="About"
												textAuxiliar="Write a few sentences about yourself."
											/>
										</div>
									</div>
								</div>

								<div className="border-b border-gray-900/10 pb-12">
									<h2 className="text-base font-semibold leading-7 text-gray-900">
										Personal Information
									</h2>
									<p className="mt-1 text-sm leading-6 text-gray-600">
										Use a permanent address where you can receive mail.
									</p>

									<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
										<div className="sm:col-span-3">
											<TextInputComponent
												label="First name"
												id="first-name"
												name="first-name"
												type="text"
												autoComplete="given-name"
											/>
										</div>

										<div className="sm:col-span-3">
											<TextInputComponent
												label="Last name"
												id="last-name"
												name="last-name"
												type="text"
												autoComplete="family-name"
											/>
										</div>

										<div className="sm:col-span-4">
											<TextInputComponent
												label="Email address"
												id="email"
												name="email"
												autoComplete="email"
												type="email"
											/>
										</div>

										<div className="sm:col-span-3">
											<SelectInputComponent
												label="Country"
												id="country"
												name="country"
												autoComplete="country-name"
											>
												<option>United States</option>
												<option>Canada</option>
												<option>Mexico</option>
											</SelectInputComponent>
										</div>

										<div className="col-span-full">
											<TextInputComponent
												label="Street address"
												id="street-address"
												name="street-address"
												autoComplete="street-address"
											/>
										</div>

										<div className="sm:col-span-2 sm:col-start-1">
											<TextInputComponent
												label="City"
												id="city"
												name="city"
												autoComplete="address-level2"
											/>
										</div>

										<div className="sm:col-span-2">
											<TextInputComponent
												label="State / Province"
												id="region"
												name="region"
												autoComplete="address-level1"
											/>
										</div>

										<div className="sm:col-span-2">
											<TextInputComponent
												label="ZIP / Postal code"
												id="postal-code"
												name="postal-code"
												autoComplete="postal-code"
											/>
										</div>
									</div>
								</div>
							</div>
						</form>
					</CardContentComponent>
				</CardComponent>
			</div>
		</>
	);
};
