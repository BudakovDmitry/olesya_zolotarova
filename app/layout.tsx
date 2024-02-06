import './globals.css'
import "bootstrap/dist/css/bootstrap.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export async function generateMetadata() {
    return {
        title: 'Олеся Золотарева - ПЕРЕЗАГРУЗКА',
        description: 'Перезагрузите свои привычки и питание со мной всего за 10 дней',
        openGraph: {
            title: 'Олеся Золотарева - ПЕРЕЗАГРУЗКА',
            description: 'Перезагрузите свои привычки и питание со мной всего за 10 дней',
            images: ['/main_photo.jpg']
        }
    };
}

export default function Root({ children }: any) {

    return (
        <html lang='ru'>
        <body>{children}</body>
        </html>
    )
}