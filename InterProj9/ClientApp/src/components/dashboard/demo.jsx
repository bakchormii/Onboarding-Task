import React, { useState,useEffect } from 'react'
import { Button, Header, Image, Modal,Form,Select } from 'semantic-ui-react'
import axios from 'axios';

function EditStore({openingModal}) {
  const [open, setOpen] = React.useState(true);
  // const{openCreateModal,fetchStore}= props;

  return (
    <Modal
      // onClose={() => setOpen(false)}
      // onOpen={() => setOpen(true)}
      open={true}
      // trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openingModal(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => openingModal(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}
  
  export default EditStore