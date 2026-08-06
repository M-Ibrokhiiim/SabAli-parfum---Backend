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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParfumesService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
let ParfumesService = class ParfumesService {
    dbDir = path.join(process.cwd(), 'database');
    dbFile = path.join(this.dbDir, 'db.json');
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
    readDb() {
        this.ensureDbExists();
        const data = fs.readFileSync(this.dbFile, 'utf-8');
        return JSON.parse(data);
    }
    getMenParfumes() {
        const db = this.readDb();
        return db.mens;
    }
    getWomenParfumes() {
        const db = this.readDb();
        return db.womens;
    }
    getMenTrendParfumes() {
        const db = this.readDb();
        return db.mens.filter((product) => product.starred === true);
    }
    getWomenTrendParfumes() {
        const db = this.readDb();
        return db.womens.filter((product) => product.starred === true);
    }
};
exports.ParfumesService = ParfumesService;
exports.ParfumesService = ParfumesService = __decorate([
    (0, common_1.Injectable)()
], ParfumesService);
//# sourceMappingURL=parfumes.service.js.map