// A type of the JSON data returned by the Products API
interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

// Call to fetch() returns a promise
const fetchPromise4 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

/**
 * The promise is resolved when the response is received
 * The json from the response is retrieved asynchronously
 * Once the json is received, the promise is resolved
 * The resolved promise is handled by logging the product names
 * This is an illustration of refactoring callback hell by chaining promises
 */
  fetchPromise4
    .then((response: Response) => response.json() as Promise<Product[]>)
    .then((products: Product[]) => {
        products.forEach((product: Product) => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  