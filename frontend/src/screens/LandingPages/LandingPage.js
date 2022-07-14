import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div className='main'>
<Container>
    <Row>
<div className='intro-text'>
<div> 

<h1 className='title'> Journal your thoughts </h1>
<p className='subtitle'> Free your mind with us </p>
<div className='buttonContainer'> 

    <Button size='lg' className='landingButton'> 
    <a href='/login'>
    Login
    </a>
    </Button>


    <Button size='lg' className='landingButton' variant="outline-primary"> 
    <a href='/register'>
    SignUp
    </a>
    </Button>



</div>

</div>
 </div>
    </Row>
</Container>



    </div>
  )
}

export default LandingPage