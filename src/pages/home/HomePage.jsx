import Cartegory from "../../components/category/category";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
const HomePage =() =>
{
    return(
        <Layout>
<HeroSection/>
<Cartegory/>
<HomePageProductCard/>
<Track/>
<Testimonial/>
        </Layout>
        
    );
}
export default HomePage;
