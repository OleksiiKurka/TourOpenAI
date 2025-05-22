import CategoriesSection from './components/CategoriesSection';
import FAQsSection from './components/FAQsSection';
import HeroSection from './components/HeroSection';
import TopSearchesSection from './components/TopSearchesSection';
import TourTypesSection from './components/TourTypesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import SubscriptionPlanSection from './components/SubscriptionPlanSection';
import styles from './HomeView.module.scss';
import CityOverviewSection from './components/CityOverviewSection';

function HomeView() {
  return (
    <div className={styles.wrapper}>
      <HeroSection />
      <TopSearchesSection />
      <WhyChooseUsSection />
      <SubscriptionPlanSection />
      <CityOverviewSection />
      <CategoriesSection />
      <TourTypesSection />
      <FAQsSection />
    </div>
  );
}

export default HomeView;
