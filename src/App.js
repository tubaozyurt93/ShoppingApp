import './App.css';
import { GETALLITEMS, filteredList } from './redux/actions/action';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card, Button, CardGroup, Container, Row, Col, Link, ListGroup } from 'react-bootstrap';
import { useEffect } from 'react';
import MyPage from './Components/MyPage';
import ListGroups from './Components/ListGroups';

const baseURL = "https://fakestoreapi.com/products";
function App({ items, setItems, filterItems, filterList }) {

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(item => {
      setItems(item)
    })
  }, [])
  console.log('İtems', items)

  return (

    <Container fluid>
      <Row>
        <Col className='col-3 card-column h-100'>
          <ListGroups />
        </Col>

        <Col xs={3} md={4} lg={8} className="mb-5 card-column"    >
          <CardGroup>
            {filterList && filterList.length > 0 ? filterList.map(data=> {
              return (
                <MyPage data={data} />
              )
            }) :
              <>
                {items && items.map(data =>
                  <MyPage data={data} />
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
  filterList: state.filteredList
});

const mapDispatchToProps = (dispatch) => ({
  setItems: (item) => dispatch(GETALLITEMS(item)),
  filterItems: (item) => dispatch(filteredList(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
