import { Contents } from '../../models';

export interface NavbarProps {
    homeRoute: Contents.RouteProps;
    pageTitle: string;
    loginRoute?: Contents.RouteProps;
    isAuth: boolean;
    routes: any[];
    handleOnClickRoute: (route: Contents.RouteProps) => void;
}