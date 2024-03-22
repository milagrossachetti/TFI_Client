import './Components.css';

function SecondaryCard({children}) {
    return (
        <div className= "bg-secondary-card shadow-[0_0_10px_rgb(221,239,239,1)] rounded-2xl p-4 m-2">
            {children}
        </div>
    )
}

export default SecondaryCard;