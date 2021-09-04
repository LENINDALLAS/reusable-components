import './Button.css'

export const Button = function Button(props) {
    const className = `button ${props.type}`;

    return (
        <button onClick={props.handleClick} className={className} >
            {props.icon && props.icon} {props.label}
        </button>
    )

};

Button.defaultProps = {
    type: 'secondary'
};
