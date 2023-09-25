import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Button from '../components/reusable/Button';
import Myskills from '../components/MySkills';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import StickyFooter from '../components/shared/Footer';
import Education from '../components/Education';



const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<AboutMe />
			<Myskills />
			<Experience />
			<Education />
			{/* <StickyFooter></StickyFooter> */}
		</div>
	);
};

export default Home;
