import '../styles/main.scss'
import Header from "../components/Header";

const navigationItems = [
    {
        title: 'Интенсив "ПЕРЕЗАГРУЗКА"',
        link: '/'
    },
]

const Consultations = () => {
    return (
        <>
            <Header navigationItems={navigationItems} />
            <main className='main'></main>
        </>
    )
}

export default Consultations;