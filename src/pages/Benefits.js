import React from 'react';
import { Card } from 'react-bootstrap';
import '../format.css';

export default function Benefits() {
    return (
        <div className="wrapper-page" >
            <div className="container">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src="cali-ev.jpeg" />
                    <Card.Body>
                        <Card.Text>
                            As we all know by now, electric vehicles (EVs) have integrated themselves in
                            our society. Leading the way into this new era is none other than California.
                            With only 10 percent of the nation's cars, California now accounts for over 40
                            percent of all zero-emissions cars in the country. Over the last decade, annual sales
                            of plug-in electric vehciles in California have increased drastically from only
                            7,000 in 2011 to more than a quarter of a million sold in 2021. Just as of earlier this
                            year, California has surpassed 1 million EV sales. This accounts for over 12 percent of
                            all light-duty vehicle sales last year. California Governor, Gavin Newsom, has advanced
                            bold investments and policies to move forward on the state's zero-emission vehicle (ZEV)
                            goals, including the California Blueprint's proposed $6.1 billion in additionalfunding
                            to create a $10 billion total ZEV package. This investment will help make ZEVs more
                            affordable and convenient for all Californians.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Another large contributor to the electric vehicle era is Norway. Having gone
                            under the radar for quite some time, Norway has made perhaps the greatest advancements
                            in switching to ZEVs. According to official published numbers in January 2022,
                            83.7 percent of all new cars sold across Norway were electric vehicles. This is well
                            up from 53 percent recorded for January 2021. You may be wondering how the Norweigan
                            government was able to get so many of their citizens to make the change to electric
                            vehicles. Well, the government actually doesn't tax EVs at all, and heavily taxes the
                            sales of new polluting cars. This gives the citizens a large incentive to make the change
                            to an EV when purchasing a new car. Personally, I believe that this is a crucial step
                            for any government to take in order to help make our planet more sustainable.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="norway-tesla.jpeg" />
                </Card>
                <br />
                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src="greenhouse-stats.jpg" />
                        <Card.Text>
                            Now, what makes electric vehicles more sustainable than cars with internal combustion
                            engines (ICE)? Well, the answer really comes down to the reduction in pollution, which
                            results in a smaller carbon footprint. EVs tend to pollute about 128 grams of carbon
                            dioxide (CO2) emissions per kilometer. This is less than half of the pollution from the
                            average ICE car which pollutes about 258 grams of CO2 emissions per kilometer. This is a
                            drastic difference when you take into account the fact that in the world, there are currently
                            about 1.446 billion vehicles, with approximately 19 percent of them being from the US.
                            Additionally, of all the cars in the world, there are some 16.5 million EVs, meaning that about
                            1.14% of all cars are electric. Of these 1.446 billion vehicles, roughly 1.2 billion of
                            them are operated on a daily basis, with about 70 million worldwide driving trips.
                            On average, each trip distance globally is 15 kilometers, which by the statistics from
                            the CO2 emissions would equate to about 4.61 trillion grams of CO2 emissions per day.
                            If we could have everyone make the switch to electric vehicles, our carbon emissions would
                            be reduced down immensly to just 2.3 trillion grams per day. This is still a high number,
                            but much lower than what we are currently producing with ICE cars.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Text>
                            António Guterres, the Secretary-General the United Nations, said
                            "Climate change is, quite simply, an existential threat for most life on the planet –
                            including, and specially, the life of humankind", in May 2018. But he's not alone. Many
                            important world organizations including: IPCC, NASA, WWF, and CDP have all made similar
                            statements. This is because we have a crucial problem that is affecting our planet, and
                            we need to solve it urgently. One of the greatest contributors to climate change is the
                            pollution from our vehicles. By taking the step of moving towards electric vehicles, we
                            would be making a immense impact in reducing climate change, and becoming sustainable.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="climate-change.jpeg" />
                </Card>
            </div>
        </div >
    );
}