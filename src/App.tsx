import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import { LanguageProvider } from './components/LanguageContext'
import './App.css'

function App() {
  return (
    <>
      <LanguageProvider>
        <Home />
        <Projects />
        <Contacts />
      </LanguageProvider >
    </>
  )
}

export default App
