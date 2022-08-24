export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Product 1 is the first product',
        quantity: 1
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Product 2 is the second product',
        quantity: 1
    },
    {
        id: 3,
        name: 'Product 3',
        price: 150,
        description: 'Product 1 is the third product',
        quantity: 1
    },
    {
        id: 4,
        name: 'Product 4',
        price: 250,
        description: 'Product 1 is the fou product',
        quantity: 1
    }
];