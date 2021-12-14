import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GETALLITEMS, filteredList } from './redux/actions/action';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card, Button, CardGroup, Container, Row, Col, Link, ListGroup, Navbar } from 'react-bootstrap';
import { useEffect } from 'react';
import MyPage from './Components/MyPage';
import ListGroups from './Components/ListGroups';
import NavbarComp from './Components/NavbarComp';

function App({ items, setItems, filterItems, filterList }) {

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(item => {
      setItems(item)
    })
  }, [])
  console.log('İtems', items)

  return (
   <div>
    <NavbarComp/>
    <Container fluid>
      <Row>
        <Col className='col-3 card-column h-100'>
          <ListGroups />
        </Col>

        <Col xs={3} md={4} lg={8} className="mb-5 card-column"    >
          <CardGroup>
            {filterList && filterList.length > 0 ? filterList.map((items,index)=> {
              return (
                <MyPage key={index} data={items} />
              )
            }) :
              <>
                {items && items.map((data,index) =>
                  <MyPage key={index} data={data} />
                )}
              </>
            }
          </CardGroup>
        </Col>

      </Row>
    </Container>
</div>

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
