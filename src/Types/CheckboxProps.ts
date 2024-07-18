type CheckboxProps = {
    id: string,
    name: string,
    label?: string,
    isChecked?: boolean,
    onChange?: React.ReactEventHandler<HTMLInputElement>,
};

export default CheckboxProps;
