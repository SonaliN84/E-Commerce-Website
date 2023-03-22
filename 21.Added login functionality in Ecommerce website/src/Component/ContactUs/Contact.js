import {Form,Button} from 'react-bootstrap';
import {useRef} from 'react';
import './Contact.css'
const Contact =()=>{

  const nameRef=useRef('');
  const emailRef=useRef('')
  const phoneRef=useRef('')

  const formSubmitHandler=async (event)=>{
    event.preventDefault();

    const user={
      name:nameRef.current.value,
      email:emailRef.current.value,
      phone:phoneRef.current.value,

    }

    await fetch('https://react-ecommerceproject-default-rtdb.firebaseio.com/ContactUs_Users.json',{
      method:'POST',
      body:JSON.stringify(user),
      header:{
        'Content-Type':'application/json'
      }
    })
    
  }
  return (
    <div>
    <div style={{margin:"20px",textAlign:"center"}}>
    <h4>Please enter user details here.</h4>
    <p>our representative will contact you shortly.</p>
    </div>
    <Form className='border-white shadow p-3 mb-5 bg-body-tertiary rounded contact-form' onSubmit={formSubmitHandler}>
    
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name" ref={nameRef} />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPhone">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" placeholder="Phone Number" ref={phoneRef} />
    </Form.Group>
    
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  );
}
export default Contact;