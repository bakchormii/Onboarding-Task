import { data, extend } from "jquery";
import React,{Component} from "react";
import { Divider } from "semantic-ui-react";
import axios from "axios";
import { Button } from 'semantic-ui-react';
import ProductTable from "./ProductTable"
import CreateProduct from "./CreateProduct";

export default class ProductHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            product:null,
            open: false
        };
    }

    componentDidMount(){
        this.fetchProduct();
    }

    fetchProduct =()=> {
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

    openCreateModal = (value)=>{
        this.setState({
            open:value,
        })
    }

    render(){
        const {product,open}=this.state;
        if(product){
        return(
        <div>
            <Button color='teal' onClick={()=>this.openCreateModal(true)}>New Product</Button>
            <CreateProduct open={open} openCreateModal={this.openCreateModal} fetchProduct={this.fetchProduct}/>
            <ProductTable product={product} refresh={this.fetchProduct}/>
        </div>)
        ;
        } else{
            return <div> Loading...</div>
        }
    }
}
    