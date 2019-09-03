// tslint:disable-next-line:no-empty-interface
export interface Menu {
    label: string;
    link: string;
    icon: string;
    dropdownTarget?: string;
    children?: {
        label: string;
        link: string;
        icon: string;
    }[];
}
