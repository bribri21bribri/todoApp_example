import { FaReact } from 'react-icons/fa'
import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

const IconButton = props => (
  <>
    <Button variant="primary">
      <FaReact /> React v16
    </Button>
  </>
)
export default IconButton
