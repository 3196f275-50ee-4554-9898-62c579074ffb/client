import cls from './Select.module.scss';
import ReactSelect, { StylesConfig } from 'react-select';
import { ISelectProps } from '@shared/ui';

export const Select = (
    {
        styles,
        options,
        placeholder,
        onChange,
    }: ISelectProps) => {
    return (
        <ReactSelect
            styles={styles}
            options={options}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};
