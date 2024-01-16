import "./hero.css"

const Hero = () => {
    return (
        <>
            <div className="flexCollumnCenter">
                <h1>hi, I am <span>Stefan V. Airoaie</span></h1>
                <h4>A Junior Front End Developer</h4>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, labore.</p>
                <p style={{ maxWidth: '600px' }}><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis recusandae veritatis doloremque odio voluptates rem beatae quam magnam quisquam, excepturi deserunt corporis repellat? Error dolorem repudiandae dolores architecto corporis eos accusamus perferendis similique, animi rerum. Consequuntur eligendi vero voluptates est veniam! Aliquam accusantium cum minima nulla ut recusandae consectetur iure?</span></p>
                <button>RESUME</button>
            </div >
        </>
    );
}

export default Hero;