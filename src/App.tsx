function App() {
	return (
		<div className="bg-background h-screen bg-no-repeat grid grid-rows-[30%_1fr]">
			<header className="flex flex-col justify-center bg-circles bg-no-repeat bg-center w-full text-center gap-3">
				<h1 className="text-2xl font-bold text-blue-dark">
					Simple, traffic-based pricing
				</h1>
				<div className="flex flex-col md:flex-row text-blue-gray">
					<h2>Sign-up for our 30-day trial.</h2>
					<h2>No credit card required.</h2>
				</div>
			</header>
			<main className="flex mx-auto">
				<div>
					<div>
						<div>
							<div>100k Pageviews </div>
							<div>$16.00 /month</div>
							<div>Slider</div>
						</div>
						<div>Monthly Billing Yearly Billing 25% discount</div>
					</div>
					<footer>
						<section>
							<span>Unlimited websites</span>
							<span>100% data ownership </span>
							<span>Email reports</span>
						</section>
						<button>Start my trial</button>
					</footer>
				</div>
			</main>
		</div>
	);
}

export default App;
