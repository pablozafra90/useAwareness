import { products } from "../../data/merchandising"

export const MerchanCard = ( { id } ) => {

    console.log(id);
    
    const { img, name, price } = products[id-1];
    
    console.log( img + " " + name + " " + price );

    return (
        <div className="merch-sect__card-layout__merchan-card">
            <div style={{backgroundImage: `url('${img}')`}} className="merch-sect__card-layout__merchan-card__card-img"/>
            <h4>{ name }</h4>
            <p className="price">{`${ price }€`}</p>
            <button className="btn btn--02">Add to chart</button>

        </div>
    )
}
