import React,{ Component} from 'react';
import {Button, Modal, ModalHeader,ModalBody,Row,Col,Label
 } from 'reactstrap';
 import { Control, Form } from 'react-redux-form';

class FindOrder extends Component{
    constructor(props) {
        super(props);
    this.state = {
        isModalOpen:false,
    }
    this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }   

    handleSubmit(values) {
        this.toggleModal();
        // alert('Current State is: ' + JSON.stringify(values));
        // console.log('Current State is: ' + JSON.stringify(values));
        this.props.findOrder(values.orderid);
        this.props.resetOrderForm();
    }
    
          

    render(){
        return (
            <div >
            <Button color="success" size="lg"  onClick={this.toggleModal} >Find Order</Button>            
           <Modal isOpen = {this.state.isModalOpen} toggle= {this.toggleModal}>
           <ModalHeader toggle= {this.toggleModal} > Make a new Order</ModalHeader>
           <ModalBody>
           <Form model="order" onSubmit={(values) => this.handleSubmit(values)}>

           <Row className="form-group">
                 <Label htmlFor="orderid" md={2}>What is your Orderid?</Label>
                    <Col md={10}>
                 <Control type="number" min="0" model=".orderid" id="orderid" name="orderid"
                     placeholder="orderid" 
                     className="form-control"
                 />
            </Col>
             </Row>
            <Row className="form-group">
                 <Col md={{size:10, offset: 2}}>
                     <Button type="submit" color="primary">
                        Submit
                        </Button>
                     </Col>
                  </Row>
       </Form>
           </ModalBody>
       </Modal> 
       </div>
        );

    }
}
export default FindOrder;