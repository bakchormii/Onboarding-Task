import React, { useState,useEffect } from 'react'
import { Button, Header, Image, Modal,Form,Select } from 'semantic-ui-react'
import axios from 'axios';

function EditProduct(props) {
//   const [open, setOpen] = React.useState(false)
  const {open,openCreateModal,fetchProduct} = props;

  const [name,setName]= useState("");
  const [address,setAddress]= useState("");

  useEffect(() => {
      console.log(name)
      return () => {
          //runs on unmount
      }
  }, [name]);
  
  useEffect(() => {
    console.log(address)
    return () => {
        //runs on unmount
    }
}, [address]);

  const editProduct =(id)=>{
      axios.put("/Products/PutProduct/"+id,{
          name:name,
          address:address
      })
      .then(res=>{
          openCreateModal(false);
          setName("");
          setAddress("");
          fetchProduct();
      })
      .catch(err=> {
          alert(err);
      })
  }

  return (
    <Modal open={open}>
      <Modal.Header>Create Product</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='name' onChange={(e)=>setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Price</label>
      <input placeholder='address'onChange={(e)=>setAddress(e.target.value)} />
    </Form.Field>
    {/* <Form.Field>
    <label>ID</label>
    <Select placeholder='Select your country' options={countryOptions} />
    </Form.Field> */}
  </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={()=>openCreateModal(false)}>Cancel</Button>
        <Button color='green' onClick={editProduct}>Edit</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EditProduct