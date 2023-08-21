export interface TableHeadersProps {
    title: string;
}

export interface StatesAllowedProps {
    name: string;
}

export interface CountriesAllowedProps {
    country: string;
    state: StatesAllowedProps[];
}

export interface GenresProps {
    genre: string;
}