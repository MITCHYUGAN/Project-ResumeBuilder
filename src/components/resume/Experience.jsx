/* eslint-disable react/prop-types */
const Experience = ({ experience }) => {
  return (
    <section aria-label="Resume Experience" className="resumeExperience">
      <h1 className="resumeExperienceHeading">Experience</h1>
      <div className="resumeexperiences">
        {
          experience.map((entry, index) => (
              <div key={index} className="resumeexperience">
              <p>{`${entry.startDate} — ${entry.endDate}`}</p>
                <div className="resumeexperienceContent">
                  <h1>{entry.companyName}</h1>
                  <h2>{entry.position}</h2>
                  <p>{entry.responsibilities}</p>
                </div>  
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Experience