import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Reviews";
import Team from "./components/Team";

function LandingPage() {
	return (
		<div className='min-h-screen bg-gray-900 relative'>
			<Header />
			<Hero />
			<Features />
			<Team />
			<Review />
			<GetStarted />
		</div>
	);
}
export default LandingPage;
