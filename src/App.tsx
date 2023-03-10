import Check from "/icon-check.svg";

function App() {
	return (
		<div className="bg-background h-screen bg-no-repeat grid grid-rows-[30%_1fr] bg-blue-very_pale">
			<header className="flex flex-col justify-center bg-circles bg-no-repeat bg-center w-full text-center gap-3">
				<h1 className="text-2xl font-bold text-blue-dark ">
					Simple, traffic-based pricing
				</h1>
				<div className="flex flex-col md:flex-row text-blue-gray justify-center">
					<h2>Sign-up for our 30-day trial.</h2>
					<h2>No credit card required.</h2>
				</div>
			</header>
			<main className="flex mx-auto">
				<div className="bg-white h-fit shadow-lg rounded-md">
					<div>
						<div className="flex flex-col items-center ">
							<div className="text-blue-gray uppercase">
								<h4>100k Pageviews</h4>
							</div>
							<div className="flex flex-row items-center gap-2">
								<h3 className="text-3xl font-bold text-blue-dark">
									$16.00
								</h3>
								<h4 className="text-blue-gray ">/ month</h4>
							</div>
							<div>Slider</div>
						</div>
						<div>Monthly Billing Yearly Billing 25% discount</div>
					</div>
					<footer className="border-t-2 items-center text-center flex flex-col gap-4">
						<section className="flex flex-col text-sm text-blue-gray">
							<span>
								<img src={Check} alt="Check Symbol" />
								Unlimited websites
							</span>
							<span>
								<img src={Check} alt="Check Symbol" />
								100% data ownership
							</span>
							<span>
								<img src={Check} alt="Check Symbol" />
								Email reports
							</span>
						</section>
						<button className="bg-blue-dark text-blue-pale p-3 rounded-full">
							Start my trial
						</button>
					</footer>
				</div>
			</main>
		</div>
	);
}

export default App;
