import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CursorGlow } from '../ui/CursorGlow'

export function Layout({ children }) {
  return (
    <div className="noise min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
