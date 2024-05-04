import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function CvHeader({ name, email, number, address }) {
    return (
        <div className="cv-header">
            <h1>{name}</h1>
            <div className="deets">
                <div className="email">
                    <p>{email}</p>
                </div>
                <div className="number">
                    <p>{number}</p>
                </div>
                <div className="address">
                    <p>{address}</p>
                </div>
            </div>
        </div>
    )
}

function CvSummary({ summary }) {
    return (
        <div className="cv-summary">
            <h2>Summary</h2>
            <p>{summary}</p>
        </div>
    )
}

function CvEducation({ education }) {
    return (
        <div className="cv-education">
            <h2>Education</h2>
            {education.map((ed) => {
                return (
                    <div className="ed-deets" key={uuidv4()}>
                        <div className="date-loc">
                            <p>{`${ed.startDate} to ${ed.endDate}`}</p>
                            <p>{`${ed.city}`}</p>
                        </div>
                        <div className="school">
                            <h4>{`${ed.school}`}</h4>
                            <p>{`${ed.degree}`}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function Cv({ name, email, number, address, summary, education }) {
    return (
        <div className="cv">
            <CvHeader
                name={name}
                email={email}
                number={number}
                address={address}
            />
            <CvSummary summary={summary} />
            <CvEducation education={education} />
        </div>
    )
}

function ExpereinceForm() {
    function addExperience(e) {
        const expContainer = e.target.parentElement.parentElement
        const expDeets = expContainer.querySelector('.experience-deets')
        const addExp = expContainer.querySelector('.add-exp')
        const form = expContainer.querySelector('.experience-form')
        form.style.display = 'none'
        expDeets.style.display = 'block'
        addExp.style.display = 'block'
    }

    function cancelExpAddition(e) {
        const expContainer = e.target.parentElement.parentElement
        const expDeets = expContainer.querySelector('.experience-deets')
        const addExp = expContainer.querySelector('.add-exp')
        const form = expContainer.querySelector('.experience-form')
        form.style.display = 'none'
        expDeets.style.display = 'block'
        addExp.style.display = 'block'
    }

    return (
        <div className="experience-form">
            <form>
                <label>
                    <h4>Company Name</h4>
                </label>
                <input type="text" />
                <label>
                    <h4>Position Title</h4>
                </label>
                <input type="text" />
                <label>
                    <h4>Start Date</h4>
                </label>
                <input type="date" />
                <label>
                    <h4>End Date</h4>
                </label>
                <input type="date" />
                <label>
                    <h4>Location</h4>
                </label>
                <input type="text" />
                <label>
                    <h4>Description</h4>
                </label>
                <textarea rows={4} cols={30}></textarea>
            </form>
            <button className="add-edu" onClick={addExperience}>
                Add
            </button>
            <button className="cancel" onClick={cancelExpAddition}>
                Cancel
            </button>
        </div>
    )
}

function Experience() {
    function showForm(e) {
        const expContainer = e.target.parentElement.parentElement
        const expDeets = expContainer.querySelector('.experience-deets')
        const addExp = expContainer.querySelector('.add-exp')
        const form = expContainer.querySelector('.experience-form')
        expDeets.style.display = 'none'
        addExp.style.display = 'none'
        form.style.display = 'block'
    }

    return (
        <div className="experience">
            <h1>Expereince</h1>
            <div className="experience-deets"></div>
            <div className="add-exp">
                <button onClick={showForm}>+ Expereince</button>
            </div>
            <ExpereinceForm />
        </div>
    )
}

function EducationForm({ education, handleEducationChange }) {
    function addEducation(e) {
        const eduContainer = e.target.parentElement.parentElement
        const eduDeets = eduContainer.querySelector('.education-deets')
        const addEdu = eduContainer.querySelector('.add-edu')
        const formContainer = eduContainer.querySelector('.education-form')
        const form = formContainer.querySelector('form')
        formContainer.style.display = 'none'
        eduDeets.style.display = 'block'
        addEdu.style.display = 'block'
        const formData = new FormData(form)
        const formDataObject = {}
        formData.forEach((value, key) => {
            formDataObject[key] = value
        })
        handleEducationChange(formDataObject)
        form.reset()
    }

    function cancelEduAddition(e) {
        const eduContainer = e.target.parentElement.parentElement
        const eduDeets = eduContainer.querySelector('.education-deets')
        const addEdu = eduContainer.querySelector('.add-edu')
        const formContainer = eduContainer.querySelector('.education-form')
        const form = formContainer.querySelector('form')
        formContainer.style.display = 'none'
        eduDeets.style.display = 'block'
        addEdu.style.display = 'block'
        form.reset()
    }

    return (
        <div className="education-form">
            <form>
                <label>
                    <h4>School</h4>
                </label>
                <input type="text" name="school" autoComplete="off" />
                <label>
                    <h4>Degree</h4>
                </label>
                <input type="text" name="degree" autoComplete="off" />
                <label>
                    <h4>Start Date</h4>
                </label>
                <input type="month" name="startDate" autoComplete="off" />
                <label>
                    <h4>End Date</h4>
                </label>
                <input type="month" name="endDate" autoComplete="off" />
                <label>
                    <h4>Location</h4>
                </label>
                <input type="text" name="location" autoComplete="off" />
            </form>
            <button className="add-edu" onClick={addEducation}>
                Add
            </button>
            <button className="cancel" onClick={cancelEduAddition}>
                Cancel
            </button>
        </div>
    )
}

function Education({ education, handleEducationChange }) {
    function showForm(e) {
        const eduContainer = e.target.parentElement.parentElement
        const eduDeets = eduContainer.querySelector('.education-deets')
        const addEdu = eduContainer.querySelector('.add-edu')
        const form = eduContainer.querySelector('.education-form')
        eduDeets.style.display = 'none'
        addEdu.style.display = 'none'
        form.style.display = 'block'
    }

    return (
        <div className="education">
            <h1>Education</h1>
            <div className="education-deets">
                {education.map((edu) => (
                    <h4 key={uuidv4()}>{edu.school}</h4>
                ))}
            </div>
            <div className="add-edu">
                <button onClick={showForm}>+ Education</button>
            </div>
            <EducationForm
                education={education}
                handleEducationChange={handleEducationChange}
            />
        </div>
    )
}

function Summary({ summary, handleSummaryChange }) {
    return (
        <form className="summary">
            <label>
                <h1>Summary</h1>
            </label>
            <textarea
                className="summary-txt"
                value={summary}
                onChange={(e) => handleSummaryChange(e)}
                cols={30}
                rows={4}
            ></textarea>
        </form>
    )
}

function PersonalDeets({
    name,
    handleNameChange,
    email,
    handleEmailChange,
    number,
    handleNumberChange,
    address,
    handleAddressChange,
}) {
    return (
        <form className="personal-deets">
            <label>
                <h1>Personal Details</h1>
            </label>
            <label>
                <h4>Full name</h4>
            </label>
            <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
            />
            <label>
                <h4>Email</h4>
            </label>
            <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
            />
            <label>
                <h4>Phone number</h4>
            </label>
            <input
                type="text"
                value={number}
                onChange={(e) => handleNumberChange(e)}
            />
            <label>
                <h4>Address</h4>
            </label>
            <input
                type="text"
                value={address}
                onChange={(e) => handleAddressChange(e)}
            />
        </form>
    )
}

function InfoForm({
    name,
    handleNameChange,
    email,
    handleEmailChange,
    number,
    handleNumberChange,
    address,
    handleAddressChange,
    summary,
    handleSummaryChange,
    education,
    handleEducationChange,
}) {
    return (
        <div className="info-form">
            <PersonalDeets
                name={name}
                handleChange={handleNameChange}
                email={email}
                handleEmailChange={handleEmailChange}
                number={number}
                handleNumberChange={handleNumberChange}
                address={address}
                handleAddressChange={handleAddressChange}
            />
            <Summary
                summary={summary}
                handleSummaryChange={handleSummaryChange}
            />
            <Education
                education={education}
                handleEducationChange={handleEducationChange}
            />
            <Experience />
        </div>
    )
}

function MainGrid() {
    let [name, setName] = useState('John Doe')
    let [email, setEmail] = useState('jDoe@example.com')
    let [number, setNumber] = useState('+123-456-789')
    let [address, setAddress] = useState('Gotham, DC')
    let [summary, setSummary] = useState(
        'Brief paragraph on skills and expereince.'
    )
    let [education, setEducation] = useState([
        {
            school: 'Gotham State University',
            degree: 'Bachelors in Data Science',
            startDate: '2017-09',
            endDate: '2021-07',
            city: 'Gotham, DC',
        },
    ])

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleNumberChange(e) {
        setNumber(e.target.value)
    }

    function handleAddressChange(e) {
        setAddress(e.target.value)
    }

    function handleSummaryChange(e) {
        setSummary(e.target.value)
    }

    function handleEducationChange(eduDeetsObject) {
        setEducation([...education, eduDeetsObject])
    }

    return (
        <div className="main-grid">
            <InfoForm
                name={name}
                handleNameChange={handleNameChange}
                email={email}
                handleEmailChange={handleEmailChange}
                number={number}
                handleNumberChange={handleNumberChange}
                address={address}
                handleAddressChange={handleAddressChange}
                summary={summary}
                handleSummaryChange={handleSummaryChange}
                education={education}
                handleEducationChange={handleEducationChange}
            />
            <Cv
                name={name}
                email={email}
                number={number}
                address={address}
                summary={summary}
                education={education}
            />
        </div>
    )
}

function App() {
    return <MainGrid />
}

export default App
