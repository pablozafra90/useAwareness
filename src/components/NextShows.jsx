import { NextShowsGrid } from "./_nextshows/NextShowsGrid"

export const NextShows = () => {

  return (
    <section className="next-shows-sect">

      <div className="grid-layout">
        
        <div className="next-shows-sect__Title">

            <h2 className='next-shows-sect__Title__copy'>NEXT SHOWS</h2>
            <p className='next-shows-sect__Title__subcopy'>Get a real party</p>

        </div>

        <NextShowsGrid />

      </div>
        
    </section>
  )
}
