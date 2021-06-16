export const endpoint =
  "https://tic-tac-toe-51436-default-rtdb.europe-west1.firebasedatabase.app/data.json";

export const postGameResult = (data) =>
  fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
