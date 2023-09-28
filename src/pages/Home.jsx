import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Button from '../components/reusable/Button';
import Myskills from '../components/MySkills';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Activities from '../components/Activities';
import Certifications from '../components/Certifications';



const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<AboutMe />
			<Myskills />
			<Experience />
			<Education />
			<Activities />
			<Certifications />
		</div>
	);
};

export default Home;
