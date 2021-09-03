export function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return i;
        }
    }
    return -1
}

export function processLanguagesArr(data) {
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
    return languages;
}