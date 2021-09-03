import React from 'react'
import MUIDataTable from "mui-datatables";
import { Avatar } from '@material-ui/core';




export default function CountryTable(props) {
    const columns = [
        {
            name: "Name",
            options: {
                filter: true,
                sort: true,
            }
        }, 
        {
           name : "Region",
           options: {
                filter: false,
                sort: false
            }
        }, 
        {
            name: 'Area',
            options: {
              filter: false,
              sort : true
            },
        }, 
        {
            name: 'Population',
            options: {
              filter: false,
              sort : true
            },
        }, 
    ];
    
    
    const options = {
      filterType: 'textField',
      download : false,
      print : false,
      resizableColumns : true,
      rowsPerPageOptions : [5,10,20,100],
      elevation : 13,
      selectableRowsHideCheckboxes : true,
      rowsPerPage : 5
      
    };

    return(
        <MUIDataTable 
        title={"Country Table"} 
        data={
            props.data?.map((item,index) => {
                return {
                    "Name" : item.name,
                    "Region" :item.region ? item.region : "Not Available",
                    "Area" :item.area ? (Math.round(item.area*0.38610)) : "Not Available",
                    "Population" :item.population ? ((item.population/1000000).toFixed(1)) : "Not Available",
                }

        })}
        columns={columns} 
        options={options} 
        />
    )
}
