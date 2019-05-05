import React,{ Component} from 'react';
import {Button, Modal, ModalHeader,ModalBody,Row,Col,Label
 } from 'reactstrap';
 import { Control, Form, Errors, actions } from 'react-redux-form';

class AddOrder extends Component{
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
        alert('Current State is: ' + JSON.stringify(values));
        console.log('Current State is: ' + JSON.stringify(values));
        this.props.postOrder('',values.sandwichId,'sent');
        this.props.resetOrderForm();
    }
    
          

    render(){
        return (
            <div >
            <Button outline onClick={this.toggleModal}>
            <span className = "fa fa-pencil fa-lg"></span> Make Order
            </Button>
            
           <Modal isOpen = {this.state.isModalOpen} toggle= {this.toggleModal}>
           <ModalHeader toggle= {this.toggleModal} > Make a new Order</ModalHeader>
           <ModalBody>
           <Form model="order" onSubmit={(values) => this.handleSubmit(values)}>

           <Row className="form-group">
                 <Label htmlFor="sandwichId" md={2}>sandwichId</Label>
                    <Col md={10}>
                 <Control type="number" min="0" model=".sandwichId" id="sandwichId" name="sandwichId"
                     placeholder="sandwichId" 
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
export default AddOrder;