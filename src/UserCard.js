import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.email}</Card.Text>
      <Card.Text>{user.phone}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default UserCard