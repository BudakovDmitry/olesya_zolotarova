import Link from 'next/link';

const LanguageSwitcher = () => {
    return (
        <div>
            <Link href="/uk">Українська</Link>
            {' | '}
            <Link href="/ru">Русский</Link>
        </div>
    );
};

export default LanguageSwitcher;