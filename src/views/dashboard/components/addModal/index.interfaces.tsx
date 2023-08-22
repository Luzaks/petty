import { type CountriesAllowedProps, type GenresProps } from '../../../../models/content';
import { UserProps } from '../../../../models/state';

export interface AddModalProps {
    handleAddModal: () => void;
    countries: CountriesAllowedProps[];
    genres: GenresProps[];
    handleSubmit: (user: UserProps) => void;
}