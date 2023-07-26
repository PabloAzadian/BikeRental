import Accordion from "react-bootstrap/Accordion"
import "./FaQ.css"



function FaQ() {
    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-title-container">
                    <h5>FAQ</h5>
                    <h2>Frequently Asked Questions</h2>
                    <p>Questions and Answers to Common Concerns and Inquiries.</p>
                </div>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. How can I rent a bike from your website?</Accordion.Header>
                        <Accordion.Body>
                        Renting a bike from our website is easy! Simply browse through our selection of bikes, 
                        choose the type of bike you want, select the rental duration, and proceed to checkout. 
                        You can also contact our customer support if you need any assistance during the booking process.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. What payment methods do you accept for bike rentals?</Accordion.Header>
                        <Accordion.Body>
                        We accept various payment methods, including credit/debit
                        cards and online payment platforms. At checkout, 
                        you'll have the option to choose the payment method that is most convenient for you.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Is there a minimum age requirement for renting bikes?</Accordion.Header>
                        <Accordion.Body>
                        Yes, there is a minimum age requirement for bike rentals. Generally,
                        renters must be at least 18 years old to rent a bike. If the renter 
                        is under 18, they must be accompanied by a parent or guardian, who 
                        will be responsible for the rental agreement.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>
      );
    
}

export default FaQ;