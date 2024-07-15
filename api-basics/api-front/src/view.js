import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { callDelete, callGet } from './service';
import { Button } from '@mui/base';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Views=()=>{

    const[myDocuments,setMyDocuments]=useState([])

    const makeFetch=async()=>{
        const t = await callGet()
        setMyDocuments(t.data)
        console.log(JSON.stringify(myDocuments))
    }

    useEffect(()=>{
        makeFetch()
    },[])

    const columns = [
        {
          field: 'trackId',
          headerName: 'Track ID',
          width: 200,
        },
        {
          field: 'receiverName',
          headerName: 'Receiver name',
          width: 200,
        },
        {
          field: 'itemName',
          headerName: 'Item Name',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 200,
        },
      ];
      const myRows = [
        {trackId:65456787,receiverName:'Razak Mohamed S',itemName:'walkaroo',status:'Transit'},
        {trackId:45678,receiverName:'Razak Mohamed S',itemName:'walkaroo',status:'Transit'},
        {trackId:87656789,receiverName:'Razak Mohamed S',itemName:'walkaroo',status:'Transit'},
        {trackId:45678,receiverName:'Razak Mohamed S',itemName:'walkaroo',status:'Transit'},
        {trackId:9876545678,receiverName:'Razak Mohamed S',itemName:'walkaroo',status:'Transit'},
    ]
    const[found,setFound]=useState({
        "_id":0
    })
    return(
        <>
            <div className='row justify-content-center align-items-center' style={{width:'100%'}}>
                <div className='col-lg-6 col-md-8 col-12 shadow-lg p-5' style={{height:'100vh'}}>
                    <DataGrid
                        onRowSelectionModelChange={
                            (one)=>{
                                var collected=myDocuments.filter((each)=>{
                                    return each._id==one
                                })
                                alert(JSON.stringify(collected[0]))
                                // setOpenRead(true)
                                setFound(collected[0])
                            }
                        }
                        initialState={{
                            pagination:{
                                paginationModel:{pageSize:2}
                            }
                        }}
                        columns={columns}
                        rows={myDocuments}
                        getRowId={(obj)=>obj._id}
                    />
                     {
                            (found._id!=0)?
                            <>
                                <div className="mt-2 row justify-content-around">
                                    <Button color="error" onClick={async()=>{
                                        // alert(JSON.stringify(found)+" to be deleted")
                                        const rec = await callDelete(found._id)
                                        alert(JSON.stringify(rec))
                                    }} className="col-3" variant="contained">
                                        <DeleteOutlineIcon/>
                                    </Button>
                                </div>
                            </>
                            :
                            <></>
                        }
                </div>
            </div>
        </>
    )
}