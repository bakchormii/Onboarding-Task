import React, { Component, Fragment,useState } from "react";
import { Button, Table,Modal } from "semantic-ui-react";
import axios from "axios";
import EditProduct from "./EditProduct";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";

const ProductTable = (props) => {
  const { product, refresh } = props;

  const deleteProduct = (id) => {
    axios
      .delete("Products/DeleteProduct/" + id)
      .then((res) => {
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  // const openCreateModal = (id) => {
  //   EditProduct(id)
  //   console.log(id)
  // };
  // const openCreateModal =()=>{
  //   EditProduct(true)
  // }
  // const fetchProduct = () => {
  //   axios
  //     .get("/Products/GetProduct")
  //     .then(({ data }) => {
  //       console.log(data);
  //       this.setState({
  //         product: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  
  return (
    <Fragment>
        {/* For the EditProduct component:
        const { open, openCreateModal, fetchProduct } = props; */}
      {/* <EditProduct
        open={open}
        openCreateModal={this.openCreateModal}
        fetchProduct={this.fetchProduct}
      /> */}
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
          {[product.map((s) => {
            return (
              <Table.Row key={s.id}>
                <Table.Cell>{s.name}</Table.Cell>
                <Table.Cell>{s.address}</Table.Cell>
                <Table.Cell>
                <Button color="green" onClick={() => EditProduct(s.id)}> Edit </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => deleteProduct(s.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>    
            );
          })]}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default ProductTable;
