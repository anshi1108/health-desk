import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <div className="content">
        <div className="main-content">
          <div
            id="servicesCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="text-carousel-item">
                  <h2>Welcome to Health-Desk</h2>
                  <p>
                    At Health-Desk, we strive to revolutionize digital
                    healthcare by providing seamless access to medical services
                    at your fingertips. Our mission is to make healthcare
                    accessible, convenient, and efficient for everyone.
                  </p>
                  <p>
                    <strong>"Your Health, Our Priority"</strong>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.signupgenius.com/cms/socialMediaImages/appointment-scheduling-blog-facebook-1200x630.png"
                  className="d-block w-100"
                  alt="Appointments"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Appointment Scheduling</h5>
                  <p>Book appointments with ease using our app.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.247digitize.com/wp-content/uploads/2021/08/Why-Medical-Records-Management-Is-Essential-for-Healthcare-Providers.jpg"
                  className="d-block w-100"
                  alt="Health Records"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Manage Health Records</h5>
                  <p>
                    Access and update your medical history anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#servicesCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#servicesCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="dashboard-cardshome">
          <div className="dashboard-card">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210730/pngtree-doctor-background-writing-medical-advice-on-folder-medical-record-image_754578.jpg"
              alt="Healthcare Records"
              className="card-image"
            />
            <div className="card-content">
              <h4>Healthcare Records</h4>
              <a href="/records">View Records</a>
            </div>
          </div>
          <div className="dashboard-card">
            <img
              src="https://thumbs.dreamstime.com/b/hospital-map-pin-icon-flat-illustration-hospital-map-pin-vector-icon-web-design-hospital-map-pin-icon-flat-style-116839872.jpg"
              alt="Nearby Hospital Locator"
              className="card-image"
            />
            <div className="card-content">
              <h4>Nearby Hospital Locator</h4>
              <a href="/hospital-locator">Find Hospitals</a>
            </div>
          </div>
          <div className="dashboard-card">
            <img
              src="https://dexatel.com/images/blog/135/cover/patient-appointment-scheduling.webp"
              alt="Schedule Appointment"
              className="card-image"
            />
            <div className="card-content">
              <h4>Schedule Appointment</h4>
              <a href="/appointment-scheduling">Book Now</a>
            </div>
          </div>
          <div className="dashboard-card">
            <img
              src="https://www.gigadocs.com/blog/wp-content/uploads/2020/08/senior-woman-video-calling-doctor_274689-5683.jpg"
              alt="Video Call Scheduling"
              className="card-image"
            />
            <div className="card-content">
              <h4>Video Call Scheduling</h4>
              <a href="/video-call">Schedule Video Call</a>
            </div>
          </div>
          <div className="dashboard-card">
            <img
              src="https://qupapp.com/assets/img/services/00-07.png"
              alt="Texting with Doctor"
              className="card-image"
            />
            <div className="card-content">
              <h4>Texting with Doctor</h4>
              <a href="/doctor-chat">Start Chat</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
