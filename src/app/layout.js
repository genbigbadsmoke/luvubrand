import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import GlobalState, { GlobalContex } from '../context/index'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luvubrand',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar/>
          <main className='flex min-h-screen flex-col mt-[80px]'>{children}</main>
          <Footer/>
        </GlobalState>
      </body>
    </html>
  )
}