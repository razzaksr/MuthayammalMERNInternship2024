import React from "react";
import { useState,useEffect } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { callPost } from "./service";
export const Form =() => {

    const[logistics,setLogistics]=useState({
        "trackId":0,
        "receiverName":"",
        "receiverAddress":"",
        "receiverContact":0,
        "itemName":"",
        "itemPrice":0,
        "status":""
    })

    const collecting=(eve)=>{
        const{name,value}=eve.target
        setLogistics((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const publish = async()=>{
        //alert(JSON.stringify(logistics))
        const t = await callPost(logistics)
        alert(JSON.stringify(t.data))
    }

    return(
        <Container>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 rounded-2 shadow-lg bg-warning">
                    <p className="text-primary display-6 text-center">Add new Consignment</p>
                    <div className="row justify-content-around align-items-center mb-2">
                        <label className="col-4 text-primary ">Track ID</label>
                        <TextField 
                            className="col-4"
                            color="primary"
                            onChange={collecting}
                            name="trackId" 
                            value={logistics.trackId}
                            label="Track ID" 
                            variant="outlined" 
                        />
                    </div>
                    <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-12 col-md-4 mb-sm-2"
                            color="primary"
                            onChange={collecting}
                            value={logistics.receiverName}
                            name="receiverName" 
                            label="receiverName" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="col-12 col-md-4"
                            color="primary"
                            onChange={collecting}
                            value={logistics.receiverContact}
                            name="receiverContact" 
                            label="receiverContact" 
                            variant="outlined" 
                        />
                    </div>
                    <TextareaAutosize
                        className="col-12 form-control bg-warning mb-2"
                        color="primary"
                        onChange={collecting}
                        value={logistics.receiverAddress}
                        placeholder="receiverAddress"
                        name="receiverAddress"
                    />
                    <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-12 col-md-4 mb-sm-2"
                            color="primary"
                            onChange={collecting}
                            name="itemName" 
                            value={logistics.itemName}
                            label="itemName" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="col-12 col-md-4"
                            color="primary"
                            name="itemPrice"
                            onChange={collecting} 
                            value={logistics.itemPrice}
                            label="itemPrice" 
                            variant="outlined" 
                        />
                    </div>
                    <Select
                        className="form-select bg-warning text-primary"
                        name="status"
                        onChange={collecting}
                        label="Status"
                        value={logistics.status}
                        >
                        <MenuItem value="Transit">Transit</MenuItem>
                        <MenuItem value="Delivered">Delivered</MenuItem>
                        <MenuItem value="Return">Return</MenuItem>
                    </Select>
                    <div className="row justify-content-around mt-2 mb-2">
                        <Button onClick={publish} variant="outlined" className="col-2">
                            <AddShoppingCartIcon/>
                        </Button>
                        <Button variant="outlined" className="col-2">
                            <BackspaceIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )

}
