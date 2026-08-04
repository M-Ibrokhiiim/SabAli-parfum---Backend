import { TrendService } from './trend.service';
import { CreateTrendDto } from './dto/create-trend.dto';
import { UpdateTrendDto } from './dto/update-trend.dto';
export declare class TrendController {
    private readonly trendService;
    constructor(trendService: TrendService);
    create(createTrendDto: CreateTrendDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTrendDto: UpdateTrendDto): string;
    remove(id: string): string;
}
