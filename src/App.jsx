import './App.css'

function Cv() {}

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

function EducationForm() {
    function addEducation(e) {
        const eduContainer = e.target.parentElement.parentElement
        const eduDeets = eduContainer.querySelector('.education-deets')
        const addEdu = eduContainer.querySelector('.add-edu')
        const form = eduContainer.querySelector('.education-form')

        form.style.display = 'none'
        eduDeets.style.display = 'block'
        addEdu.style.display = 'block'
    }

    function cancelEduAddition(e) {
        const eduContainer = e.target.parentElement.parentElement
        const eduDeets = eduContainer.querySelector('.education-deets')
        const addEdu = eduContainer.querySelector('.add-edu')
        const form = eduContainer.querySelector('.education-form')

        form.style.display = 'none'
        eduDeets.style.display = 'block'
        addEdu.style.display = 'block'
    }

    return (
        <div className="education-form">
            <form>
                <label>
                    <h4>School</h4>
                </label>
                <input type="text" />
                <label>
                    <h4>Degree</h4>
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

function Education() {
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
            <div className="education-deets"></div>
            <div className="add-edu">
                <button onClick={showForm}>+ Education</button>
            </div>
            <EducationForm />
        </div>
    )
}

function PersonalDeets() {
    return (
        <form className="personal-deets">
            <label>
                <h1>Personal Details</h1>
            </label>
            <label>
                <h4>Full name</h4>
            </label>
            <input type="text" />
            <label>
                <h4>Email</h4>
            </label>
            <input type="email" />
            <label>
                <h4>Phone number</h4>
            </label>
            <input type="number" name="" id="" />
            <label>
                <h4>Address</h4>
            </label>
            <input type="text" />
        </form>
    )
}

function InfoForm() {
    return (
        <div>
            <PersonalDeets />
            <Education />
            <Experience />
        </div>
    )
}

function MainGrid() {
    return (
        <div className="main-grid">
            <InfoForm />
        </div>
    )
}

function App() {
    return <MainGrid />
}

export default App
