import { Contents, State } from '../../models';

export interface NavbarProps {
    homeRoute: Contents.RouteProps;
    pageTitle: string;
    loginRoute?: Contents.RouteProps;
    isAuth: boolean;
    routes: any[];
    handleOnClickRoute: (route: Contents.RouteProps) => void;
    location: string;
    authUser?: State.AppState.AuthUserProps
}