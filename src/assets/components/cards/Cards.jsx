import "./cards.css"
const Cards = (props) => {
    return (<>
        <div className="cards">
            <h4>Project:<br />{props.title}</h4>
            <p>Description:<br />{props.desc}</p>
            <h6>Technology:<br />{props.tech}</h6>
        </div>
    </>);
}

export default Cards;