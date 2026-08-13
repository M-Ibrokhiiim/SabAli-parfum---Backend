export declare class LoginDto {
    username: string;
    password: string;
}
export declare class CreateProductDto {
    image?: string | string[];
    name: string;
    brand: string;
    price: number;
    capacity: string | number;
    category: 'mens' | 'womens';
    description: string;
    starred?: boolean;
}
