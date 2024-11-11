import './App.css'
import EducationForm from './components/forms/EducationForm'
import GeneralInfoForm from './components/forms/GeneralInfoForm'
import Education from './components/resume/Education'
import GeneralInfo from './components/resume/GeneralInfo'
import Experience from "./components/resume/Experience"

import "./styles/Forms.css"
import "./styles/Resume.css"
import { useState } from 'react'
import ExperienceForm from './components/forms/ExperienceForm'

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    position: "",
    bio: "",
    email: '',
    social: "",
    phoneNo: ""
  })


  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: ""
    }
  ])

  const [experience, setExperience] = useState([
    {
      companyName: "",
      position: "",
      responsibilities : "",
      startDate: "",
      endDate: ""
    }
  ])

  return (
    <main className='main'>
      <div className="forms">
        <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <EducationForm education={education} setEducation={setEducation} />
        <ExperienceForm experience={experience} setExperience={setExperience}/>
      </div>
      <div className="resume">
        <GeneralInfo generalInfo={generalInfo} />
        <Education education={education} />
        <Experience experience={experience} />
      </div>
    </main>
  )
}

export default App
