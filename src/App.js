import React from 'react'
import { render } from 'react-dom'
import Flipcard from '@kennethormandy/react-flipcard'
import { Button, Container, Row, Col, Media, Carousel } from 'react-bootstrap';
import 'holderjs';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      flipped: false,
      flipped2: false,
      flipped3: false,
      flipped4: false,
    }
  }

  render() {
    return (
      <div>
      <Container>
        <Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Geburtstagsgame&bg=373940"
              alt="Jasminibini"
            />
            <Carousel.Caption>
              <h3>Jasmini Bini</h3>
              <p>Du kennsch sicher no 1 / 2 oder 3</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Türli Wähle&bg=282c34"
              alt="Door"
            />

            <Carousel.Caption>
              <h3>Regle 1: Klick es türli</h3>
              <p>Wähl weise, ned hinder alle Türli versteckt sich öppis gueds ;)</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Surprise Surprise&bg=20232a"
              alt="Ueberraschig"
            />

            <Carousel.Caption>
              <h3>Nemm dis gschänk entgäge!</h3>
              <p>Und Los!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row><br></br></Row>
        </Row>
        <Row>
          <Col sm={3}>
            <Button variant="primary" onClick={e => this.setState({ flipped: !this.state.flipped })}>
              Türchen
            </Button>
          </Col>
          <Col sm={3}>
            <Button variant="primary" onClick={e => this.setState({ flipped2: !this.state.flipped2 })}>
              Türchen
            </Button>
          </Col>
          <Col sm={3}>
            <Button variant="primary" onClick={e => this.setState({ flipped3: !this.state.flipped3 })}>
              Türchen
            </Button>
          </Col>
          <Col sm={3}>
          <Button variant="primary" onClick={e => this.setState({ flipped4: !this.state.flipped4 })}>
            Türchen
          </Button>
        </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Flipcard type="horizontal" flipped={this.state.flipped}>
              <h1>#1</h1>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="/jasminigeburi/langlauf.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Langlauf</h5>
                  <p>
                    Jeha, en Langlauftag wird gsponsoret!
                  </p>
                </Media.Body>
              </Media>
            </Flipcard>
          </Col>
          <Col sm={3}>
            <Flipcard type="horizontal" flipped={this.state.flipped2}>
              <h1>#2</h1>
              <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="/jasminigeburi/massage.jpg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Massage</h5>
                <p>
                  Jeha, en stündigi Massage wartet uf dich!
                </p>
              </Media.Body>
            </Media>
            </Flipcard>
          </Col>
          <Col sm={3}>
            <Flipcard type="horizontal" flipped={this.state.flipped3}>
              <h1>#3</h1>
              <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="/jasminigeburi/zonk.gif"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Ui Nei!</h5>
                <p>
                  I jedem Gwünnspil gits leider en Zonk.
                </p>
              </Media.Body>
            </Media>
            </Flipcard>
          </Col>
          <Col sm={3}>
          <Flipcard type="horizontal" flipped={this.state.flipped4}>
            <h1>#4</h1>
            <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="/jasminigeburi/surf.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Surf</h5>
              <p>
                Let's go Surfing Baby!
                En Session wird gsponsoret före Wavepark en Luzern.
              </p>
            </Media.Body>
          </Media>
          </Flipcard>
        </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default App;
