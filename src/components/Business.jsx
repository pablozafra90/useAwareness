import { useAlert } from '../hooks/useAlert';

export const Business = () => {

  const { setAlertNav } = useAlert();

  return (
    <section className="business-sect">

        <div className="grid-layout">
        
            <div className="business-sect__Title">
                    <h2 className='business-sect__Title__copy'>BUSINESS</h2>
                    <p className='business-sect__Title__subcopy'>Let's talk</p>
            </div>

            <form>

                <label htmlFor="name">Full name</label>
                <input type="text" name="name" placeholder="Your full name" autoComplete="name" id="name"/>

                <label htmlFor="email">Email address</label>
                <input type="text" name="email" placeholder="Your email address" autoComplete="email" id="email"/>

                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" placeholder="Message subject" autoComplete="subject" id="subject"/>

                <label htmlFor="message">Message</label>
                <input type="text" name="message" placeholder="Your message here" autoComplete="message" id="message"/>

                <p className="privacy">
                    <input type="checkbox" name="privacy"/> <span className="txt"> I accept the <span className="link-simulation" onClick={() => { setAlertNav() }}>Privacy Policy</span></span>
                </p>
                <input type="submit" value="Send" onClick={() => { setAlertNav() }}></input>

            </form>
            
        </div>

    </section>
  )
}
