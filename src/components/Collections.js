import React, { Component } from "react";
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Collections.css'; 

//import Personlogo from '../icons/user.png';


class Collections extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      collectionsData: [
        {
          id: 1,
          text: 'World War 11 Stamps',
          isEditing: false
        }, 
        {
          id: 2,
          text: 'Faberge Eggs',
          isEditing: false
        },
        //Rest of code if you wanted to test sticky logos
        // {
        //     id: 3,
        //     text: 'World War 11 Stamps',
        //     isEditing: false
        //   }, 
        //   {
        //     id: 4,
        //     text: 'Faberge Eggs',
        //     isEditing: false
        //   },
        //   {
        //     id: 5,
        //     text: 'World War 11 Stamps',
        //     isEditing: false
        //   }, 
        //   {
        //     id: 6,
        //     text: 'Faberge Eggs',
        //     isEditing: false
        //   },
        //   {
        //     id: 7,
        //     text: 'World War 11 Stamps',
        //     isEditing: false
        //   }, 
        //   {
        //     id: 8,
        //     text: 'Faberge Eggs',
        //     isEditing: false
        //   },
        //   {
        //     id: 9,
        //     text: 'World War 11 Stamps',
        //     isEditing: false
        //   }, 
        //   {
        //     id: 10,
        //     text: 'Faberge Eggs',
        //     isEditing: false
        //   },
        //   {
        //     id: 11,
        //     text: 'World War 11 Stamps',
        //     isEditing: false
        //   }, 
        //   {
        //     id: 12,
        //     text: 'Faberge Eggs',
        //     isEditing: false
        //   },
        //   {
        //     id: 13,
        //     text: 'World War 11 Stamps',
        //     isEditing: false
        //   }, 
        //   {
        //     id: 14,
        //     text: 'Faberge Eggs',
        //     isEditing: false
        //   },
        //   {
        //     id: 15,
        //     text: 'World War 11 Stamps',
        //     isEditing: false
        //   }, 
        //   {
        //     id: 16,
        //     text: 'Faberge Eggs',
        //     isEditing: false
        //   },
        //   {
        //     id: 17,
        //     text: 'World War 11 Stamps',
        //     isEditing: false
        //   }, 
        //   {
        //     id: 18,
        //     text: 'Faberge Eggs',
        //     isEditing: false
        //   },
      ]
    }

    this.handleAddNewClick = this.handleAddNewClick.bind(this);
    this.handleCollectionSubmit = this.handleCollectionSubmit.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFinishedEdit = this.handleFinishedEdit.bind(this);
    this.handleDeletelick = this.handleDeletelick.bind(this);
    this.handleCloseAddNewClick = this.handleCloseAddNewClick.bind(this);
  }


  handleAddNewClick() {
    this.setState({ isAdding: true})
  }


  handleCloseAddNewClick(){
    this.setState({ isAdding: false})
  }


  handleEditClick(EditItem) {
    //console.log("Edit Button Clicked: ", EditItem)

    //Gets the index of what you are editing
    const index = this.state.collectionsData.findIndex(item => item.id === EditItem.id);

    //Sets our temporary data then sets the respective object to now editing
    var data = [...this.state.collectionsData];
    data[index].isEditing = true;
    this.setState({
      collectionsData: data
    });
  }



  handleCollectionSubmit(event) {
    event.preventDefault();
    //Gets the data, gets the new collection then gets the max ID from the array of objects and adds 1 for the new ID
    const data = new FormData(event.target);
    const collectionText = data.get('collection');
    let newId = Math.max.apply(null, this.state.collectionsData.map(item => item.id)) + 1;

    //If there are no collections newId would eqaul -infinity from above
    if(newId < 0){
      newId = 1
    }

    //Creats a new object called obj and then adds that obj to the collections data
    const obj = {'id':newId, 'text':collectionText};
    this.setState({
      collectionsData: [...this.state.collectionsData, obj]
    });

    //Close the adding Form
    this.setState({ isAdding: false})
  }




  handleFinishedEdit(event) {
    event.preventDefault();
    //Gets the data, gets the new collection then gets the new text and id you are editing
    const data = new FormData(event.target);
    const collectionText = data.get('collection');
    const id = parseInt(data.get('id'));

    //Gets the index of what you are editing
    const index = this.state.collectionsData.findIndex(item => item.id === id);

    //Sets our temporary data then sets the respective object to no longer editing and the next text value
    var currentData = [...this.state.collectionsData];
    currentData[index].isEditing = false;
    currentData[index].text = collectionText;
    this.setState({
      collectionsData: currentData
    });
  }


  handleDeletelick(deleteItem){
    //console.log("Delete Button Clicked: ", deleteItem)

    //Gets the index of what you are editing
    const index = this.state.collectionsData.findIndex(item => item.id === deleteItem.id);

    //Sets our temporary data then sets the respective object to now editing
    var data = [...this.state.collectionsData];
    data.splice(index, 1);
    this.setState({
      collectionsData: data
    });
  }

  
  

  render() {
    const isAdding = this.state.isAdding;
    let AddNew;
    if (isAdding) {
      AddNew = 
      <Form onSubmit={this.handleCollectionSubmit} >
        <FormGroup className="createForm">
          <Input type="text" name="collection" id="collection" placeholder="Enter New Collection Here" autoFocus />
        </FormGroup>
        <Button color="link" onClick={this.handleCloseAddNewClick} ><span className="icon-trash-2"></span></Button>
        <Button color="link"><span className="icon-check-circle"></span></Button>
      </Form>
    } 


    return ( 
      <Container>
        <Row>
          <Col xs="0" sm="1" md="2" lg="3"></Col>
          <Col xs="12" sm="10" md="8" lg="6">
            <div className="titleBox">
              <span className="myTitle">My Collections</span>
            </div>
            <div className="mainBox">
              <div className="childrenBox">
                <ul>
                  <li>
                    {AddNew}
                  </li>
                  {
                    this.state.collectionsData.map(
                      (item) => (
                        <li key={item.id}>
                          {!item.isEditing &&
                            <div>
                              <span className="textLine">
                                <span className="itemText">{item.text}</span>
                              </span>
                              <Button color="link" onClick={() => this.handleDeletelick(item)}><span className="icon-trash-2"></span></Button>
                              <Button color="link" onClick={() => this.handleEditClick(item)}><span className="icon-edit-2"></span></Button>
                            </div>
                          }
                          {item.isEditing &&
                            <div>
                              <Form onSubmit={this.handleFinishedEdit}>
                                <FormGroup className="editForm">
                                  <Input style={{display: 'none'}} type="text" name="id" id="id" value={item.id} readOnly/>
                                  <Input type="text" name="collection" id="collection" defaultValue={item.text} autoFocus/>
                                </FormGroup>
                                <Button color="link" onClick={() => this.handleDeletelick(item)}><span className="icon-trash-2"></span></Button>
                                <Button color="link"><span className="icon-check-circle"></span></Button>
                              </Form>
                            </div>
                          }
                        </li>
                  ))}
                  {!isAdding && 
                    <div className="buttonBox">
                      <Button color="link" onClick={this.handleAddNewClick} className="createNewButton">+ Add New Collection</Button>
                    </div>
                  }
                </ul>
              </div>
            </div>
          </Col>
          <Col xs="0" sm="1" md="2" lg="3"></Col>
        </Row>
      </Container>
    );
  }
}

 
export default Collections;