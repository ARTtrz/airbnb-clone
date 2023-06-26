import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToastrProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone project',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  console.log(currentUser, 'user right now')
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        
        {children}
        
      </body>
    </html>
  )
}
