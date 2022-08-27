import './App.css';
import { Button, Card, Spinner } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <p>bootstrap - class based</p>
      <p>react-bootstrap - component based</p>
      <h1>React Bootstrap Practice:</h1>
      {/* Button  */}
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}

      {/* Card */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>BlogCard Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Click more</Button>
      </Card.Body>
    </Card>

    {/* Spinner */}
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>


    </div>
  );
}

export default App;
