import { AdminActionsService, UploadedFileDto } from './admin-actions.service';
import { CreateProductDto, LoginDto } from './dto/create-admin-action.dto';
import { UpdateProductDto } from './dto/update-admin-action.dto';
export declare class AdminActionsController {
    private readonly adminActionsService;
    constructor(adminActionsService: AdminActionsService);
    login(loginDto: LoginDto): {
        success: boolean;
        message: string;
    };
    uploadProduct(body: CreateProductDto, file?: UploadedFileDto): import("./admin-actions.service").Product;
    updateProduct(category: string, id: string, updatableProduct: UpdateProductDto, file?: UploadedFileDto): import("./admin-actions.service").Product;
    deleteProduct(category: string, id: string): {
        success: boolean;
        message: string;
    };
}
