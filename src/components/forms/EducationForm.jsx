import { useState } from "react"

/* eslint-disable react/prop-types */
const EducationForm = ({ education, setEducation }) => {

    const [openEducation, setOpenEducation] = useState({
        open: false,
        icon: "▼"
    })

    const handleChange = (index, field, value) => {
        const updateEducation = [...education]
        updateEducation[index] = { ...updateEducation[index], [field]: value }
        setEducation(updateEducation)
    }

    const handleDelete = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    }

    return (
        <section aria-label="Education" className="education">
            <div className="educationHeading" onClick={() => {
                openEducation.open ? setOpenEducation({ ...openEducation, open: false, icon: "▲" }) : setOpenEducation({ ...openEducation, open: true, icon: "▼" })

            }}>
                <h1>Education</h1>
                <button>
                    <p aria-hidden="true">{openEducation.icon}</p>
                </button>
            </div>
            {
                openEducation.open && <>
                    <div className="educationForms">
                        {education.map((entry, index) => (
                            <form action="" key={index}>
                                <label htmlFor="school">School</label>
                                <input type="text" name="school" id="school" placeholder="University of California" value={entry.school} onChange={(e) => handleChange(index, "school", e.target.value)} />
                                <label htmlFor="degree">Degree</label>
                                <input type="text" name="degree" id="degree" placeholder="Masters" onChange={(e) => handleChange(index, "degree", e.target.value)} />
                                <div className="educationDate">
                                    <label htmlFor="startDate">
                                        StartDate
                                        <input type="text" id="startDate" placeholder="01/2000" value={entry.startDate} onChange={(e) => handleChange(index, "startDate", e.target.value)} />
                                    </label>
                                    <label htmlFor="endDate">
                                        EndDate
                                        <input type="text" id="endDate" placeholder="01/2023" value={entry.endDate} onChange={(e) => handleChange(index, "endDate", e.target.value)} />
                                    </label>
                                </div>
                                <button title="Delete" className="educationDeleteButton" type="button" onClick={() => handleDelete(index)}>🗑️</button>
                            </form>
                        ))}
                    </div>
                    <button className="addbutton" onClick={() => setEducation([...education, { school: "", degree: "", startDate: "", endDate: "", }])}>Add Education</button>
                </>
            }
        </section>
    )
}

export default EducationForm