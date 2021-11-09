import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Button, Header, Image, Form, Modal } from 'semantic-ui-react'

function CreateCustomer(props) {
  // const [open, setOpen] = React.useState(false)
const{open,openCreateModal,fetchCustomer}= props;
//to include all functions and structuring here under const{}=props

const [name, setName] = useState("");
const [address, setAddress] = useState("");

const createCustomer = ()=>{
  axios.post("Customers/PostCustomer", {
    Name: name,
    Address: address
  })
  .then(res=>{
    openCreateModal(false);
    setName("");
    setAddress("");
    fetchCustomer();
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
      <Modal.Header>Create Customer</Modal.Header>
      {/* <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped /> */}
        <Modal.Content>
        <Modal.Description>
          {/* <Header>Create new customer</Header> */}
          <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
    {/* <Button type='submit'>Submit</Button> */}
  </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      {/* <Button color='black'> */}
        {/* <Button color='black' onClick={() => setOpen(false)}> */}
        <Button color='black' onClick={() => openCreateModal (false)}>Cancel</Button>
        <Button color="green" onClick={createCustomer}>Create</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CreateCustomer