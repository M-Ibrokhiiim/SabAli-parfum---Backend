import { CreateTrendDto } from './dto/create-trend.dto';
import { UpdateTrendDto } from './dto/update-trend.dto';
export declare class TrendService {
    create(createTrendDto: CreateTrendDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTrendDto: UpdateTrendDto): string;
    remove(id: number): string;
}
