import { Product } from "./product";
export class Productservice {
public getProducts() {
console.log("Inside service ");
let products: Product[];
products = [
new Product(1, "TV", 15000),
new Product(2, "Laptop", 65000),
new Product(3, "Mobile", 25000)
]
return products;
}
}
