import './App.scss';
import Button from 'react-bootstrap/Button';
import LightLogo from './logos/LogoLight.png';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ImSearch} from 'react-icons/im';
import DetailsAccordion from './components/accordion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LightLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Button variant='success'>TEST BTN</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formInput">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" />
              </Form.Group>
            </Col>
            
            <Col xs="auto" style={{marginTop:"16px"}}>
              <Button variant="primary" type="submit"><ImSearch/> Search</Button>
            </Col>
          </Row>
        </Form>
    </div>
  );
}

export default App;
