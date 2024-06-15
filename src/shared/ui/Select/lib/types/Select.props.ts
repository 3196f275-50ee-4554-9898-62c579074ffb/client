import { StylesConfig } from 'react-select';


interface ISelectItem {
    label: string;
    value: string;
}

export interface ISelectProps {
    styles: StylesConfig,
    options: ISelectItem[],
    placeholder: string
    onChange: (selectedOption: ISelectItem | null) => void;
}