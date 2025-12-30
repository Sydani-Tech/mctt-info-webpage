import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './Landing'
import PrivacyPolicy from './PrivacyPolicy'
import ContactUs from './ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='font-sans'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
    </>
  )
}

export default App
