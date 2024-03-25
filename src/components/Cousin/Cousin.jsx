import Friends from "../Friends/Friends";



const Cousin = ({name, asset}) => {
    return (
        <div>

            <h2>{name}</h2>
            <p>Has : {asset}</p>
            

            {
                name === 'Rubaiya' && <Friends></Friends>
            }
            
        </div>
    );
};

export default Cousin;