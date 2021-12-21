import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import { GETALLITEMS, filteredList } from '../redux/actions/action';

function ListGroups({ items, setItems, filterItems, filterList }) {
    const {t} =useTranslation();
    const onClick = (type) => {
        filterItems(type)
        console.log(type);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header><h5>{t('navbar.dropdown.headers.featured')}</h5></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item onClick={() => onClick("jewelery")}>{t('navbar.dropdown.sections.jewelery')}</ListGroup.Item>
                    <ListGroup.Item onClick={() => onClick("electronics")}>{t('navbar.dropdown.headers.electronics')}</ListGroup.Item>
                    <ListGroup.Item onClick={() => onClick("women's clothing")}>{t('navbar.dropdown.headers.womensclothings')}</ListGroup.Item>
                    <ListGroup.Item onClick={() => onClick("men's clothing")}>{t('navbar.dropdown.headers.mensclothings')}</ListGroup.Item>
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
