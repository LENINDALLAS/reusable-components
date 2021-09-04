import './Avatar.css'

export const Avatar = function Avatar(props) {
    const className = `div ${props.type}`;

    return (
        <div className={className}>
            <img src={props.image} alt={props.alt} className={className} />
        </div>
    );
}

Avatar.defaultProps = {
    type: 'normal'
}

