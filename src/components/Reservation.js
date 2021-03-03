import React from 'react';
import '../App.css';
import Sparkles from 'react-sparkle';

const Reservation = () => {
    return(
        <div id="reservation">
            <div id="data">
                <h3>Reservations</h3>
      
                <p>For parties of six or more, we recommend making reservations at least two weeks in advance. For walk-ins, we only seat parties on a first come, first served basis.
                </p>
            </div>
        <div id="form">

        <form action="submit">
        <div class="form-group row">
            <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
            </div>
        </div>
        <div class="form-group">
            <label for="exampleInput">Phone No.</label>
            <input type="tel" class="form-control" maxLength="10" placeholder="Enter Phone no." pattern="\d{10}" title="Please enter exactly 10 digits"  />
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your data with anyone else.</small>
        </div>

        <div class="form-group">
            <label for="exampleInput">Date</label>
            <input type="date" class="form-control" />
        </div> 

        <div class="form-group">
            <label for="exampleInput">Number of guests</label>
            <input type="number" class="form-control" />
        </div> 

        <div class="form-group">
            <label for="exampleInput">Comments</label>
            <textarea class="form-control" id="" cols="10" rows="5"></textarea>
        </div> 



  <button type="submit" class="btn btn-primary">Submit</button>

        </form>
        </div>
        </div>
    )
};

export default Reservation;