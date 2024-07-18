type ButtonProps = {
    severity?: 'primary' | 'default',
    type: 'button' | 'submit',
    isDisabled?: boolean,
    label: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string,
};

export default ButtonProps;
