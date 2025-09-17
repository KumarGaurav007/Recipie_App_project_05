export default function ImproveSkills() {
    const list = [
        "Learn new recipies",
        "Experiment with food",
        "Write your own recipie",
        "Get cooking tips",
        "get ranked"
    ]
    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve your culinary skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">Sign up</button>
            </div>

        </div>
    )
}