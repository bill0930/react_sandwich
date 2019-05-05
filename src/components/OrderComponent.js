import React from 'react';
import {Badge, Button
} from 'reactstrap'
import AddOrder from './AddOrderForm'
import FindOrder from './FindOrderForm';


function CheckStatus({status}){
  console.log("function CsheckStatus entered -->" + status)

  switch (status){
    case 'received':
    return(
<span className="badge badge-pill badge-primary">{status}</span>
    )
    case 'inQueue':
    return(
<span className="badge badge-pill badge-warning">{status}</span>
    )
    case 'ready':
    return(
<span className="badge badge-pill badge-success">{status}</span>
    )
    case 'failed':
    return(
<span className="badge badge-pill badge-danger">{status}</span>
    )

    default :
    return (
<span className="badge badge-pill badge-dark">{status}</span>
    )
  }
  // if(status == 'received'){

  // }else{
  //   return(
  //     <h4>NOT RETURN ANYTHING</h4>
  //   )
  // }
}

function RenderOrders({orders}){
  // console.log("function RenderOrder entered -->" + orders)


  if(orders != null){
  /*
    {
      "id": 0,
      "sandwichId": 0,
      "status": "received"
    }
    */

  const ORDERS = orders.map((order)=>{
    console.log("function RenderOrder entered -->" + order.id)
  return(
     <tr key={order.id}>
    <th scope="row"> <Badge color="secondary">{order.id}</Badge>
</th>
    <td><Badge color="info">{order.sandwichId}</Badge></td>
    <td><CheckStatus status={order.status}/></td>
  </tr>
  )
  });

  return(
    <div className="container">
      <div className="row justify-content-center">
  <table className="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">OrderID</th>
          <th scope="col">SandwichId</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
      {ORDERS}
      </tbody>
</table>
      </div>

    </div>
      )

  }else{ //
  return(
      <div>Order Rendering failure</div>
  )
  }
}
//--------------------
function Order(props) {
    return(
      <div className="container">
      <div className = "row">
        <div className="col-9">
            <h4>List of Orders</h4>
        </div>
          <div className = "col-sm-9">
          <RenderOrders orders={props.orders.orders}/>
          </div>

          <div className = "col-sm-3">
          <AddOrder 
          postOrder = {props.postOrder}
          resetOrderForm={props.resetOrderForm}
          />          
          <FindOrder findOrder={props.findOrder}
           resetOrderForm={props.resetOrderForm}
          />
          </div>

      </div>


      </div>
    );
}

export default Order; 