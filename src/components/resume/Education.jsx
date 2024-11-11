/* eslint-disable react/prop-types */
const Education = ({ education }) => {
    return (
        <section aria-label="Resume Education" className="resumeEducation">
            <h1 className="resumeEducationHeading">Education</h1>
            <div className="resumeeducations">
                {
                    education.map((entry) => (
                        <div key={1} className="resumeeducation">
                            <p>{`${entry.startDate} — ${entry.endDate}`}</p>
                            <div className="resumeeducationcentent">
                                <h1>{entry.school}</h1>
                                <h2>{entry.degree}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Education