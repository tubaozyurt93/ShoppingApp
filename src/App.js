import './App.css';
import { GETALLITEMS,filteredList } from './redux/actions/action';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card,Button,CardGroup,Container,Row,Col,Link,ListGroup } from 'react-bootstrap';
import { useEffect } from 'react';

const baseURL = "https://fakestoreapi.com/products";
function App({ items, setItems,filterItems,filterList }) {
  
  useEffect(() =>
  axios.get(baseURL).then((response) => {
    setItems(response)
  }
  ), []
)
console.log('İtems',items)
  const onClick =(type)=>{
    filterItems(type)
  }
  return (
    
      <Container fluid>
         <Row>
          <Col className='col-3 card-column h-100'>  
          <Card style={{ width: '18rem' }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
         <ListGroup.Item  >Jelewery</ListGroup.Item>
            <ListGroup.Item>Electronics</ListGroup.Item>
            <ListGroup.Item>Women's Clothing</ListGroup.Item>
            <ListGroup.Item onClick={()=>onClick("men's clothing")}>Men's Clothing</ListGroup.Item>
          </ListGroup>
        </Card>  
         </Col>
           
         <Col  xs = {3}  md = {4}  lg = {8} className = "mb-5 card-column"    >
           <CardGroup> 
             {filterList.length > 0 ? filterList.map(item=>item.title) :     
                       <>
                         {items.map(data =>
                                             
                                             
                                               <Card style={{ width: '18rem' }}>
                          <a
                                    to='/details'
                                    className='card-link'
                          >
                                    <Card.Img
                                        variant="top"
                                        className='card-image'
                                      src={data.image}
                                      style={{ width: "auto", margin: "auto", height: "80px" }}
                                    />
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                      <Card.Title><strong>{data.title}</strong></Card.Title>
                                      <Card.Text className='cardText'>
                                        <strong>{data.category}</strong>
                                      </Card.Text>
                                    </Card.Body>
                          </a>
                          <Card.Footer className="justify-self-end card-footer">
                                    <Card.Text>
                                    </Card.Text>
                          </Card.Footer>
                                               </Card>
                         )}
                       </>
}
                       </CardGroup>
         </Col>
            
        </Row>
      </Container>
        
   
  );
}
const mapStateToProps = (state) => ({
  items: state.data,
  filterList:state.filteredList
});

const mapDispatchToProps = (dispatch) => ({
  setItems: (item) => dispatch(GETALLITEMS(item)),
  filterItems:(item) => dispatch(filteredList(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
