import './Components.css';

function SecondaryCard({children}) {
    return (
        <div className= "bg-secondary-card shadow-[0_4px_10px_rgb(100,185,185,0.5)] rounded-2xl p-4 m-2">
            {children}
        </div>
    )
}

export default SecondaryCard;