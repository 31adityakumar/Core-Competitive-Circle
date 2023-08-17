import About from '../../Components/About/About';
import Department from '../../Components/Department/Department';
import Hero from '../../Components/Hero/Hero';
import Pillars from '../../Components/Pillars/Pillars';
import './Home.module.scss'

const Home = () => {
    return(
        <>
        <Hero/>
        <About/>
        <Pillars/>
        <Department/>
        </>
    )
}

export default Home;