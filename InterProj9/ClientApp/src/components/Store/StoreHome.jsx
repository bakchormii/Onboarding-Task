import axios from "axios";
import React,{Component} from "react";
import { Button } from 'semantic-ui-react';
import StoreTable from "./StoreTable";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import CreateStore from "./CreateStore";
import EditStore from "./EditStore";
import DeleteStore from "./DeleteStore";
// import { render } from "react-dom";
//class component
export default class StoreHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            store1:null,
            open: false
        };
    }
    componentDidMount(){
        this.fetchStore();
    }
        fetchStore=()=>{
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

        openCreateModal= (value)=>{
            this.setState({open:value,
            })
        };

        render() {
            const {store1,open} = this.state;
            if(store1){
            return (
            <div>
                <Button color="black" onClick={()=>this.openCreateModal(true)}>New Store</Button>
                <CreateStore open ={open} openCreateModal={this.openCreateModal} fetchStore={this.fetchStore}/>
                <StoreTable store2={store1} refresh={this.fetchStore}/>
                
            </div>)
            }
            else{
                return <Loader/>;
            }
       }

    }
