import * as Slider from "@radix-ui/react-slider";
import * as Switch from "@radix-ui/react-switch";
import Check from "/icon-check.svg";
import SliderIcon from "/icon-slider.svg";
import { useState } from "react";

function App() {
	const [price, setPrice] = useState(16);
	const [checked, setChecked] = useState(false);

	let toFixedPrice = parseInt((price * 0.75).toFixed(0));

	return (
		<div className="bg-background md:bg-contain h-screen bg-no-repeat grid grid-rows-[30%_1fr] bg-blue-very_pale">
			<header className="flex flex-col justify-center bg-circles bg-no-repeat bg-center w-full text-center gap-3">
				<h1 className="text-3xl font-bold text-blue-dark ">
					Simple, traffic-based pricing
				</h1>
				<div className="flex flex-col md:flex-row text-blue-gray justify-center">
					<h2>Sign-up for our 30-day trial.</h2>
					<h2>No credit card required.</h2>
				</div>
			</header>
			<main className="flex mx-auto">
				<div className="bg-white shadow-lg rounded-md p-10 h-fit md:w-[40rem]">
					<div className="flex flex-col items-center gap-10 pb-10 grid_pricing">
						<div className="text-blue-gray uppercase md:justify-self-start px-6">
							{checked
								? `${(toFixedPrice * 8.33).toFixed(0)}`
								: `${price * 6.25}`}
							k Pageviews
						</div>
						<div className="order-3 flex items-center gap-3 md:order-2 md:justify-self-end mr-3">
							<h3 className="text-5xl font-bold text-blue-dark">
								{checked
									? `$${(price * 0.75).toFixed(0)}.00`
									: `$${price}.00`}
							</h3>
							<h4 className="text-blue-gray ">/ month</h4>
						</div>
						<div className="order-2 md:[grid-row:2/2] md:[grid-column:1/3] md:justify-center">
							<Slider.Root
								className="SliderRoot"
								defaultValue={[16]}
								max={24}
								step={1}
								min={8}
								onValueChange={(value) => setPrice(value[0])}
								aria-label="Volume"
							>
								<Slider.Track className="SliderTrack">
									<Slider.Range className="SliderRange" />
								</Slider.Track>
								<Slider.Thumb className="SliderThumb">
									<img src={SliderIcon} alt="" />
								</Slider.Thumb>
							</Slider.Root>
						</div>
						<div className="text-sm text-blue-gray order-4 flex flex-row gap-4 items-center md:[grid-row:3/4] md:[grid-column:1/3]">
							<h4>Monthly Billing</h4>
							<Switch.Root
								className="SwitchRoot"
								id="airplane-mode"
								onCheckedChange={() =>
									setChecked((current) => !current)
								}
							>
								<Switch.Thumb className="SwitchThumb" />
							</Switch.Root>
							<div className="flex flex-row items-center gap-1">
								<h4>Yearly Billing</h4>
								<span className="text-red-light text-xs bg-red-gray rounded-full p-1 px-2">
									-25% discount
								</span>
							</div>
						</div>
					</div>

					<footer className="border-t-2 items-center text-center flex flex-col gap-4 pt-7 md:flex-row md:justify-between md:px-4	">
						<section className="flex flex-col text-sm text-blue-gray gap-4">
							<p>
								<img src={Check} alt="Check Symbol" />
								Unlimited websites
							</p>
							<p>
								<img src={Check} alt="Check Symbol" />
								100% data ownership
							</p>
							<p>
								<img src={Check} alt="Check Symbol" />
								Email reports
							</p>
						</section>
						<button className="bg-blue-dark text-blue-pale p-3 px-12 rounded-full mt-4 hover:text-white">
							Start my trial
						</button>
					</footer>
				</div>
			</main>
		</div>
	);
}

export default App;
