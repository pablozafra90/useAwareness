import { products } from "../../data/merchandising";
import { useAlert } from '../../hooks/useAlert';

export const MerchanCard = ( { id } ) => {

    //console.log(id);
    
    const { img, name, price } = products[id-1];
    
    //console.log( img + " " + name + " " + price );

    const { setAlertNav } = useAlert();

    return (
        <div className="merch-sect__card-layout__merchan-card">
            <div style={{backgroundImage: `url('${img}')`}} className="merch-sect__card-layout__merchan-card__card-img"/>
            <h4>{ name }</h4>
            <p className="price">{`${ price }€`}</p>
            <button className="btn btn--02" onClick={() => { setAlertNav() }}>Add to chart</button>

        </div>
    )
}
