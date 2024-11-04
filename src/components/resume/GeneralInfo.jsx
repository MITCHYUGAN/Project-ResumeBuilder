/* eslint-disable react/prop-types */
const GeneralInfo = ({generalInfo}) => {
  return (
    <section aria-label="Resume General Info" className="resumeGeneralInfo">
      <div className="bio">
        <h1>{generalInfo.name || "Loading..."}</h1>
        <h2>{generalInfo.position}</h2>
        <p>{generalInfo.bio}</p>
      </div>
      <div className="socials">
          <a href="https://mail.google.com" target="blank_">{generalInfo.email}</a>
          <a href={generalInfo.social} target="blank_">{generalInfo.social}</a>
          <p>{generalInfo.phoneNo}</p>
      </div>
    </section>
  )
}

export default GeneralInfo