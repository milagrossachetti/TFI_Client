import PropTypes from 'prop-types';
import './Components.css';

function Button(props) {
    const classNameButton = `${props.bgColor} ${props.textColor} text-center font-kanit text-sm rounded-2xl px-8 py-2 m-2`;

    return (
        <button type='submit' className={classNameButton}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

Button.defaultProps = {
    bgColor: 'button-primary-color',
    textColor: 'text-white'
}

export default Button;