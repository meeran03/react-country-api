import React from 'react'
import MUIDataTable from "mui-datatables";
import { Avatar } from '@material-ui/core';
import { tableOptions } from '../utils/tableOptions';


function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return i;
        }
    }
    return -1
}

export default function LanguageTable(props) {

    const [languages, setLanguages] = React.useState([]);

    let {data} = props;
    React.useEffect(() => {
        let languages = [];
        for (var i in data) {
            let temp;
            for (var j in data[i].languages) {
                temp = search(data[i].languages[j].name,languages);
                if (temp === -1)  { 
                    languages.push({
                        name : data[i].languages[j].name,
                        countries : [data[i].name],
                        population : data[i].population
                    }) 
                }
                else {
                    languages[temp].countries.push(data[i].name);
                    languages[temp].population += data[i].population;
                }
            }
        }
        setLanguages(languages)
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
        options: {
          filter: false,
          sort : true
        },
    }, 
];
