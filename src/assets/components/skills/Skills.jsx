import "./skills.css"
import Skill from "../skill/Skill";
const Skills = () => {
    return (<>
        <h3 id="skills">SKILLS</h3>
        <div className='skills'>
            <Skill
                title={"HTML"} />
            <Skill
                title={"git"}
            />
            <Skill
                title={"CSS & SCSS"}
            />
            <Skill
                title={"java script"}
            />
            <Skill
                title={"REACT"}
            />
            <Skill
                title={"UX - UI"}
            />
        </div>

    </>);
}

export default Skills;