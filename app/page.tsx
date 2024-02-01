import './styles/main.scss'
import MainSection from "@/app/components/MainSection";
import AboutMeSection from "@/app/components/AboutMeSection";
import WhoIsSuitableSection from "@/app/components/WhoIsSuitableSection";
import AboutIntensiveSection from "@/app/components/AboutIntensiveSection";
import ParticipateSection from '@/app/components/ParticipateSection';
import StepsIntensiveSection from "@/app/components/StepsIntensiveSection";
import TariffsSection from '@/app/components/TariffsSection';
import ReviewsSection from '@/app/components/ReviewsSection';
import ConsultationSection from "@/app/components/ConsultationSection";
import Footer from "@/app/components/Footer";
import Header from '@/app/components/Header';
import StatisticsSection from "@/app/components/StatisticsSection";


const Home = () => {

    return (
        <>
            <Header />
            <main className='main'>
                <MainSection />
                <StatisticsSection />
                <AboutMeSection />
                <WhoIsSuitableSection />
                <AboutIntensiveSection />
                <ParticipateSection />
                <StepsIntensiveSection />
                <TariffsSection />
                <ReviewsSection />
                <ConsultationSection />
            </main>
            <Footer />
        </>
    );
}

export default Home;