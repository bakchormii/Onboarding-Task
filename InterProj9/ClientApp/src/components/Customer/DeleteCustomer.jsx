import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Button, Header, Image, Form, Modal } from 'semantic-ui-react'

function DeleteCustomer() {
  const [open, setOpen] = React.useState(false)

  

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(false)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>DeleteCustomer</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Are you sure?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="delete"
          labelPosition='right'
          icon='remove'
          onClick={() => setOpen(true)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteCustomer
