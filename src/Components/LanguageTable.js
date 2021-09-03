import React from 'react'
import MUIDataTable from "mui-datatables";
import { tableOptions } from '../utils/tableOptions';
import { processLanguagesArr } from '../utils/tableFunctions';




export default function LanguageTable(props) {

    const [languages, setLanguages] = React.useState([]);

    let {data} = props;

    React.useEffect(() => {
        setLanguages(processLanguagesArr(data))
    },[])

    return(
        <MUIDataTable 
        title={"Languages Table"} 
        data={
            languages?.map((item,index) => {
                return {
                    "Language" : item.name,
                    "Countries" :item.countries.map((item) => `${item}, `),
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
        name: "Language",
        options: {
            filter: true,
            sort: true,
        }
    }, 
    {
       name : "Countries",
       options: {
            filter: true,
            sort: true
        }
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
