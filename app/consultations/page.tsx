import '../styles/main.scss'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactTyped } from "react-typed";
import ConsultationsMainSection from "@/app/components/ConsultationsMainSection";
import ConsultationsAboutMeSection from "@/app/components/ConsultationsAboutMeSection";
import ConsultationsListSection from "@/app/components/ConsultationsListSection";
import ConsultationsTariffs from "@/app/components/ConsultationsTariffs";
import ConsultationsAppointment from "@/app/components/ConsultationsAppointment";
import ConsultationsReservation from "@/app/components/ConsultationsReservation";
import ConsultationsFooter from "@/app/components/ConsultationsFooter";

const navigationItems = [
    {
        title: 'Интенсив "ПЕРЕЗАГРУЗКА"',
        link: '/'
    },
]

const Consultations = () => {
    return (
        <>
            {/*<Header navigationItems={navigationItems} />*/}
            <main className='main'>
                <ConsultationsMainSection />
                <ConsultationsAboutMeSection />
                <ConsultationsListSection />
                <ConsultationsTariffs />
                {/*<ConsultationsAppointment />*/}
                <ConsultationsReservation />
                <ConsultationsFooter />
            </main>
            {/*<Footer />*/}
        </>
    )
}

export default Consultations;