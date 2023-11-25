import React, { useEffect, useState } from "react";

import {} from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LandingPage() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    a1: 0,
    a2: 0,
    b1: 0,
    b2: 0,
    c1: 0,
    c2: 0,
  });

  const success = () => {
    toast.success("Booking saved successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const error = () => {
    toast.error("Error saving booking", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const warning = () => {
    toast.warn("Please select a Movie and Time before booking.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (event, seat) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [seat]: value,
    }));
  };

  useEffect(() => {}, []);
  const handleFormSubmit = async () => {
    // Prepare the data to be sent to the server
    const postData = {
      MovieName: selectedMovie,
      MovieTime: selectedTime,
      seats: formData,
    };

    // Make an HTTP POST request to your server
    try {
      const response = await fetch(
        "https://bookmyshow-higp.onrender.com/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        success();
        // setAlert({ type: "success", message: "Booking saved successfully" });
      } else {
        error();
        // Handle the error (e.g., show a message to the user)
      }
    } catch (error) {
      console.error("Error:", error);
      error();
      // Handle the error (e.g., show a message to the user)
    }
  };

  const resetForm = () => {
    setSelectedMovie(null);
    setSelectedTime(null);
    setFormData({
      a1: 0,
      a2: 0,
      b1: 0,
      b2: 0,
      c1: 0,
      c2: 0,
    });
  };

  const handleBookNow = () => {
    // Display a confirmation dialog
    if (!selectedMovie || !selectedTime) {
      warning()
      return;
    }
    const isConfirmed = window.confirm(
      "Are you sure you want to book this movie?"
    );

    // If user confirms, proceed with form submission
    if (isConfirmed) {
      handleFormSubmit();

      resetForm();
    }
  };

  return (
    <div className="container">
      <h3 className="text-center text-white mt-5 pt-5">Book My Show</h3>

      <form>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card bg-warning">
              <div className="card-body text-center">
                <h5 className="card-title text-center">Select A Movie</h5>
                <hr />

                <div className="d-flex">
                  <div className="">
                    <img
                      src="images/Jawan.jpeg"
                      alt="JawanImg"
                      className="rounded-circle"
                      style={{ width: 50, height: 50 }}
                    />
                  </div>

                  <div className="w-100 pt-3 px-1">
                    <p
                      className={`card-text rounded shadow ${
                        selectedMovie === "Jawan" ? "selected bg-success" : ""
                      }`}
                      onClick={() => handleMovieClick("Jawan")}
                    >
                      Jawan
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-1">
                  <div>
                    <img
                      src="images/Leo.jpeg"
                      alt="LeoImg"
                      className="rounded-circle"
                      style={{ width: 50, height: 50 }}
                    />
                  </div>

                  <div className="w-100 pt-3 px-1">
                    <p
                      className={`card-text rounded shadow ${
                        selectedMovie === "Leo" ? "selected bg-success" : ""
                      }`}
                      onClick={() => handleMovieClick("Leo")}
                    >
                      Leo
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-1">
                  <div>
                    <img
                      src="images/Gadar2.jpeg"
                      alt="Gadar2Img"
                      className="rounded-circle"
                      style={{ width: 50, height: 50 }}
                    />
                  </div>

                  <div className="w-100 pt-3 px-1">
                    <p
                      className={`card-text rounded shadow ${
                        selectedMovie === "Gadar2" ? "selected bg-success" : ""
                      }`}
                      onClick={() => handleMovieClick("Gadar2")}
                    >
                      Gadar 2
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-1">
                  <div>
                    <img
                      src="images/Skanda.jpeg"
                      alt="SkandaImg"
                      className="rounded-circle"
                      style={{ width: 50, height: 50 }}
                    />
                  </div>

                  <div className="w-100 pt-3 px-1">
                    <p
                      className={`card-text rounded shadow ${
                        selectedMovie === "Skanda" ? "selected bg-success" : ""
                      }`}
                      onClick={() => handleMovieClick("Skanda")}
                    >
                      Skanda
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-1">
                  <div>
                    <img
                      src="images/Pathaan.jpeg"
                      alt="PathaanImg"
                      className="rounded-circle"
                      style={{ width: 50, height: 50 }}
                    />
                  </div>

                  <div className="w-100 pt-3 px-1">
                    <p
                      className={`card-text rounded shadow ${
                        selectedMovie === "Pathaan" ? "selected bg-success" : ""
                      }`}
                      onClick={() => handleMovieClick("Pathaan")}
                    >
                      Pathaan
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-1">
                  <div>
                    <img
                      src="images/jailer.jpeg"
                      alt="JailerImg"
                      className="rounded-circle"
                      style={{ width: 50, height: 50 }}
                    />
                  </div>

                  <div className="w-100 pt-3 px-1">
                    <p
                      className={`card-text rounded shadow ${
                        selectedMovie === "Jailer" ? "selected bg-success" : ""
                      }`}
                      onClick={() => handleMovieClick("Jailer")}
                    >
                      Jailer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card text-center bg-warning">
              <div className="card-body">
                <h5 className="card-title">Select A Slot</h5>
                <hr />
                <p
                  className={`card-text rounded shadow ${
                    selectedTime === "09:00AM" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleTimeClick("09:00AM")}
                >
                  09:00 AM
                </p>

                <p
                  className={`card-text rounded shadow ${
                    selectedTime === "12:00PM" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleTimeClick("12:00PM")}
                >
                  12:00 PM
                </p>
                <p
                  className={`card-text rounded shadow ${
                    selectedTime === "03:00PM" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleTimeClick("03:00PM")}
                >
                  03:00 PM
                </p>
                <p
                  className={`card-text rounded shadow ${
                    selectedTime === "06:00PM" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleTimeClick("06:00PM")}
                >
                  06:00 PM
                </p>
                <p
                  className={`card-text rounded shadow ${
                    selectedTime === "09:00PM" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleTimeClick("09:00PM")}
                >
                  09:00 PM
                </p>
                <p
                  className={`card-text rounded shadow ${
                    selectedTime === "12:00AM" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleTimeClick("12:00AM")}
                >
                  12:00 AM
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card text-center bg-warning">
              <div className="card-body">
                <h5 className="card-title">Select Seats</h5>
                <hr />
                {["a1", "a2", "b1", "b2", "c1", "c2"].map((seat) => (
                  <p key={seat} className="fw-bold">
                    {seat.toUpperCase()} :{" "}
                    <input
                      className="w-25"
                      type="number"
                      name={seat}
                      id={seat}
                      value={formData[seat]}
                      onChange={(e) => handleInputChange(e, seat)}
                      min="0"
                      max="5"
                    />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="text-center pb-5 pt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleBookNow}
        >
          Book Now
        </button>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default LandingPage;
