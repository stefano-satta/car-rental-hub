export interface IYearProduction {
    label: string;
    value: string;
}

export interface IFuels extends IYearProduction {}

export type ICarGetParams = {
    year?: string;
    make?: string;
    model?: string;
    limit?: string;
    fuel_type?: string;
}

export interface CarPropsResponse {
    city_mpg: number;
    class: string;
    combination_mp: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}