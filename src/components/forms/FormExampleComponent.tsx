import { CardComponent, CardContentComponent } from "@/components";
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

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

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
												placeHolder="janesmith"
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
												autoComplete="given-name"
											/>
										</div>

										<div className="sm:col-span-3">
											<TextInputComponent
												label="Last name"
												id="last-name"
												name="last-name"
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

								<div className="border-b border-gray-900/10 pb-12">
									<h2 className="text-base font-semibold leading-7 text-gray-900">
										Notifications
									</h2>
									<p className="mt-1 text-sm leading-6 text-gray-600">
										We ll always let you know about important changes, but you
										pick what else you want to hear about.
									</p>

									<div className="mt-10 space-y-10">
										<fieldset>
											<legend className="text-sm font-semibold leading-6 text-gray-900">
												By Email
											</legend>
											<div className="mt-6 space-y-6">
												<div className="relative flex gap-x-3">
													<div className="flex h-6 items-center">
														<input
															id="comments"
															name="comments"
															type="checkbox"
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
														/>
													</div>
													<div className="text-sm leading-6">
														<label
															htmlFor="comments"
															className="font-medium text-gray-900"
														>
															Comments
														</label>
														<p className="text-gray-500">
															Get notified when someones posts a comment on a
															posting.
														</p>
													</div>
												</div>
												<div className="relative flex gap-x-3">
													<div className="flex h-6 items-center">
														<input
															id="candidates"
															name="candidates"
															type="checkbox"
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
														/>
													</div>
													<div className="text-sm leading-6">
														<label
															htmlFor="candidates"
															className="font-medium text-gray-900"
														>
															Candidates
														</label>
														<p className="text-gray-500">
															Get notified when a candidate applies for a job.
														</p>
													</div>
												</div>
												<div className="relative flex gap-x-3">
													<div className="flex h-6 items-center">
														<input
															id="offers"
															name="offers"
															type="checkbox"
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
														/>
													</div>
													<div className="text-sm leading-6">
														<label
															htmlFor="offers"
															className="font-medium text-gray-900"
														>
															Offers
														</label>
														<p className="text-gray-500">
															Get notified when a candidate accepts or rejects
															an offer.
														</p>
													</div>
												</div>
											</div>
										</fieldset>
										<fieldset>
											<legend className="text-sm font-semibold leading-6 text-gray-900">
												Push Notifications
											</legend>
											<p className="mt-1 text-sm leading-6 text-gray-600">
												These are delivered via SMS to your mobile phone.
											</p>
											<div className="mt-6 space-y-6">
												<div className="flex items-center gap-x-3">
													<input
														id="push-everything"
														name="push-notifications"
														type="radio"
														className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
													/>
													<label
														htmlFor="push-everything"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Everything
													</label>
												</div>
												<div className="flex items-center gap-x-3">
													<input
														id="push-email"
														name="push-notifications"
														type="radio"
														className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
													/>
													<label
														htmlFor="push-email"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Same as email
													</label>
												</div>
												<div className="flex items-center gap-x-3">
													<input
														id="push-nothing"
														name="push-notifications"
														type="radio"
														className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
													/>
													<label
														htmlFor="push-nothing"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														No push notifications
													</label>
												</div>
											</div>
										</fieldset>
									</div>
								</div>
							</div>

							<div className="mt-6 flex items-center justify-end gap-x-6">
								<button
									type="button"
									className="text-sm font-semibold leading-6 text-gray-900"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</form>
					</CardContentComponent>
				</CardComponent>
			</div>
		</>
	);
};
