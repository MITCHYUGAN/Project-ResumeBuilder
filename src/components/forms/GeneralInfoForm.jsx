import '../../styles/GeneralInfoForm.css'

const GeneralInfoForm = () => {
  return (
    <section aria-label="General Information" className="generalInfo">
      <h1>General Information</h1>
      <form action="">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" name="full-name" id="full-name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="phoneNo">Phone Number</label>
        <input type="tel" name="phoneNo" onChange={() => console.log()} id="phoneNo" />
      </form>
    </section>
  )
}

export default GeneralInfoForm