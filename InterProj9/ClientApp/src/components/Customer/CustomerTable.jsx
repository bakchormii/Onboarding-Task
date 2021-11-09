import React from 'react'
import {Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';
import axios from "axios";
import EditCustomer from './EditCustomers';

const CustomerTable=(props) =>{
  const{customer,refresh}=props;

const deleteCustomer= (id)=> {
axios.delete("Customers/DeleteCustomer/"+id)
.then(res=>{
refresh();
})
}

// const EditCustomer= (id,customer)=> {
//   axios.put("Customers/PutCustomer/"+id+customer)
//   .then(res=>{
//   refresh();
//   })
//   }
    return(
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
        {customer.map((s)=>{//can include logic here..if esle statement
        return(
          
                  <Table.Row key={s.id}>
                  <Table.Cell>{s.name}</Table.Cell>
                  <Table.Cell>{s.address}</Table.Cell>
                  <Table.Cell><Button color="blue" onClick={()=>EditCustomer(s.id)}>Edit</Button></Table.Cell>
                  <Table.Cell><Button color="blue" onClick={()=> deleteCustomer(s.id)}>Delete</Button></Table.Cell>
                  {/* delete function which links to main backend in Visual Studio Controller */}
                </Table.Row>

        );
        })}
    </Table.Body>
  </Table>
)}

export default CustomerTable