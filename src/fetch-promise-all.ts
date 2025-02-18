const url1 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
const url2 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found";
const url3 = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const fetchPromise_1 = fetch(url1);
const fetchPromise_2 = fetch(url2);
const fetchPromise_3 = fetch(url3);
  
  Promise.all([fetchPromise_1, fetchPromise_2, fetchPromise_3])
    .then((responses: Response[]) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });