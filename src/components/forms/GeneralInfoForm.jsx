/* eslint-disable react/prop-types */
import '../../styles/GeneralInfoForm.css'

const GeneralInfoForm = ({ generalInfo, setGeneralInfo }) => {

  return (
    <section aria-label="General Information" className="generalInfo">
      <div className='generalInfoHeading'>
        <h1>General Information</h1>
        {/* <p>&and;</p> */}
        <p>▼</p>
        {/* <p>&or;</p> */}
      </div>
      <form action="">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" name="full-name" id="full-name" placeholder='John Snow'
          onChange={(e) => setGeneralInfo({ ...generalInfo, name: e.target.value })}
        />
        <label htmlFor="position">Position</label>
        <input type="text" id='position' name='position' placeholder='Frontend Developer'
          onChange={(e) => setGeneralInfo({ ...generalInfo, position: e.target.value })}
        />
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" id="bio" placeholder='Frontend Developer Proficient in HTML, CSS, Java-Script and React. I specialize in creaing efficient and responsive website that meet organizations needs'
          onChange={(e) => setGeneralInfo({ ...generalInfo, bio: e.target.value })}></textarea>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder='generalemail@gmail.com'
          onChange={(e) => setGeneralInfo({ ...generalInfo, email: e.target.value })}
        />
        <label htmlFor="socials">Social Link</label>
        <input type="text" name="socials" id="socials" placeholder='https://x.com/me'
          onChange={(e) => setGeneralInfo({ ...generalInfo, social: e.target.value })}
        />
        <label htmlFor="phoneNo">Phone Number</label>
        <input type="tel" name="phoneNo" id="phoneNo" placeholder='+23480273655'
          onChange={(e) => setGeneralInfo({ ...generalInfo, phoneNo: e.target.value })}
        />
      </form>
    </section>
  )
}

export default GeneralInfoForm