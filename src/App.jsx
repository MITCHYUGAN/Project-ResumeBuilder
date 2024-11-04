import './App.css'
import EducationForm from './components/forms/EducationForm'
import GeneralInfoForm from './components/forms/GeneralInfoForm'
import Education from './components/resume/Education'
import GeneralInfo from './components/resume/GeneralInfo'
import Experience from "./components/resume/Experience"

import "./styles/Forms.css"
import "./styles/Resume.css"
import { useState } from 'react'

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    position: "",
    bio: "",
    email: '',
    social: "",
    phoneNo: ""
  })  

  return (
    <main className='main'>
      <div className="forms">
        <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <EducationForm />
      </div>
      <div className="resume">
        <GeneralInfo generalInfo={generalInfo}  />
        <Education />
        <Experience />
    </div>
    </main>
  )
}

export default App
