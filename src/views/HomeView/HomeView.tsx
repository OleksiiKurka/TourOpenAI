import CategoriesSection from "./components/CategoriesSection";
import FAQsSection from "./components/FAQsSection";
import HeroSection from "./components/HeroSection";
import PopularSearchSection from "./components/PopularSearchSection";
import TourTypesSection from "./components/TourTypesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import SubscriptionPlanSection from "./components/SubscriptionPlanSection";
import styles from './HomeView.module.scss';

function HomeView() {
    return (
        <div className={styles.wrapper}>
        <HeroSection />
        <PopularSearchSection />
        <WhyChooseUsSection />
        <SubscriptionPlanSection />
        <CategoriesSection />
        <TourTypesSection />
        <FAQsSection />
        </div>
    )
}

export default HomeView;