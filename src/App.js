import './App.css';
import { GETALLITEMS } from './redux/actions/action';
import axios from 'axios';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const baseURL = "https://fakestoreapi.com/products";
function App(items,setItems) {

  useEffect(
    () => {
      axios.get(baseURL).then((response) => {
      setItems(response.data);
      console.log(response.data);
    },[]
  )
    })
  return (
    <div className="App">
      
    </div>
  );
}
const mapStateToProps = (state) => ({
  items: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  setItems: (item) => dispatch(GETALLITEMS(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
