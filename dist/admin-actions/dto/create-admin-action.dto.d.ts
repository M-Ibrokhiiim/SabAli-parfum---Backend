export declare class LoginDto {
    username: string;
    password: string;
}
export declare class CreateProductDto {
    image: string;
    name: string;
    brand: string;
    price: number;
    capacity: number;
    category: 'mens' | 'womens';
    description: string;
    starred?: boolean;
}
