import { Children, useState } from 'react'
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

function CvSkills({
    skillOne,
    skillTwo,
    skillThree,
    skillFour,
    skillFive,
    skillSix,
    skillSeven,
    skillEight,
}) {
    return (
        <div className="skills">
            <div className="col-one">
                <ul>
                    <li>
                        <p>{skillOne}</p>
                    </li>
                    <li>
                        <p>{skillTwo}</p>
                    </li>
                    <li>
                        <p>{skillThree}</p>
                    </li>
                    <li>
                        <p>{skillFour}</p>
                    </li>
                </ul>
            </div>
            <div className="col-two">
                <ul>
                    <li>
                        <p>{skillFive}</p>
                    </li>
                    <li>
                        <p>{skillSix}</p>
                    </li>
                    <li>
                        <p>{skillSeven}</p>
                    </li>
                    <li>
                        <p>{skillEight}</p>
                    </li>
                </ul>
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

function CvExperience({ experience }) {
    return (
        <div className="cv-expereince">
            <h2>Experience</h2>
            {experience.map((exp) => {
                return (
                    <div className="exp-deets" key={uuidv4()}>
                        <div className="date-loc">
                            <p>{`${exp.startDate} to ${exp.endDate}`}</p>
                            <p>{`${exp.city}`}</p>
                        </div>
                        <div className="org">
                            <h4>{`${exp.org}`}</h4>
                            <p>{`${exp.position}`}</p>
                        </div>
                        <div className="exp-summary">
                            <p>{`${exp.summary}`}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function Cv({
    name,
    email,
    number,
    address,
    summary,
    education,
    experience,
    skillOne,
    skillTwo,
    skillThree,
    skillFour,
    skillFive,
    skillSix,
    skillSeven,
    skillEight,
}) {
    return (
        <div className="cv">
            <CvHeader
                name={name}
                email={email}
                number={number}
                address={address}
            />
            <CvSkills
                skillOne={skillOne}
                skillTwo={skillTwo}
                skillThree={skillThree}
                skillFour={skillFour}
                skillFive={skillFive}
                skillSix={skillSix}
                skillSeven={skillSeven}
                skillEight={skillEight}
            />
            <CvSummary summary={summary} />
            <CvEducation education={education} />
            <CvExperience experience={experience} />
        </div>
    )
}

function ExperienceForm({ handleAddExperience }) {
    function addExperience(e) {
        const expContainer = e.target.parentElement.parentElement
        const expDeets = expContainer.querySelector('.experience-deets')
        const addExp = expContainer.querySelector('.add-exp')
        const formContainer = expContainer.querySelector('.experience-form')
        const form = formContainer.querySelector('form')
        formContainer.classList.remove('visible')
        formContainer.classList.add('hidden')
        expDeets.classList.remove('hidden')
        expDeets.classList.add('visible')
        addExp.classList.remove('hidden')
        addExp.classList.add('visible')
        const formData = new FormData(form)
        const formDataObject = {}
        formData.forEach((value, key) => {
            formDataObject[key] = value
        })
        handleAddExperience(formDataObject)
        form.reset()
    }

    function cancelExpAddition(e) {
        const expContainer = e.target.parentElement.parentElement
        const expDeets = expContainer.querySelector('.experience-deets')
        const addExp = expContainer.querySelector('.add-exp')
        const form = expContainer.querySelector('.experience-form')
        form.classList.remove('visible')
        form.classList.add('hidden')
        expDeets.classList.remove('hidden')
        expDeets.classList.add('visible')
        addExp.classList.remove('hidden')
        addExp.classList.add('visible')
    }

    return (
        <div className="experience-form hidden">
            <form>
                <label>
                    <h4>Company Name</h4>
                </label>
                <input type="text" name="org" autoComplete="off" />
                <label>
                    <h4>Position Title</h4>
                </label>
                <input type="text" name="position" autoComplete="off" />
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
                <input type="text" name="city" autoComplete="off" />
                <label>
                    <h4>Description</h4>
                </label>
                <textarea
                    rows={4}
                    cols={30}
                    name="summary"
                    autoComplete="off"
                ></textarea>
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

function Experience({
    experience,
    handleAddExperience,
    handleDeleteExperience,
}) {
    let expDeetsVisible = false

    function showForm(e) {
        const expContainer = e.target.parentElement.parentElement
        const expDeets = expContainer.querySelector('.experience-deets')
        const addExp = expContainer.querySelector('.add-exp')
        const form = expContainer.querySelector('.experience-form')
        expDeets.classList.remove('visible')
        expDeets.classList.add('hidden')
        addExp.classList.remove('visible')
        addExp.classList.add('hidden')
        form.classList.remove('hidden')
        form.classList.add('visible')
    }

    function showExpDeets() {
        const expContainer = document.querySelector('.experience')
        const expDeets = document.querySelector('.experience-deets')
        const addExp = document.querySelector('.add-exp')
        expContainer.classList.remove('deets-hidden')
        expDeets.classList.remove('hidden')
        expDeets.classList.add('visible')
        addExp.classList.remove('hidden')
        addExp.classList.add('visible')
        expDeetsVisible = true
    }

    function hideExpDeets() {
        const expContainer = document.querySelector('.experience')
        const children = expContainer.children
        expContainer.classList.add('deets-hidden')
        for (const child of children) {
            if (child.classList.contains('visible')) {
                child.classList.add('hidden')
                child.classList.remove('visible')
            }
        }
        expDeetsVisible = false
    }

    return (
        <div className="experience deets-hidden">
            <button
                className="main-btn"
                onClick={() =>
                    expDeetsVisible ? hideExpDeets() : showExpDeets()
                }
            >
                <h1>Experience</h1>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="experience-deets hidden">
                {experience.map((exp, idx) => (
                    <div className={exp.org} key={uuidv4()}>
                        <h4>{exp.org}</h4>
                        <button
                            onClick={() => handleDeleteExperience(idx)}
                            className="fa-solid fa-trash"
                            style={{ color: '#ff0000' }}
                        ></button>
                    </div>
                ))}
            </div>
            <div className="add-exp hidden">
                <button onClick={showForm}>+ Experience</button>
            </div>
            <ExperienceForm handleAddExperience={handleAddExperience} />
        </div>
    )
}

function EducationForm({ handleAddEducation }) {
    function addEducation(e) {
        const eduContainer = e.target.parentElement.parentElement
        const eduDeets = eduContainer.querySelector('.education-deets')
        const addEdu = eduContainer.querySelector('.add-edu')
        const formContainer = eduContainer.querySelector('.education-form')
        const form = formContainer.querySelector('form')
        formContainer.classList.remove('visible')
        formContainer.classList.add('hidden')
        eduDeets.classList.add('visible')
        eduDeets.classList.remove('hidden')
        addEdu.classList.add('visible')
        addEdu.classList.remove('hidden')
        const formData = new FormData(form)
        const formDataObject = {}
        formData.forEach((value, key) => {
            formDataObject[key] = value
        })
        handleAddEducation(formDataObject)
        form.reset()
    }

    function cancelEduAddition(e) {
        const eduContainer = e.target.parentElement.parentElement
        const eduDeets = eduContainer.querySelector('.education-deets')
        const addEdu = eduContainer.querySelector('.add-edu')
        const formContainer = eduContainer.querySelector('.education-form')
        const form = formContainer.querySelector('form')
        formContainer.classList.remove('visible')
        formContainer.classList.add('hidden')
        eduDeets.classList.remove('hidden')
        eduDeets.classList.add('visible')
        addEdu.classList.remove('hidden')
        addEdu.classList.add('visible')
        form.reset()
    }

    return (
        <div className="education-form hidden">
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
                <input type="text" name="city" autoComplete="off" />
            </form>
            <button className="add-edu-deets" onClick={addEducation}>
                Add
            </button>
            <button className="cancel" onClick={cancelEduAddition}>
                Cancel
            </button>
        </div>
    )
}

function Education({ education, handleAddEducation, handleDelelteEducation }) {
    let edDeetsVisible = false

    function showForm(e) {
        const eduContainer = e.target.parentElement.parentElement
        const eduDeets = eduContainer.querySelector('.education-deets')
        const addEdu = eduContainer.querySelector('.add-edu')
        const form = eduContainer.querySelector('.education-form')
        eduContainer.classList.remove('deets-hidden')
        eduDeets.classList.remove('visible')
        eduDeets.classList.add('hidden')
        addEdu.classList.remove('visible')
        addEdu.classList.add('hidden')
        form.classList.add('visible')
        form.classList.remove('hidden')
    }

    function showEdDeets() {
        const educationContainer = document.querySelector('.education')
        const educationDeets = document.querySelector('.education-deets')
        const addEduBtn = document.querySelector('.add-edu')
        educationContainer.classList.remove('deets-hidden')
        educationDeets.classList.remove('hidden')
        educationDeets.classList.add('visible')
        addEduBtn.classList.remove('hidden')
        addEduBtn.classList.add('visible')
        edDeetsVisible = true
    }

    function hideEdDeets() {
        const educationContainer = document.querySelector('.education')
        const children = educationContainer.children
        educationContainer.classList.add('deets-hidden')
        for (const child of children) {
            if (child.classList.contains('visible')) {
                child.classList.add('hidden')
                child.classList.remove('visible')
            }
        }
        edDeetsVisible = false
    }

    return (
        <div className="education deets-hidden">
            <button
                className="main-btn"
                onClick={() => (edDeetsVisible ? hideEdDeets() : showEdDeets())}
            >
                <h1>Education</h1>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
            <div className="education-deets hidden">
                {education.map((edu, idx) => (
                    <div className={edu.school} key={uuidv4()}>
                        <h4>{edu.school}</h4>
                        <button
                            onClick={() => handleDelelteEducation(idx)}
                            className="fa-solid fa-trash"
                            style={{ color: '#ff0000' }}
                        ></button>
                    </div>
                ))}
            </div>
            <div className="add-edu hidden">
                <button onClick={showForm}>+ Education</button>
            </div>
            <EducationForm handleAddEducation={handleAddEducation} />
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

function Skills({
    skillOne,
    handleSkillOne,
    skillTwo,
    handleSkillTwo,
    skillThree,
    handleSkillThree,
    skillFour,
    handleSkillFour,
    skillFive,
    handleSkillFive,
    skillSix,
    handleSkillSix,
    skillSeven,
    handleSkillSeven,
    skillEight,
    handleSkillEight,
}) {
    return (
        <div className="skills">
            <label>
                <h1>Skills</h1>
            </label>
            <ul>
                <li>
                    <input
                        type="text"
                        value={skillOne}
                        onChange={(e) => handleSkillOne(e)}
                    />
                </li>
                <li>
                    <input
                        type="text"
                        value={skillTwo}
                        onChange={(e) => handleSkillTwo(e)}
                    />
                </li>
                <li>
                    <input
                        type="text"
                        value={skillThree}
                        onChange={(e) => handleSkillThree(e)}
                    />
                </li>
                <li>
                    <input
                        type="text"
                        value={skillFour}
                        onChange={(e) => handleSkillFour(e)}
                    />
                </li>
                <li>
                    <input
                        type="text"
                        value={skillFive}
                        onChange={(e) => handleSkillFive(e)}
                    />
                </li>
                <li>
                    <input
                        type="text"
                        value={skillSix}
                        onChange={(e) => handleSkillSix(e)}
                    />
                </li>
                <li>
                    <input
                        type="text"
                        value={skillSeven}
                        onChange={(e) => handleSkillSeven(e)}
                    />
                </li>
                <li>
                    <input
                        type="text"
                        value={skillEight}
                        onChange={(e) => handleSkillEight(e)}
                    />
                </li>
            </ul>
        </div>
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
            <div className="name">
                <label>
                    <h4>Full name</h4>
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(e)}
                />
            </div>
            <div className="email">
                <label>
                    <h4>Email</h4>
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e)}
                />
            </div>
            <div className="number">
                <label>
                    <h4>Phone number</h4>
                </label>
                <input
                    type="text"
                    value={number}
                    onChange={(e) => handleNumberChange(e)}
                />
            </div>
            <div className="address">
                <label>
                    <h4>Address</h4>
                </label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => handleAddressChange(e)}
                />
            </div>
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
    skillOne,
    handleSkillOne,
    skillTwo,
    handleSkillTwo,
    skillThree,
    handleSkillThree,
    skillFour,
    handleSkillFour,
    skillFive,
    handleSkillFive,
    skillSix,
    handleSkillSix,
    skillSeven,
    handleSkillSeven,
    skillEight,
    handleSkillEight,
    summary,
    handleSummaryChange,
    education,
    handleAddEducation,
    handleDelelteEducation,
    experience,
    handleAddExperience,
    handleDeleteExperience,
}) {
    return (
        <div className="info-form">
            <PersonalDeets
                name={name}
                handleNameChange={handleNameChange}
                email={email}
                handleEmailChange={handleEmailChange}
                number={number}
                handleNumberChange={handleNumberChange}
                address={address}
                handleAddressChange={handleAddressChange}
            />
            <Skills
                skillOne={skillOne}
                handleSkillOne={handleSkillOne}
                skillTwo={skillTwo}
                handleSkillTwo={handleSkillTwo}
                skillThree={skillThree}
                handleSkillThree={handleSkillThree}
                skillFour={skillFour}
                handleSkillFour={handleSkillFour}
                skillFive={skillFive}
                handleSkillFive={handleSkillFive}
                skillSix={skillSix}
                handleSkillSix={handleSkillSix}
                skillSeven={skillSeven}
                handleSkillSeven={handleSkillSeven}
                skillEight={skillEight}
                handleSkillEight={handleSkillEight}
            />
            <Summary
                summary={summary}
                handleSummaryChange={handleSummaryChange}
            />
            <Education
                education={education}
                handleAddEducation={handleAddEducation}
                handleDelelteEducation={handleDelelteEducation}
            />
            <Experience
                experience={experience}
                handleAddExperience={handleAddExperience}
                handleDeleteExperience={handleDeleteExperience}
            />
        </div>
    )
}

function MainGrid() {
    let [name, setName] = useState('John Doe')
    let [email, setEmail] = useState('jDoe@example.com')
    let [number, setNumber] = useState('+123-456-789')
    let [address, setAddress] = useState('Gotham, DC')
    let [skillOne, setSkillOne] = useState('HTML')
    let [skillTwo, setSkillTwo] = useState('CSS')
    let [skillThree, setSkillThree] = useState('JavaScript')
    let [skillFour, setSkillFour] = useState('React')
    let [skillFive, setSkillFive] = useState('Node.js')
    let [skillSix, setSkillSix] = useState('Webpack')
    let [skillSeven, setSkillSeven] = useState('Python')
    let [skillEight, setSkillEight] = useState('Responsive Design')
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
    let [experience, setExperience] = useState([
        {
            org: 'Wayne Enterprises',
            position: 'Data Analyst',
            startDate: '2021-12',
            endDate: '2022-09',
            city: 'Gotham, DC',
            summary:
                'As a Data Analyst, I was responsible for harnessing the power of data to drive informed decision-making within the organization. My role involved extracting and cleaning data from diverse sources, then delving into its depths through exploratory analysis to uncover valuable insights and trends.',
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

    function handleSkillOne(e) {
        setSkillOne(e.target.value)
    }

    function handleSkillTwo(e) {
        setSkillTwo(e.target.value)
    }

    function handleSkillThree(e) {
        setSkillThree(e.target.value)
    }

    function handleSkillFour(e) {
        setSkillFour(e.target.value)
    }

    function handleSkillFive(e) {
        setSkillFive(e.target.value)
    }

    function handleSkillSix(e) {
        setSkillSix(e.target.value)
    }

    function handleSkillSeven(e) {
        setSkillSeven(e.target.value)
    }

    function handleSkillEight(e) {
        setSkillEight(e.target.value)
    }

    function handleSummaryChange(e) {
        setSummary(e.target.value)
    }

    function handleAddEducation(eduDeetsObject) {
        setEducation([...education, eduDeetsObject])
    }

    function handleDelelteEducation(index) {
        let eduCpy = education.filter((e, i) => i !== index)
        setEducation(eduCpy)
    }

    function handleAddExperience(expDeetsObject) {
        setExperience([...experience, expDeetsObject])
    }

    function handleDeleteExperience(index) {
        let expCpy = experience.filter((e, i) => i !== index)
        setExperience(expCpy)
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
                skillOne={skillOne}
                handleSkillOne={handleSkillOne}
                skillTwo={skillTwo}
                handleSkillTwo={handleSkillTwo}
                skillThree={skillThree}
                handleSkillThree={handleSkillThree}
                skillFour={skillFour}
                handleSkillFour={handleSkillFour}
                skillFive={skillFive}
                handleSkillFive={handleSkillFive}
                skillSix={skillSix}
                handleSkillSix={handleSkillSix}
                skillSeven={skillSeven}
                handleSkillSeven={handleSkillSeven}
                skillEight={skillEight}
                handleSkillEight={handleSkillEight}
                summary={summary}
                handleSummaryChange={handleSummaryChange}
                education={education}
                handleAddEducation={handleAddEducation}
                handleDelelteEducation={handleDelelteEducation}
                experience={experience}
                handleAddExperience={handleAddExperience}
                handleDeleteExperience={handleDeleteExperience}
            />
            <Cv
                name={name}
                email={email}
                number={number}
                address={address}
                summary={summary}
                skillOne={skillOne}
                skillTwo={skillTwo}
                skillThree={skillThree}
                skillFour={skillFour}
                skillFive={skillFive}
                skillSix={skillSix}
                skillSeven={skillSeven}
                skillEight={skillEight}
                education={education}
                experience={experience}
            />
        </div>
    )
}

function App() {
    return <MainGrid />
}

export default App
