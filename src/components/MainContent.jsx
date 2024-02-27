import '../styles/components/MainContent.sass'
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesContainer from './TecnologiesContainer'

function MainContent() {
  return (
    <main id="main-content">
      <AboutContainer />
      <TecnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent
