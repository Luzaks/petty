export interface DropdownProps {
    title: string;
    route: string;
}

export interface RouteProps {
    id: number;
    title: string;
    route: string;
    dropdown?: DropdownProps[];
    isOpened?: boolean;
}