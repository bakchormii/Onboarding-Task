import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Button, Header, Image, Form, Modal } from 'semantic-ui-react'

function CreateStore(props) {
  // const [open, setOpen] = React.useState(false)
const{open,openCreateModal,fetchStore}= props;
//to include all functions and structuring here under const{}=props

const [name, setName] = useState("");
const [address, setAddress] = useState("");

const createStore = ()=>{
  axios.post("Stores/PostStore", {
    Name: name,
    Address: address
  })
  .then(res=>{
    openCreateModal(false);
    setName("");
    setAddress("");
    fetchStore();
  })
  .catch(err=>{
    alert(err);
  })
}

useEffect(() => {
  console.log(name)
  //function runs on mount
  return () => {
    //function runs on unmount
  };
}, [name])

useEffect(() => {
  console.log(address)
  return () => {
  };
}, [address])

  return (
    <Modal
      // onClose={() => setOpen(false)}
      // onOpen={() => setOpen(true)}
      open={open}
      // trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Create Store</Modal.Header>
        <Modal.Content>
        <Modal.Description>
          <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
    </Form.Field>
  </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      {/* <Button color='black'> */}
        {/* <Button color='black' onClick={() => setOpen(false)}> */}
        <Button color='black' onClick={() => openCreateModal (false)}>Cancel</Button>
        <Button color="green" onClick={createStore}>Create</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CreateStore