import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  starred?: boolean;
}

interface DatabaseSchema {
  mens: Product[];
  womens: Product[];
}

@Injectable()
export class ParfumesService {
  private readonly dbDir = path.join(process.cwd(), 'database');
  private readonly dbFile = path.join(this.dbDir, 'db.json');

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

  private readDb(): DatabaseSchema {
    this.ensureDbExists();
    const data = fs.readFileSync(this.dbFile, 'utf-8');
    return JSON.parse(data) as DatabaseSchema;
  }

  getMenParfumes(): Product[] {
    const db = this.readDb();
    return db.mens;
  }

  getWomenParfumes(): Product[] {
    const db = this.readDb();
    return db.womens;
  }

  getMenTrendParfumes(): Product[] {
    const db = this.readDb();
    return db.mens.filter((product) => product.starred === true);
  }

  getWomenTrendParfumes(): Product[] {
    const db = this.readDb();
    return db.womens.filter((product) => product.starred === true);
  }
}
