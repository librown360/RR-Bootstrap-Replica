import Card from 'react-bootstrap/Card'
import background from '../images/instacart_background.webp'

const backgroundStyle = {
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat', 
    position: 'absolute',
    right: '0',
    top: '7em',
    zIndex: '-1', 
    padding: '10em',
    height: '70%', 
    width: '100%', 
    backgroundPosition: 'center right', 
    backgroundColor: '#deedd6'
}

function BackgroundImage() {
    return (
            <Card className='text-black' style={backgroundStyle} >
                <Card.Img src={background} alt="produce" height='347px' width='428px' />
                <Card.ImgOverlay>
                    <Card.Text>
                        <h1><strong>Order groceries for delivery or pickup today</strong></h1>
                    </Card.Text>
                    <Card.Text>
                        Whatever you want from local stores, brought right to your door. 
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
       
    )
}

export default BackgroundImage