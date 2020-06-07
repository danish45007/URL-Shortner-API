import API from './backend';

export const GetURl = (longUrl) => {
    return fetch(`${API}/shorten`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl })
      })
        .then(response => {
          return response.json();
        })
        .catch(err => console.log(err));
    };
    