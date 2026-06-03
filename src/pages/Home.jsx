import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Projects } from '../components/sections/Projects'
import { Stack } from '../components/sections/Stack'
import { Experience } from '../components/sections/Experience'
import { Blog } from '../components/sections/Blog'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <Blog />
      <Contact />
    </>
  )
}