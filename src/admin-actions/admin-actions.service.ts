import { Injectable, UnauthorizedException, NotFoundException, BadRequestException } from '@nestjs/common';
import { LoginDto, CreateProductDto } from './dto/create-admin-action.dto';
import { UpdateProductDto } from './dto/update-admin-action.dto';
import * as fs from 'fs';
import * as path from 'path';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  capacity: number;
  description: string;
  image: string;
  starred: boolean;
}

export class UploadedFileDto {
  originalname!: string;
  buffer!: Buffer;
}

interface DatabaseSchema {
  mens: Product[];
  womens: Product[];
}

@Injectable()
export class AdminActionsService {
  private readonly dbDir = path.join(process.cwd(), 'database');
  private readonly dbFile = path.join(this.dbDir, 'db.json');
  private readonly storageDir = path.join(process.cwd(), 'astorage');

  constructor() {
    this.ensureDbExists();
    this.ensureStorageExists();
  }

  private ensureDbExists(): void {
    if (!fs.existsSync(this.dbDir)) {
      fs.mkdirSync(this.dbDir, { recursive: true });
    }
    if (!fs.existsSync(this.dbFile)) {
      const defaultData: DatabaseSchema = {
        mens: [],
        womens: [],
      };
      fs.writeFileSync(this.dbFile, JSON.stringify(defaultData, null, 2), 'utf-8');
    }
  }

  private ensureStorageExists(): void {
    if (!fs.existsSync(this.storageDir)) {
      fs.mkdirSync(this.storageDir, { recursive: true });
    }
  }

  private readDb(): DatabaseSchema {
    this.ensureDbExists();
    const data = fs.readFileSync(this.dbFile, 'utf-8');
    return JSON.parse(data) as DatabaseSchema;
  }

  private writeDb(data: DatabaseSchema): void {
    this.ensureDbExists();
    fs.writeFileSync(this.dbFile, JSON.stringify(data, null, 2), 'utf-8');
  }

  private normalizeCategory(category: string): 'mens' | 'womens' {
    const normalized = category.toLowerCase().trim();
    if (normalized === 'mens' || normalized === 'men' || normalized === 'men-parfumes') {
      return 'mens';
    }
    if (normalized === 'womens' || normalized === 'women' || normalized === 'women-parfumes') {
      return 'womens';
    }
    throw new BadRequestException(`Invalid category: "${category}". Must be "mens" or "womens"`);
  }

  private saveFile(file: UploadedFileDto): string {
    this.ensureStorageExists();
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    const filename = `${uniqueSuffix}${ext}`;
    const filePath = path.join(this.storageDir, filename);
    fs.writeFileSync(filePath, file.buffer);
    return `astorage/${filename}`;
  }

  private deleteFile(relativeFilePath: string): void {
    if (!relativeFilePath) return;
    const filename = relativeFilePath.replace(/^astorage\//, '');
    const filePath = path.join(this.storageDir, filename);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (err) {
        console.error(`Failed to delete file: ${filePath}`, err);
      }
    }
  }

  login(loginDto: LoginDto) {
    if (loginDto.username === 'Muhammadali' && loginDto.password === '12345678') {
      return { success: true, message: 'Login successful' };
    }
    throw new UnauthorizedException('Invalid admin credentials');
  }

  uploadProduct(createProductDto: CreateProductDto, file?: UploadedFileDto): Product {
    const { category, name, brand, price, capacity, description, image, starred } = createProductDto;
    const resolvedCategory = this.normalizeCategory(category);

    const parsedPrice = typeof price === 'string' ? Number(price) : price;
    const parsedCapacity = typeof capacity === 'string' ? Number(capacity) : capacity;
    const parsedStarred = starred !== undefined
      ? (typeof starred === 'string' ? starred === 'true' : !!starred)
      : false;

    let savedImagePath = image || '';
    if (file) {
      savedImagePath = this.saveFile(file);
    }

    const db = this.readDb();
    const newProduct: Product = {
      id: `${resolvedCategory.substring(0, 1)}${Date.now()}`,
      name,
      brand,
      price: parsedPrice,
      capacity: parsedCapacity,
      description,
      image: savedImagePath,
      starred: parsedStarred
    };

    db[resolvedCategory].push(newProduct);
    this.writeDb(db);
    return newProduct;
  }

  updateProduct(category: string, id: string, updateProductDto: UpdateProductDto, file?: UploadedFileDto): Product {
    const resolvedCategory = this.normalizeCategory(category);

    const db = this.readDb();
    const products = db[resolvedCategory];
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found in category ${resolvedCategory}`);
    }

    const existingProduct = products[productIndex];

    const parsedPrice = updateProductDto.price !== undefined
      ? (typeof updateProductDto.price === 'string' ? Number(updateProductDto.price) : updateProductDto.price)
      : undefined;

    const parsedCapacity = updateProductDto.capacity !== undefined
      ? (typeof updateProductDto.capacity === 'string' ? Number(updateProductDto.capacity) : updateProductDto.capacity)
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
    } else if (updateProductDto.image !== undefined) {
      savedImagePath = updateProductDto.image;
    }

    const updatedProduct: Product = {
      ...existingProduct,
      ...(updateProductDto.name !== undefined && { name: updateProductDto.name }),
      ...(updateProductDto.brand !== undefined && { brand: updateProductDto.brand }),
      ...(parsedPrice !== undefined && { price: parsedPrice }),
      ...(parsedCapacity !== undefined && { capacity: parsedCapacity }),
      ...(updateProductDto.description !== undefined && { description: updateProductDto.description }),
      image: savedImagePath,
      ...(parsedStarred !== undefined && { starred: parsedStarred }),
    };

    products[productIndex] = updatedProduct;
    this.writeDb(db);
    return updatedProduct;
  }

  deleteProduct(category: string, id: string) {
    const resolvedCategory = this.normalizeCategory(category);

    const db = this.readDb();
    const products = db[resolvedCategory];
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found in category ${resolvedCategory}`);
    }

    const existingProduct = products[productIndex];
    if (existingProduct.image && existingProduct.image.startsWith('astorage/')) {
      this.deleteFile(existingProduct.image);
    }

    products.splice(productIndex, 1);
    this.writeDb(db);
    return { success: true, message: `Product with ID ${id} was successfully deleted` };
  }
}
