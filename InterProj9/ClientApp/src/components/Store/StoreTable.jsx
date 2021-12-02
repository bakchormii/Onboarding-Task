import React,{useState} from 'react'
import {Modal, Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';
import axios from "axios";
import EditStore from './EditStore';
import CreateStore from './CreateStore';
import DeleteStore from './DeleteStore';
//functional component

const StoreTable=(store) =>{
  const{store2,refresh}=store;
  const [openModal1,setEditModal]=useState(false);
  const [openModal2,setDelModal]=useState(false);

  // const setOpenModal = (id) => {
  //     console.log(id)
  //   };

  const deletestore = (id) => {
    axios
      .delete("Stores/DeleteStore/" + id)
      .then((res) => {
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchStore=()=>{
    axios
    .get("/Stores/GetStore") //getting information from backend
    .then(({data})=> {
        console.log(data);
        this.setState({
            store1:data,
        });
    })
    .catch((err)=>{
        console.log(err);
    });
};

// const EditCustomer= (id,customer)=> {
//   axios.put("Customers/PutCustomer/"+id+customer)
//   .then(res=>{
//   refresh();
//   })
//   }
    return(<div>
      {openModal1&&<EditStore openingModal={setEditModal}/>}
      {openModal2&&<DeleteStore deleteModal={setDelModal}/>}
{/* <EditStore open={openModal} onClose={() => setOpenModal(false)}>
        Modal
      </EditStore> */}
      <p></p>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {[store2.map((s)=>{//can include logic here..if esle statement
        return(
                  <Table.Row key={s.id}>
                  <Table.Cell>{s.name}</Table.Cell>
                  <Table.Cell>{s.address}</Table.Cell>
                  <Table.Cell><Button color="blue" onClick={()=> setEditModal(s.id)}>Edit</Button></Table.Cell>
                  <Table.Cell><Button color="blue" onClick={()=> setDelModal(s.id)}>Delete</Button></Table.Cell>
                  {/* delete function which links to main backend in Visual Studio Controller */}
                  </Table.Row>
        );
        })]}
    </Table.Body>
  </Table>
  
  <Modal>
    <Modal.Header>
      
    </Modal.Header>
  </Modal>
  </div>
)}

export default StoreTable