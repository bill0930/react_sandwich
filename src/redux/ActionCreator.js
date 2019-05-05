import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';
import { isObject } from 'util';
// -----------
export const fetchOrders = () =>(dispatch) => {

    dispatch(ordersLoading(true));

    return fetch(baseUrl + 'orders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            console.log("the error messgae is " + errmess);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addOrders(dishes)))
    .catch(error => dispatch(ordersFailed(error.message)));
};


export const ordersLoading = () => ({
    type: ActionTypes.ORDERS_LOADING
});

export const ordersFailed = (errmess) => ({
    type: ActionTypes.ORDERS_FAILED,
    payload: errmess
});

export const addOrders = (orders) => ({
    type: ActionTypes.ADD_ORDERS,
    payload: orders
}); 

export const addOrder = (order) => ({
    type: ActionTypes.ADD_ORDER,
    payload: order
}); 

export const postOrder = (id, sandwichId, status)=>(dispatch)=>{
    const newOrder = {
        id: id,
        sandwichId: sandwichId,
        status: status,
    }

    return fetch(baseUrl + 'orders',{
        method: 'POST',
        body:   JSON.stringify(newOrder),
        headers:  {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })

    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            console.log("the error messgae is " + errmess);
            throw errmess;
      })
    .then(response =>response.json())
    .then(response => dispatch(addOrder(response)))
    .catch(error => {
    console.log('Post Order',error.message)
    alert('Your Order could not be posted\n Error' + error.message);
});
};

export const findOrder= (id)=>(dispatch)=>{
  
  const ORDER_ID= id;

  return fetch(baseUrl + 'orders?id='+ORDER_ID)
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
error => {
      var errmess = new Error(error.message);
      console.log("the error messgae is " + errmess);
      throw errmess;
})
.then(response =>response.json())
.then(jsonData=>{
var str = JSON.stringify(jsonData);
// alert(str);
var obj = JSON.parse(str);
alert("your orderid. is : "+ obj[0].id + "\nYour SandwichID is: " + obj[0].sandwichId +"\n Your Order Status is : " + obj[0].status  )

})
.catch(error => {
console.log('Find Order',error.message)
alert('Your Order could not be Found\n Error' + error.message);
});

}


// export const fetchSandwiches = () =>(dispatch) => {

//     dispatch(sandwichesLoading(true));
//     dispatch(addSandwiches(SANDWICHES));
// };

// export const sandwichesLoading = () => ({
//     type: ActionTypes.SANDWICHES_LOADING
// });

// export const sandwichesFailed = (errmess) => ({
//     type: ActionTypes.SANDWICHES_FAILED,
//     payload: errmess
// });

// export const addSandwiches = (sandwiches) => ({
//     type: ActionTypes.ADD_SANDWICHES,
//     payload: sandwiches
// }); 