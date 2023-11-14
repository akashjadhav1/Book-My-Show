import React, { useState } from "react";

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

  const handleFormSubmit = async () => {
    // Prepare the data to be sent to the server
    const postData = {
      MovieName: selectedMovie,
      MovieTime: selectedTime,
      seats: formData,
    };

    // Make an HTTP POST request to your server
    try {
      const response = await fetch("http://localhost:3000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("Booking saved successfully");
        // Optionally reset the form or perform other actions upon successful booking
      } else {
        console.error("Error saving booking");
        // Handle the error (e.g., show a message to the user)
      }
    } catch (error) {
      console.error("Error:", error);
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
      window.alert("Please select a Movie and Time before booking.");
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
      <h3 className="text-center text-white mt-5">Book Your Show</h3>

      <form>
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="card bg-warning">
              <div class="card-body text-center">
                <h5 class="card-title text-center">Select A Movie</h5>
                <hr />

                <p
                  className={`card-text rounded shadow ${
                    selectedMovie === "Jawan" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleMovieClick("Jawan")}
                >
                  Jawan
                </p>

                <p
                  className={`card-text rounded shadow ${
                    selectedMovie === "Leo" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleMovieClick("Leo")}
                >
                  Leo
                </p>
                <p
                  className={`card-text rounded shadow ${
                    selectedMovie === "OMG2" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleMovieClick("OMG2")}
                >
                  OMG 2
                </p>

                <p
                  className={`card-text rounded shadow ${
                    selectedMovie === "Skanda" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleMovieClick("Skanda")}
                >
                  Skanda
                </p>

                <p
                  className={`card-text rounded shadow ${
                    selectedMovie === "Fukrey3" ? "selected bg-success" : ""
                  }`}
                  onClick={() => handleMovieClick("Fukrey3")}
                >
                  Fukrey 3
                </p>

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

          <div class="col-sm-6 col-md-4">
            <div class="card text-center bg-warning">
              <div class="card-body">
                <h5 class="card-title">Select A Slot</h5>
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

          <div class="col-sm-6 col-md-4">
            <div class="card text-center bg-warning">
              <div class="card-body">
                <h5 class="card-title">Select Seats</h5>
                <hr />
                {["a1", "a2", "b1", "b2", "c1", "c2"].map((seat) => (
                  <p key={seat} class="fw-bold">
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

      <div className="text-center pb-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
