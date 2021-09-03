import React from 'react'
import MUIDataTable from "mui-datatables";
import { tableOptions } from '../utils/tableOptions';



export default function CountryTable(props) {
    
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
        options={tableOptions} 
        />
    )
}

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
        label : "Area (sq. miles)",
        options: {
          filter: false,
          sort : true
        },
    }, 
    {
        name: 'Population',
        label : "Population (millions)",
        options: {
          filter: false,
          sort : true
        },
    }, 
];
