"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminActionsService = exports.UploadedFileDto = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class UploadedFileDto {
    originalname;
    buffer;
}
exports.UploadedFileDto = UploadedFileDto;
let AdminActionsService = class AdminActionsService {
    dbDir = path.join(process.cwd(), 'database');
    dbFile = path.join(this.dbDir, 'db.json');
    storageDir = path.join(process.cwd(), 'astorage');
    constructor() {
        this.ensureDbExists();
        this.ensureStorageExists();
    }
    ensureDbExists() {
        if (!fs.existsSync(this.dbDir)) {
            fs.mkdirSync(this.dbDir, { recursive: true });
        }
        if (!fs.existsSync(this.dbFile)) {
            const defaultData = {
                mens: [],
                womens: [],
            };
            fs.writeFileSync(this.dbFile, JSON.stringify(defaultData, null, 2), 'utf-8');
        }
    }
    ensureStorageExists() {
        if (!fs.existsSync(this.storageDir)) {
            fs.mkdirSync(this.storageDir, { recursive: true });
        }
    }
    readDb() {
        this.ensureDbExists();
        const data = fs.readFileSync(this.dbFile, 'utf-8');
        return JSON.parse(data);
    }
    writeDb(data) {
        this.ensureDbExists();
        fs.writeFileSync(this.dbFile, JSON.stringify(data, null, 2), 'utf-8');
    }
    normalizeCategory(category) {
        const normalized = category.toLowerCase().trim();
        if (normalized === 'mens' || normalized === 'men' || normalized === 'men-parfumes') {
            return 'mens';
        }
        if (normalized === 'womens' || normalized === 'women' || normalized === 'women-parfumes') {
            return 'womens';
        }
        throw new common_1.BadRequestException(`Invalid category: "${category}". Must be "mens" or "womens"`);
    }
    saveFile(file) {
        this.ensureStorageExists();
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const ext = path.extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        const filePath = path.join(this.storageDir, filename);
        fs.writeFileSync(filePath, file.buffer);
        return `astorage/${filename}`;
    }
    deleteFile(relativeFilePath) {
        if (!relativeFilePath)
            return;
        const filename = relativeFilePath.replace(/^astorage\//, '');
        const filePath = path.join(this.storageDir, filename);
        if (fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath);
            }
            catch (err) {
                console.error(`Failed to delete file: ${filePath}`, err);
            }
        }
    }
    login(loginDto) {
        if (loginDto.username === 'Muhammadali' && loginDto.password === '12345678') {
            return { success: true, message: 'Login successful' };
        }
        throw new common_1.UnauthorizedException('Invalid admin credentials');
    }
    uploadProduct(createProductDto, file) {
        const { category, name, brand, price, description, image, starred } = createProductDto;
        const resolvedCategory = this.normalizeCategory(category);
        const parsedPrice = typeof price === 'string' ? Number(price) : price;
        const parsedStarred = starred !== undefined
            ? (typeof starred === 'string' ? starred === 'true' : !!starred)
            : false;
        let savedImagePath = image || '';
        if (file) {
            savedImagePath = this.saveFile(file);
        }
        const db = this.readDb();
        const newProduct = {
            id: `${resolvedCategory.substring(0, 1)}${Date.now()}`,
            name,
            brand,
            price: parsedPrice,
            description,
            image: savedImagePath,
            starred: parsedStarred
        };
        db[resolvedCategory].push(newProduct);
        this.writeDb(db);
        return newProduct;
    }
    updateProduct(category, id, updateProductDto, file) {
        const resolvedCategory = this.normalizeCategory(category);
        const db = this.readDb();
        const products = db[resolvedCategory];
        const productIndex = products.findIndex((p) => p.id === id);
        if (productIndex === -1) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found in category ${resolvedCategory}`);
        }
        const existingProduct = products[productIndex];
        const parsedPrice = updateProductDto.price !== undefined
            ? (typeof updateProductDto.price === 'string' ? Number(updateProductDto.price) : updateProductDto.price)
            : undefined;
        const parsedStarred = updateProductDto.starred !== undefined
            ? (typeof updateProductDto.starred === 'string' ? updateProductDto.starred === 'true' : !!updateProductDto.starred)
            : undefined;
        let savedImagePath = existingProduct.image;
        if (file) {
            if (existingProduct.image && existingProduct.image.startsWith('astorage/')) {
                this.deleteFile(existingProduct.image);
            }
            savedImagePath = this.saveFile(file);
        }
        else if (updateProductDto.image !== undefined) {
            savedImagePath = updateProductDto.image;
        }
        const updatedProduct = {
            ...existingProduct,
            ...(updateProductDto.name !== undefined && { name: updateProductDto.name }),
            ...(updateProductDto.brand !== undefined && { brand: updateProductDto.brand }),
            ...(parsedPrice !== undefined && { price: parsedPrice }),
            ...(updateProductDto.description !== undefined && { description: updateProductDto.description }),
            image: savedImagePath,
            ...(parsedStarred !== undefined && { starred: parsedStarred }),
        };
        products[productIndex] = updatedProduct;
        this.writeDb(db);
        return updatedProduct;
    }
    deleteProduct(category, id) {
        const resolvedCategory = this.normalizeCategory(category);
        const db = this.readDb();
        const products = db[resolvedCategory];
        const productIndex = products.findIndex((p) => p.id === id);
        if (productIndex === -1) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found in category ${resolvedCategory}`);
        }
        const existingProduct = products[productIndex];
        if (existingProduct.image && existingProduct.image.startsWith('astorage/')) {
            this.deleteFile(existingProduct.image);
        }
        products.splice(productIndex, 1);
        this.writeDb(db);
        return { success: true, message: `Product with ID ${id} was successfully deleted` };
    }
};
exports.AdminActionsService = AdminActionsService;
exports.AdminActionsService = AdminActionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AdminActionsService);
//# sourceMappingURL=admin-actions.service.js.map