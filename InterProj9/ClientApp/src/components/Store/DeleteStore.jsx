import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Button, Header, Image, Form, Modal } from 'semantic-ui-react'

const DeleteStore=({deleteModal}) => {
  const [open, openCreateModal,fetchStore,refresh] = React.useState(true);
// function DeleteStore(props) {
//   const [open, setOpen,refresh] = props;

  const deletestore= (id)=> {
    axios.delete("Stores/DeleteStore/"+id)
    .then(res=>{
    refresh();
    })
    }
  return (
    <Modal
      // onClose={() => setOpen(false)}
      // onOpen={() => setOpen(false)}
      open={open}
    >
      <Modal.Header>DeleteStore</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Are you sure?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openCreateModal (false)}>
          Cancel
        </Button>
        <Button
          content="delete"
          labelPosition='right'
          icon='remove'
          onClick={()=> deletestore(true)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteStore
