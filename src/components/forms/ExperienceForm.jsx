import { useState } from "react"

/* eslint-disable react/prop-types */
const ExperienceForm = ({ experience, setExperience }) => {

  const [openExperience, setOpenExperience] = useState({
    open: true,
    icon: "▼"
  })

  const handleChange = (index, field, value) => {
    const updateExperience = [...experience]
    updateExperience[index] = { ...updateExperience[index], [field]: [value] }
    setExperience(updateExperience)
  }

  const handleDelete = (index) => {
    const updateExperience = experience.filter((_, i) => i !== index)
    setExperience(updateExperience)
  }

  return (
    <section aria-label="Experience" className="experience">
      <div className="experienceHeading" onClick={() => openExperience.open ? setOpenExperience({ ...openExperience, open: false, icon: "▲" }) : setOpenExperience({ ...openExperience, open: true, icon: "▼" })}>
        <h1>Experience</h1>
        <button>{openExperience.icon}</button>
      </div>
      {
        openExperience.open && <>
          <div className="experienceForms">
            {
              experience.map((entry, index) => (
                <form action="" key={index}>
                  <label htmlFor="companyName">CompanyName</label>
                  <input type="text" name="companyName" value={entry.companyName} id="companyName" onChange={(e) => handleChange(index, "companyName", e.target.value)} />
                  <label htmlFor="position">Position</label>
                  <input type="text" name="position" id="position" value={entry.position} onChange={(e) => handleChange(index, "position", e.target.value)} />
                  <label htmlFor="responsibilities">Responsibilities</label>
                  <input type="text" name="responsibilities" id="responsibilities" value={entry.responsibilities} onChange={(e) => handleChange(index, "responsibilities", e.target.value)} />
                  <div className="experienceDate">
                    <label htmlFor="startDate">
                      StartDate
                      <input type="text" name="startDate" id="startDate" placeholder="01/2000" value={entry.startDate} onChange={(e) => handleChange(index, "startDate", e.target.value)} />
                    </label>
                    <label htmlFor="endDate">
                      EndDate
                      <input type="text" name="endDate" id="endDate" placeholder="present" value={entry.endDate} onChange={(e) => handleChange(index, "endDate", e.target.value)} />
                    </label>
                  </div>
                  <button title="Delete" className="DeleteButton" type="button" onClick={() => handleDelete(index)}>🗑️</button>
                </form>
              ))
            }
          </div>
          <button className="addExperienceBtn" onClick={() => setExperience(
            [...experience, { companyName: "", position: "", responsibilities: "", startDate: "", endDate: "" }])}>Add Experience</button>
        </>
      }
    </section>
  )
}

export default ExperienceForm