
export const Business = () => {
  return (
    <section className="business-sect">

        <div className="grid-layout">
        
            <div className="business-sect__Title">
                    <h2 className='business-sect__Title__copy'>BUSINESS</h2>
                    <p className='business-sect__Title__subcopy'>Let's talk</p>
            </div>

            <form>

                <label for="name">Full name</label>
                <input type="text" name="name" placeholder="Your full name" />

                <label for="email">Email address</label>
                <input type="text" name="email" placeholder="Your email address" />

                <label for="subject">Subject</label>
                <input type="text" name="subject" placeholder="Message subject" />

                <label for="messaje">Message</label>
                <input type="text" name="messaje" placeholder="Your message here" />

                <p className="privacy">
                    <input type="checkbox" name="privacy"/> <span className="txt"> I accept the <span className="link-simulation">Privacy Policy</span></span>
                </p>
                <input type="submit" value="Send"></input>

            </form>
            
        </div>

    </section>
  )
}
