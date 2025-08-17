import HeroSectionComponent from './components/hero-section/hero-section.component';
import HomeAboutUsComponent from './components/about-us/about-us.component';
import HomeProductsComponent from './components/home-products/home-products.component';
import HomeCreditsComponent from './components/home-credits/home-credits.component';

function HomeComponent() {

    return (
        <>
            <HeroSectionComponent/>
            <HomeAboutUsComponent/>
            <HomeProductsComponent/>
            <HomeCreditsComponent/>
        </>
    );
}

export default HomeComponent;
