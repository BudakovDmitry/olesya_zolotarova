import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";


const Home = ({params: {locale}}: any) => {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Home');
    return (
        <div className='container'>
            <LanguageSwitcher />
            <h1>{t('title')}</h1>
        </div>);
}

export default Home