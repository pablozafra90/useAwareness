import { shows } from '../../data/shows'
import { ShowItem } from './ShowItem'

export const NextShowsGrid = () => {

  return (

    <ul className="next-shows-sect__shows-grid">

        {
            shows.map( show => (
            
                <ShowItem
                    key={ show.id }
                    { ...show }
                    />

            ) )
        }
        
    </ul>

  )
}
