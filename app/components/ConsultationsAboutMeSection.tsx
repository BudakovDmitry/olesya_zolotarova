import Image from "next/image";
import ConsultationsMainPhoto from "@/public/consultations_main_photo.jpg";

const ConsultationsAboutMeSection = () => {
    return (
        <section className='consultations_about_me_section'>
            <div className="consultations_about_me_section__container container">
                <div className="consultations_about_me_section__photo_container">
                    <Image src={ConsultationsMainPhoto} alt="Main photo" className='consultations_about_me_section__photo' priority={true} unoptimized/>
                </div>
                <div className="consultations_about_me_section__content">
                    <p className="consultations_about_me_section__text">Окончила институт интегральной
                        превентивной и антивозрастной
                        медицины preventage. Член ассоциации специалистов
                        образовательной и функциональной медицины.</p>
                    <p className="consultations_about_me_section__text">300+ часов дополнительных лекций и вебинаров от передовых
                        интегративных врачей.</p>
                </div>
            </div>
        </section>
    )
}

export default ConsultationsAboutMeSection;