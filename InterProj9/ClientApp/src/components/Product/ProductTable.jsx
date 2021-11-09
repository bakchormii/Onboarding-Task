import React,{Component,Fragment} from 'react'
import { Button, Table, TableCell } from 'semantic-ui-react'
import axios from 'axios';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';

const ProductTable = (props) => {
    const{product,refresh,open} = props;
    
    // const deleteProduct = (id)=> {
    //     axios.delete("Products/DeleteProduct/"+id)
    //     .then((res)=>{
    //         refresh();
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    // };
    
        const fetchProduct =()=> {
            axios.get("/Products/GetProduct")
            .then(({data})=>{
                console.log(data);
                this.setState({
                    product:data,
                });
            })
            .catch((err)=>{
                console.log(err);
            });
        };
        
        const openCreateModal = (value)=>{
            this.setState({
                open:value,
            })
        }
    return(
        
        <Fragment>    
        {/* For the EditProduct component:
        const { open, openCreateModal, fetchProduct } = props; */}
        
      <EditProduct
        open={open}
        openCreateModal={this.openCreateModal}
        fetchProduct={this.fetchProduct}
      />
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {product.map((s)=>{
            return(
            <Table.Row key={s.id}>
            <Table.Cell>{s.name}</Table.Cell>
            <Table.Cell>{s.address}</Table.Cell>
            {/* <Table.Cell><Button color="red" onClick={()=>this.openCreateModal(true)}>Delete</Button>
            <DeleteProduct open={open} openCreateModal={this.openCreateModal(s.id)} /></Table.Cell> */}
            <TableCell><Button color="green" onClick={()=>openCreateModal(s.id)}>Edit</Button>
            <DeleteProduct open={open} openCreateModal={openCreateModal(s.id)} fetchProduct={fetchProduct}/>
            </TableCell>
            
            
            </Table.Row>
        );
        })}
    </Table.Body>
  </Table>
  </Fragment>
)};

export default ProductTable