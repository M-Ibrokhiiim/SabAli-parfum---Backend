export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    capacity: string | number;
    description: string;
    image: string[];
    starred?: boolean;
}
export declare class ParfumesService {
    private readonly dbDir;
    private readonly dbFile;
    private ensureDbExists;
    private readDb;
    getMenParfumes(): Product[];
    getWomenParfumes(): Product[];
    getMenTrendParfumes(): Product[];
    getWomenTrendParfumes(): Product[];
}
