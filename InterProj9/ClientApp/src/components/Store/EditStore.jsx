import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Button, Header, Image, Form, Modal } from 'semantic-ui-react'

const EditStore=({openingModal}) => {
  const [open, openCreateModal] = React.useState(true);

//const [id,setID] = useState(openingModal.id);
const [name, setName] = useState(openingModal.Name);
const [address, setAddress] = useState(openingModal.Address);

useEffect(()=>{
  setName(name)
  setAddress(address)
},[name,address]
)

const fetchStore = (id)=>{
  axios.get("Stores/GetStore",id, {
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

const editStore = ()=>{
  axios.put(("Stores/PutStore"), {
    
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
// useEffect(() => {
//   console.log(name)
//   //function runs on mount
//   return () => {
//     //function runs on unmount
//   };
// }, [name])

// useEffect(() => {
//   console.log(address)
//   return () => {
//   };
// }, [address])

  return (
    <Modal
      // onClose={() => setOpen(false)}
      // onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Create Store</Modal.Header>
        <Modal.Content>
        <Modal.Description>
          <Form>
    <Form.Field>
      <label>Name</label>
      <input value= {name} onChange={(e) => setName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input value={address} onChange={(e) => setAddress(e.target.value)}/>
    </Form.Field>
  </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => openingModal (false)}>Cancel</Button>
        <Button color="green" onClick={editStore}>Edit</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EditStore