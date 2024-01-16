import "./projects.css"
import Cards from "../cards/Cards";
const Projects = () => {
    return (<>
        <h3 id="projects">Projects</h3>
        <div className='projects'>
            <Cards
                title={"1. Meu proiect"}
                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, pariatur. Veritatis voluptas doloribus nobis suscipit deleniti autem pariatur facilis dolores esse obcaecati consequatur aliquid nostrum dolorem consectetur, nemo, sed, dignissimos voluptatibus? Nobis maiores, ex unde quod autem commodi nisi neque."}
                tech={"HTML, CSS, SCSS, JAVA SCRIPT, REACT"}

            />
            <Cards
                title={"al doilea proiect"}
                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, pariatur. Veritatis voluptas doloribus nobis suscipit deleniti autem pariatur facilis dolores esse obcaecati consequatur aliquid nostrum dolorem consectetur, nemo, sed, dignissimos voluptatibus? Nobis maiores, ex unde quod autem commodi nisi neque."}
                tech={"HTML, JAVA SCRIPT, REACT"}
            />
            <Cards
                title={"al treilea website"}
                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, pariatur. Veritatis voluptas doloribus nobis suscipit deleniti autem pariatur facilis dolores esse obcaecati consequatur aliquid nostrum dolorem consectetur, nemo, sed, dignissimos voluptatibus? Nobis maiores, ex unde quod autem commodi nisi neque."}
                tech={"HTML, CSS, REACT"}
            />
        </div>


    </>);
}

export default Projects;

