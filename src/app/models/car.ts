import { FormControl } from "@angular/forms";

export interface IYearProduction {
    label: string;
    value: string;
}

export interface IFuels extends IYearProduction {}

export type CarGetParams = {
    year?: string;
    make?: string;
    model?: string;
    limit?: string;
    fuel_type?: string;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
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

export interface ISearchCarFormModel {
    year: FormControl<string | null>,
    make: FormControl<string | null>,
    model: FormControl<string | null>,
    limit: FormControl<string | null>,
    fuel_type: FormControl<string | null>
}