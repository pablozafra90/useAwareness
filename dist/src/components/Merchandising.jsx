import { MerchanCard } from "./_merchandising/MerchanCard"
import { useAlert } from '../hooks/useAlert';

export const Merchandising = () => {

  const { setAlertNav } = useAlert();

  return (
    <section className="merch-sect">

        <div className='grid-layout'>
            
            <div className="merch-sect__Title">
                <h2 className='merch-sect__Title__copy'>MERCHANDISING</h2>
                <p className='merch-sect__Title__subcopy'>Get some stuff</p>
            </div>

            <div className="merch-sect__card-layout">

                <MerchanCard id={1} />
                <MerchanCard id={2} />
                <MerchanCard id={3} />
                <button className="merch-sect__card-layout__btn btn btn--04 btn--link-out" onClick={() => { setAlertNav() }}>View all</button>

            </div>

        </div>
        
    </section>
  )
}
