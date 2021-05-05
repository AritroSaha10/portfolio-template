import React from 'react';

const cards = [
    {
        name: "My Cool Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet mi ut felis pellentesque iaculis et ac neque. Nulla posuere diam quis malesuada auctor. Duis pretium tortor ac metus congue, id iaculis est suscipit. Sed ornare dolor leo. "
    },
]
function About() {
    return (
        <section className="works">
            <div className="title">
                <h2>Works</h2>
            </div>

            <div className="cards">
                {cards.map(({ name, description }) => (
                    <a href="#">
                        <div className="card">
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default About;