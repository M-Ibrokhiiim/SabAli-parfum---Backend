import { LoginDto, CreateProductDto } from './dto/create-admin-action.dto';
import { UpdateProductDto } from './dto/update-admin-action.dto';
export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    description: string;
    image: string;
    starred: boolean;
}
export declare class UploadedFileDto {
    originalname: string;
    buffer: Buffer;
}
export declare class AdminActionsService {
    private readonly dbDir;
    private readonly dbFile;
    private readonly storageDir;
    constructor();
    private ensureDbExists;
    private ensureStorageExists;
    private readDb;
    private writeDb;
    private normalizeCategory;
    private saveFile;
    private deleteFile;
    login(loginDto: LoginDto): {
        success: boolean;
        message: string;
    };
    uploadProduct(createProductDto: CreateProductDto, file?: UploadedFileDto): Product;
    updateProduct(category: string, id: string, updateProductDto: UpdateProductDto, file?: UploadedFileDto): Product;
    deleteProduct(category: string, id: string): {
        success: boolean;
        message: string;
    };
}
