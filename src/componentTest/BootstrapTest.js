import React, { Component } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {FaReact, FaBeer,FaAmazon} from 'react-icons/fa'
import { IconContext } from 'react-icons';

const IconThree = props =>(
  <>
    <Button variant="primary">
      <FaAmazon />React
    </Button>
  </>
)

const IconTwo = props =>(
  <>
    <Button variant="primary">
      <FaBeer />React
    </Button>
    <IconThree/>
  </>
)

class BootstrapTest extends Component {
  render() {
    return (
      <>
      <IconContext.Provider value={{color:'pink', className:'global-class-name'}}>
        <Container>
          <Row>
            <Col md="auto">
              <h1>Test</h1>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">secondary</Button>
              <Button variant="success">success</Button>
              <Button variant="primary">
                <FaReact />React
              </Button>
              <IconTwo />
            </Col>
          </Row>
        </Container>
        </IconContext.Provider>
      </>
    )
  }
}
export default BootstrapTest