import { API_URL } from "../Constants/API";

export function getData() {
    return fetch(API_URL)
    .then(async res => {
        return (await res.json());
    })
    .catch(e => {
        throw e;
    })
}