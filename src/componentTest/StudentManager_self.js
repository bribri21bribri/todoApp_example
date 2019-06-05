import React, { Component } from 'react'
import {Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl,
  Table,
  ButtonGroup,
  Modal,
  Form
} from 'react-bootstrap'
import { FaPen, FaTrashAlt, FaPlus } from 'react-icons/fa'
import StudentModalSelf from './StudentModal_self'
import {data} from '../data/data'
 class StudentManager_self extends Component {
   constructor(){
     super()
     this.state={
        show:false,
        studentData:[],
        disableIdField:false,
        id:0,
        name:'',
        birth:0,
        searchText:''
     }
   }

   componentDidMount(){
     this.setState({studentData:data})
   }

   handleShow=()=>{
     this.setState({show:true})
   }
   handleClose=()=>{
    this.setState({show:false})
  }

  render() {
    return (
      <>
      <StudentModalSelf show={this.state.show} handleClose={this.handleClose} />
      <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>學生管理資料庫</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonToolbar>
                <ButtonGroup className="mr-2">
                <Button variant="primary" size="sm" onClick={this.handleShow}>
                  <FaPlus />Insert
                </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <FormControl placeholder="type name form searching" />
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
          <Col>
            <Table striped bordered hover>
               <thead>
                 <tr>
                   <th>學號</th>
                   <th>名</th>
                   <th>生日</th>
                   <th>動作</th>
                 </tr>
               </thead>
               <tbody>
                {data.map(item=>(
                  <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.birth}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={this.handleShow}>
                      <FaPen />Edit
                    </Button>
                    <Button variant="danger" size="sm" >
                      <FaTrashAlt />Delete
                    </Button>
                  </td>
                  </tr>
                ))}
               </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}
export default StudentManager_self