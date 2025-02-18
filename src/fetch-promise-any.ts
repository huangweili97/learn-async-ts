const url11 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
const url21 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found";
const url31 = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const fetchPromise11 = fetch(url11);
const fetchPromise21 = fetch(url21);
const fetchPromise31 = fetch(url31);
  
Promise.any([fetchPromise11, fetchPromise21, fetchPromise31])
  .then((response: Response) => {
      console.log(`${response.url}: ${response.status}`);
  })
  .catch((error: any) => {
      console.error(`Failed to fetch: ${error}`);
  });
  