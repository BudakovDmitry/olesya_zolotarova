import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}: any) {
    const t = await getTranslations({locale, namespace: 'Home'});

    return {
        title: t('title')
    };
}

const Home = ({params: {locale}}: any) => {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Home');
    return (
        <div className='container'>
            <h1>{t('title')}</h1>
        </div>);
}

export default Home