export async function generateMetadata() {
    return {
        title: 'Олеся Золотарева - Консультации',
        description: 'Практикующий нутрициолог, специалист по питанию и модификации образа жизни, натуропат.',
        openGraph: {
            title: 'Олеся Золотарева - Консультации',
            description: 'Практикующий нутрициолог, специалист по питанию и модификации образа жизни, натуропат.',
            images: ['/consultations_main_photo.jpg']
        }
    };
}

export default function ConsultationsLayout({ children }: any) {

    return (
        <html lang='ru'>
        <body>{children}</body>
        </html>
    )
}