import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import SidebarOrder from '../Sidebar-Order/SidebarOrder';
import Footer from '../Footer/Footer';

export default class EditOrderPost extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      postalNo: "",
      street: "",
      town: "",
      contactNo: "",
      orderDate: "",
      status: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })

  }

  onSubmit = (e) => {

    e.preventDefault();
    const id = this.props.match.params.id;

    const { name, postalNo, street, town, contactNo, orderDate, status } = this.state;

    const data = {
      name: name,
      postalNo: postalNo,
      street: street,
      town: town,
      contactNo: contactNo,
      orderDate: orderDate,
      status: status

    }

    console.log(data)

    axios.put(`http://localhost:8000/post/update/${id}`, data).then((res) => {
      if (res.data.success) {

        swal("Update Successful", "Update is recorder", "success");
        this.setState(
          {
            name: "",
            postalNo: "",
            street: "",
            town: "",
            contactNo: "",
            orderDate: "",
            status: ""

          }
        )
      }
    })
  }

  componentDidMount() {

    const id = this.props.match.params.id;


    axios.get(`http://localhost:8000/post/${id}`).then((res) => {

      if (res.data.success) {
        this.setState({

          name: res.data.post.name,
          postalNo: res.data.post.postalNo,
          street: res.data.post.street,
          town: res.data.post.town,
          contactNo: res.data.post.contactNo,
          orderDate: res.data.post.orderDate,
          status: res.data.post.status

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (
      <>
       <SidebarOrder/>
      <div className="container">
        <div class="row">
        
    <div class="col-6">
      
      <img src="https://cdn.dribbble.com/users/77598/screenshots/6606509/dribbble2.gif"  className="rounded-circle" />
    </div>
          <div class="col-6">
            <br />
          
            {/* <div className="cardedit" style={{ width: "100%" }}> */}
            <div className = "cardedit">
            <div className="card">
              <div className="card-body">
                <div className="col-md-8 mt-4 mx-auto">
                  <h1 className="h3 mb-3 font-weight-normal adminletter text-center">Order Detail Edit Form </h1>
                  <form className="needs-validation" >
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}  className="adminletter">Customer Name: </label>
                      <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Your Name"
                        value={this.state.name}
                        readonly
                        onChange={this.handleInputChange} />
                    </div>


                    <label style={{ marginBottom: '5px' }} className="adminletter" >Address: </label>
                    <div class="row">
                      <div class="col">
                        <input type="text"
                          className="form-control "
                          name="postalNo"
                          placeholder="postal no"
                          value={this.state.postalNo}
                          onChange={this.handleInputChange} />
                      </div>
                      <div class="col">
                        <input type="text"
                          className="form-control"
                          name="street"
                          placeholder="street"
                          value={this.state.street}
                          onChange={this.handleInputChange} />
                      </div>
                      <div class="col">
                        <input type="text"
                          className="form-control"
                          name="town"
                          placeholder="town"
                          value={this.state.town}
                          onChange={this.handleInputChange} />
                      </div>
                    </div>



                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}  className="adminletter">Contact Number</label>
                      <input type="text"
                        className="form-control"
                        name="contactNo"
                        placeholder="Enter Contact Number"
                        value={this.state.contactNo}
                        onChange={this.handleInputChange} />
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}  className="adminletter">Order Date</label>
                      <input type="date"
                        className="form-control"
                        name="orderDate"
                        placeholder="Date"
                        value={this.state.orderDate}
                        onChange={this.handleInputChange} />
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}  className="adminletter">Status</label>
                      <input type="text"
                        className="form-control"
                        name="status"
                        placeholder="pending"
                        value={this.state.status}
                        onChange={this.handleInputChange} />
                    </div>

                    <br />
                    <br />
                    <div className="text-center">
                      <button className="btn btn-primary" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                      </button>

                    </div>
                  </form>

                </div>
              </div>
            </div>
            </div>
          </div>

        </div>
        
        <br />
        <br />
        <Footer />
      </div>
      </>
    )
  }
}
