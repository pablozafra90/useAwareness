import { useAlert } from '../../hooks/useAlert';

export const ShowItem = ( { city, date } ) => {

  const { setAlertNav } = useAlert();


  return (

    <li className="next-shows-sect__shows-grid__show-item">

        <div className="next-shows-sect__shows-grid__show-item__show-info">

            <h3>{ city }</h3>
            <p>{ date }</p>

        </div>

        <div className="next-shows-sect__shows-grid__show-item__btn-container">

            <button className="next-shows-sect__shows-grid__show-item__btn-container__btn btn btn--01"  onClick={() => { setAlertNav() }}>Buy tickets</button>

        </div>


    </li>

  )
}
