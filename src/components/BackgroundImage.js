import Card from 'react-bootstrap/Card'
import background from '../images/instacart_background.jpeg'

const backgroundStyle = {
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat', 
    position: 'absolute',
    right: '5',
    top: '5',
    left: '0',
    zIndex: '-1', 
    padding: '5em',
    height: '70%', 
    width: '100%', 
    // backgroundPosition: 'center right', 
    backgroundColor: '#deedd6'
}

function BackgroundImage() {
    return (
            <Card className='text-black' style={backgroundStyle} >
                <Card.Img src={background} alt="produce" height='100%' width='100%' />
                <Card.ImgOverlay>
                    <Card.Title>
                        Order groceries for delivery or pickup today
                    </Card.Title>
                    <Card.Text>
                        Whatever you want from local stores, brought right to your door. 
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
       
    )
}

export default BackgroundImage