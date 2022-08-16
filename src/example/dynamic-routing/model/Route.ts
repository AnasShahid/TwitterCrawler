
export interface Route {
    title: string;
    path: string;
    content: string | React.ReactNode;
    exact?: boolean;
    hide?: boolean;
    containParam?: boolean;
    params?: Array<Param>;
}

export interface Param {
    id: string;
    value: string;
}