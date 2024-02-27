import React from 'react'
import Layout from './components/Layout/Layout';
import '././styles/TableStyles.css';
const Tables = () => {
  return (
    <Layout>
    <div className="container">
      <div className="container-time">
        <h2 className="heading">Time-Open</h2>
        <h3 className="heading-days">Monday-Friday</h3>
        <p>9am - 1am (breakfast)</p>
        <p>1pm - 10pm (lunch/dinner)</p>

        <hr />

        <h4 className="heading-phone">Call Us: (123) 45-45-456</h4>
      </div>

      <div className="container-form">
        <form action="#">
          <h2 className="heading heading-yellow">Reservation Online</h2>

          <div className="form-field">
            <p>Your Name</p>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-field">
            <p>Your Email</p>
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-field">
            <p>Date</p>
            <input type="date" />
          </div>
          <div className="form-field">
            <p>Time</p>
            <input type="time" />
          </div>
          <div className="form-field">
            <p>How many people</p>
            <select name="select" id="#">
              <option value="1">1 person</option>
              <option value="2">2 persons</option>
              <option value="3">3 persons</option>
              <option value="4">4 persons</option>
              <option value="5">5 persons</option>
              <option value="6">6 persons</option>
            </select>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
   </Layout>
  );
 
}

export default Tables