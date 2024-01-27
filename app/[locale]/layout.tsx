import '../globals.css'
import "bootstrap/dist/css/bootstrap.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';


export async function generateMetadata({params: {locale}}: any) {
    const t = await getTranslations({locale, namespace: 'Home'});

    return {
        title: t('Олеся Золотарева - ПЕРЕЗАВАНТАЖЕННЯ'),
        description: t('Перезагрузите свои привычки и питание со мной всего за 10 дней'),
        openGraph: {
            title: t('Олеся Золотарева - ПЕРЕЗАВАНТАЖЕННЯ'),
            description: t('Перезагрузите свои привычки и питание со мной всего за 10 дней'),
            images: ['/main_photo.jpg']
        }
    };
}

export async function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'ru' }]
}

export default function Root({ children, params }: any) {
    unstable_setRequestLocale(params.locale);

  return (
      <html lang={params.locale}>
        <body>{children}</body>
      </html>
  )
}