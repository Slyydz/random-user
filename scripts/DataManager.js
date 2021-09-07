export const getUser = async () => {
    return fetch("https://randomuser.me/api/", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse.results[Math.floor(Math.random()*parsedResponse.results.length)];
    })
}