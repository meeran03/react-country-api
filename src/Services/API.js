export function getData() {
    return fetch('https://restcountries.eu/rest/v2/all')
    .then(async res => {
        return (await res.json());
    })
    .catch(e => {
        throw e;
    })
}