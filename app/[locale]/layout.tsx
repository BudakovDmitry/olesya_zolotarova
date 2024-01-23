import '../globals.css'
import "bootstrap/dist/css/bootstrap.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';


export async function generateMetadata({params: {locale}}: any) {
    const t = await getTranslations({locale, namespace: 'Home'});

    return {
        title: t('Олеся Золотарьова - ПЕРЕЗАВАНТАЖЕННЯ')
    };
}
// export const metadata: Metadata = {
//   title: 'Олеся Золотарьова - ПЕРЕЗАГРУЗКА',
//   description: 'Перезагрузите свои привычки и питание со мной всего за 10 дней',
// }

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