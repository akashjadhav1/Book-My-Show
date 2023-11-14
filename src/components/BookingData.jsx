import React, { useContext } from "react";
import { ApiData } from "../App";
import { NavLink } from "react-router-dom";

function BookingData() {
  const data = useContext(ApiData);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Update your data context or fetch the updated data
        // For example, refetch the data from the server or update the context state
        console.log("Booking deleted successfully");
      } else {
        console.error("Error deleting booking:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting booking:", error.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="table-responsive overflow-x-auto">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">MovieName</th>
              <th scope="col">MovieTime</th>
              <th scope="col">Seat(A1)</th>
              <th scope="col">Seat(A2)</th>
              <th scope="col">Seat(B1)</th>
              <th scope="col">Seat(B2)</th>
              <th scope="col">Seat(C1)</th>
              <th scope="col">Seat(C2)</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items) => (
              <tr key={items._id}>
                <th scope="row">{items.MovieName}</th>
                <td>{items.MovieTime}</td>
                <td>{items.seats.a1}</td>
                <td>{items.seats.a2}</td>
                <td>{items.seats.b1}</td>
                <td>{items.seats.b2}</td>
                <td>{items.seats.c1}</td>
                <td>{items.seats.c2}</td>
                <td>

                <NavLink to={`/edit/${items._id}`}>
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                </NavLink>

                </td>
                <td>
                  <td>
                    <NavLink to={`${items._id}`}>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(items._id)}
                    >
                      Delete
                    </button>
                    </NavLink>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingData;
