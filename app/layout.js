export const metadata = {
  title: 'Motivational Quotes - Daily Inspiration',
  description: 'Get inspired with motivational quotes from great minds',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
