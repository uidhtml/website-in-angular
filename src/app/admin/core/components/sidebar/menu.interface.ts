// tslint:disable-next-line:no-empty-interface
export interface Menu {
  label: string;
  link?: string;
  icon?: string;
  cssClass?: string;
  headingAsLink?: boolean;
  children?: {
    label: string;
    link: string;
    icon: string;
  }[];
}
