import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { GETALLITEMS, filteredList } from '../redux/actions/action';


function ListGroups({ items, setItems, filterItems, filterList }) {
    const onClick = (type) => {
        filterItems(type)
        console.log(type);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item onClick={() => onClick("jewelery")}>Jelewery</ListGroup.Item>
                    <ListGroup.Item onClick={() => onClick("electronics")}>Electronics</ListGroup.Item>
                    <ListGroup.Item onClick={() => onClick("women's clothing")}>Women's Clothing</ListGroup.Item>
                    <ListGroup.Item onClick={() => onClick("men's clothing")}>Men's Clothing</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}
const mapStateToProps = (state) => ({
    items: state.data,
    filterList: state.filteredList
});

const mapDispatchToProps = (dispatch) => ({
    setItems: (item) => dispatch(GETALLITEMS(item)),
    filterItems: (item) => dispatch(filteredList(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListGroups);
