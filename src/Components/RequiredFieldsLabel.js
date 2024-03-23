import './Components.css';

function RequiredFieldsLabel(props) {
    return (
        <span className='font-montserrat text-tertiary-color text-sm '>
            {props.children}
        </span>
    );
}

export default RequiredFieldsLabel;