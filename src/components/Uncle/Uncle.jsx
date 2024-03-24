import Cousin from "../Cousin/Cousin";



const Uncle = ({asset}) => {
    return (
        <div>

            <h2>Uncle</h2>

            <section className="flex
            ">
                <Cousin name='Rafsan' ></Cousin>
                <Cousin asset={asset} name='Sohana' ></Cousin>
            </section>
            
        </div>
    );
};

export default Uncle;