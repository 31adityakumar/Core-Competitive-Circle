import Department from '../../Components/Department/Department';
import Hero from '../../Components/Hero/Hero';
import Pillars from '../../Components/Pillars/Pillars'
import './Home.module.scss'

const Home = () => {
    return(
        <>
        <Hero/>
        <Pillars />
        <Department/>
        </>
    )
}

export default Home;