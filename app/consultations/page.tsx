import '../styles/main.scss'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactTyped } from "react-typed";
import ConsultationsMainSection from "@/app/components/ConsultationsMainSection";

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
            </main>
            {/*<Footer />*/}
        </>
    )
}

export default Consultations;