import React from 'react';
import { Card } from 'react-bootstrap';
import '../format.css'

export default function Home() {
    return (
        <div className="wrapper" >
            <div className="container">
                <Card style={{ width: '40rem' }}>
                    <Card.Header>Project Description</Card.Header>
                    <Card.Body>
                        <Card.Title>Electric Vehicle Sustainability</Card.Title>
                        <Card.Text>
                            I created this website as part of my greenlight for girls (g4g)
                            project in collaboration with my internship program at CDK Global.
                            My goal is to help teach sustainability in the efforts of creating a more
                            sustainable planet in the future that will house many generations to come.
                            <br />
                            <br />
                            Please take a moment to look around this website to gain some insight on
                            why we should switch to electric vehicles. Hopefully you will learn something
                            new, and maybe even change your perspective and understanding of sustainability.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="g4g.png" />
                </Card>
            </div>
        </div >
    );
}