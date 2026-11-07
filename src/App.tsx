import { Footer } from '@/components/site/Footer'
import { Header } from '@/components/site/Header'
import { Communities } from '@/sections/Communities'
import { Culture } from '@/sections/Culture'
import { Events } from '@/sections/Events'
import { FieldNotes } from '@/sections/FieldNotes'
import { Guidance } from '@/sections/Guidance'
import { Guide } from '@/sections/Guide'
import { Hero } from '@/sections/Hero'
import { Join } from '@/sections/Join'
import { Learn } from '@/sections/Learn'
import { Paid } from '@/sections/Paid'
import { Programs } from '@/sections/Programs'
import { Projects } from '@/sections/Projects'
import { Team } from '@/sections/Team'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Guide />
        <Events />
        <Projects />
        <Learn />
        <FieldNotes />
        <Paid />
        <Programs />
        <Culture />
        <Communities />
        <Team />
        <Guidance />
        <Join />
      </main>
      <Footer />
    </>
  )
}

export default App
