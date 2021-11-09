import axios from "axios";
import React,{Component} from "react";
import { Button } from 'semantic-ui-react';
import CustomerTable from "./CustomerTable";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import CreateCustomer from "./CreateCustomer";
import EditCustomer from "./EditCustomers";
// import { render } from "react-dom";

export default class CustomerHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            customer:null,
            open: false
        };
    }
    componentDidMount(){
        this.fetchCustomer();
    }
        fetchCustomer=()=>{
            axios
            .get("/Customers/GetCustomer") //getting information from backend
            .then(({data})=> {
                console.log(data);
                this.setState({
                    customer:data,
                });
            })
            .catch((err)=>{
                console.log(err);
            });
        };

        openCreateModal= (value)=>{
            this.setState({open:value,
            })
        };

        render() {
            const {customer,open} = this.state;
            if(customer){
            return (
            <div>
                {/* <h1>Customer</h1> */}
                <Button color="yellow" onClick={()=>this.openCreateModal(true)}>New Customer</Button>
                <CreateCustomer open ={open} openCreateModal={this.openCreateModal} fetchCustomer={this.fetchCustomer}/> 
                <CustomerTable customer={customer} refresh={this.fetchCustomer}/>
            </div>)
            }
            else{
                return <Loader/>;
            }
       }

    }
