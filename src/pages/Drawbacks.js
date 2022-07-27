import React from 'react';
import { Card } from 'react-bootstrap';
import '../format.css';

export default function Drawbacks() {
    return (
        <div className="wrapper-page" >
            <div className="container">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src="coal-plant.jpeg" />
                    <Card.Body>
                        <Card.Text>
                            One of the many downsides to electric vehicles, and perhaps the biggest counter argument
                            against making the switch to an EV is the actual charging of the cars. Have you ever thought
                            about where the electricity to charge these vehicles comes from? Well, most of the electricity
                            is created by burning fossil fuels, which is just as harmful as internal combustion engine (ICE)
                            cars. However, it really depends on where you live. Many countries in the world get the majority
                            of their electricity from the burning of fossil fuels. For example, in the US, fossil fuels account
                            for approximately 62.7 percent of the country's energy production in 2017. But other countries
                            get most of their energy in natural ways. For example, Iceland runs entirely on hydro, geothermal,
                            and solar energy.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src="lithium-farm.jpeg" />
                    <Card.Body>
                        <Card.Text>
                            Another downside to electric vehicles is the production of the cars. Producing these
                            cars is much more costly than the production of a normal internal combustion engine (ICE) car.
                            But how much more does it harm the environment? And do the benefits of EVs outweigh the drawbacks?
                            The main reason that the production of EVs is harmful to the environment is because of the
                            manufacturing of the battery in the car. Lithium-ion batteries large enough to power a car are
                            environmentally harmful to produce. This is becuase they are made of rare earch elements (REE)
                            like lithium, nickel, cobalt, or graphite. The ways in which these elements are mined will impact
                            the total emissions of electric vehicles. Most mining activies have very polluting processes, and
                            on average, producing 1 ton of REE comes at the cost of 75 tons of acid waste, which isn't always
                            handled/disposed correctly. In addition to this, 1 ton of radioactive residue is created.
                            <br />
                            <br />
                            In spite of the negative impacts of producing these large car batteries, forecasts show that the
                            electricity generation is improving and there are more renewable resources entering the grid, which
                            would help decrease the ecological footprint of buildling up these batteries.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Yet another problem with electric vehicles is considering how we dispose of these
                            large lithium-ion batteries when they are no longer useable. According to a study from the
                            <i> international council of clean transportation (ICCT)</i>, 99 percent of the lead-acid
                            batteries (the ones in ICE cars) are recycled in the US. However, this is not the case with
                            lithium-ion batteries. These batteries could be recycled, but there isn't an incentive to
                            do so, because of how costly the process is. The cost of extracting the lithium from these
                            batteries outweighs the value of the lithium extracted, making it a process that no one wants
                            to do. For instance, in the EU market in 2011, only 5 percent of lithium was being collected
                            and the rest was either incinerated or dumped into landfills.
                            <br />
                            <br />
                            But with more and more electric vehicles being produced and their evergrowing popularity
                            along with technological advancements, there will likely be more efficient ways to recycle
                            lithium-ion batteries, or perhaps even create the possibility of cars with a more environmentally
                            friendly source of energy.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="lithium-recycle.png" />
                </Card>
            </div>
        </div >
    );
}