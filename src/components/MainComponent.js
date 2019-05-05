import Home from './HomeComponent';
import Order from './OrderComponent';
import Header from './HeaderComponent';
import React, { Component } from 'react';
import Sandwich from './SandwichComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchOrders,postOrder,findOrder} from '../redux/ActionCreator'
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
      orders: state.orders,
      // sandwiches: state.sandwiches
    }
  }

const mapDispatchToProps = dispatch => ({

     fetchOrders: () => { dispatch(fetchOrders())},
     postOrder:  (id, sandwichId, status) => dispatch(postOrder(id, sandwichId, status)),
     resetOrderForm: ()=>{dispatch(actions.reset('order'))},
     findOrder: (id) =>dispatch(findOrder(id)),
    //  fetchSandwiches: () => { dispatch(fetchSandwiches())},
   
   });  

class Main extends Component {
    componentDidMount() {
        this.props.fetchOrders();
        // this.props.fetchSandwiches();
      }

render() {
    
    const HomePage = () => {
      return(
          <Home />
      );
    }
return(
    <div>
    <Header />
    <Switch>
    <Route  exact path= "/" component={HomePage} />
    <Route  path = "/order" component={() => <Order 
    orders = {this.props.orders}
    postOrder = {this.props.postOrder}
    findOrder = {this.props.findOrder}
    resetOrderForm={this.props.resetOrderForm}
    />} 
    />
    <Route  path = "/sandwich" component={() => <Sandwich />} />

    <Redirect to= "/" />
    </Switch>
    </div>
)
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

