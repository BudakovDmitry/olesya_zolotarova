import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const ConsultationsReservation = () => {
    return (
        <section className="consultations_reservation">
            <div className="consultations_reservation__container container">
                <p className="consultations_reservation__text">Для брони места на
                    консультацию напишите в
                    удобный для вас мессенджер</p>
                <div className="consultations_reservation__buttons_container">
                    <a href="https://www.instagram.com/olesya_prohealth" target='_blank' className="btn_consultations btn_consultations__primary consultations_reservation__link">
                        <InstagramIcon fontSize='small' sx={{color: '#FFFFFF'}}/>
                        Instagram</a>
                    <a href="https://t.me/olesya_healthcoach" target='_blank' className="btn_consultations btn_consultations__secondary consultations_reservation__link">
                        <TelegramIcon fontSize='small' sx={{color: '#496E0D'}} />
                        Telegram</a>
                </div>
            </div>
        </section>
    )
}

export default ConsultationsReservation;