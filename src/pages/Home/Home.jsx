import Disciplines from './sections/Disciplines/Disciplines'
import Ecosystem from './sections/Ecosystem/Ecosystem'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Thinking from './sections/Thinking/Thinking'

export default function Home() {
  return (
    <>
      <Hero />
      <Thinking />
      <Projects />
      <Ecosystem />
      <Disciplines />
    </>
  )
}
