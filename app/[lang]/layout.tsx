import type { Metadata } from 'next'
import '../globals.css'
import "bootstrap/dist/css/bootstrap.css"

export const metadata: Metadata = {
  title: 'Олеся Золотарьова - ПЕРЕЗАГРУЗКА',
  description: 'Перезагрузите свои привычки и питание со мной всего за 10 дней',
}

export async function generateStaticParams() {
  return [{ lang: 'uk' }, { lang: 'ru' }]
}

export default function Root({ children, params }: any) {
  return (
      <html lang={params.lang}>
      <body>{children}</body>
      </html>
  )
}