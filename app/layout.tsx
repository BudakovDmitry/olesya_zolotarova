import type { Metadata } from 'next'
import './globals.css'
import "bootstrap/dist/css/bootstrap.css"

export const metadata: Metadata = {
  title: 'Олеся Золотарьова - ПЕРЕЗАГРУЗКА',
  description: 'Перезагрузите свои привычки и питание со мной всего за 10 дней',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
