/* Interface para los productos */
export interface Product {
    id: number;
    name: string;
    address: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;
    qty: number;
}
