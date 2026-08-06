import { ParfumesService, Product } from './parfumes.service';
export declare class ParfumesController {
    private readonly parfumesService;
    constructor(parfumesService: ParfumesService);
    getMenParfumes(): Product[];
    getWomenParfumes(): Product[];
    getMenTrendParfumes(): Product[];
    getWomenTrendParfumes(): Product[];
}
