import { useState } from 'react'
import "./assets/css/main.css";
import PageHeader from './components/PageHeader'
import LandingPage from './pageBody/Landing'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <PageHeader />
      <main>
        <LandingPage />  
      </main>
      {/* add modal here*/} 
      <Footer/>
    </>    
  )
}

export default App


// https://www.youtube.com/watch?v=LNBDYLCk6pc&list=PLMeVVCh-i3Cr3SjCHitrx4dhWkvOIP5Ez