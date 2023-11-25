import React, { useContext, useState } from "react";
import { ApiData } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function BookingData() {
  const data = useContext(ApiData);
  const [editingId, setEditingId] = useState(null);
  const [editedSeats, setEditedSeats] = useState({}); // State for edited seats
  

  const success = (msg) => {
    toast.success(msg, {
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

  const errorMsg = (msg) => {
    toast.error(msg, {
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

  

  const handleEdit = (id, seats) => {
    setEditingId(id);
    setEditedSeats(seats);
  };

  const handleSave = async (id) => {
    try {
      const response = await fetch(
        `https://bookmyshow-higp.onrender.com/bookings/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ seats: editedSeats }), // Send edited seats
        }
      );

      if (response.ok) {
        
        console.log("Updated successfully");
        setEditingId(null); // Reset the editing state
        success("Booking updated successfully");
        // Show a success notification using react-toastify
        
        
      } else {
        errorMsg("Error updating booking")
        console.error("Error updating:", response.status);
      }
    } catch (error) {
      errorMsg("Error updating booking")
      console.error("Error updating:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://bookmyshow-higp.onrender.com/bookings/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        
        console.log("Deleted successfully");
        
        
        success("Booking deleted successfully");
        
   
        
      } else {
       errorMsg("Error deleting booking")
        console.error("Error deleting:", response.status);
      }
    } catch (error) {
      console.error("Error deleting:", error);
      errorMsg("Error deleting booking")
    }
  };

  const handleEditBooking = (id) => {
    const isConfirm = window.confirm(
      "Are you sure you want to Edit this booking?"
    );
    if (isConfirm) {
      handleSave(id);
    }
  };

  const handleDeleteBooking = (id) => {
    const isConfirm = window.confirm("Are you sure you want to delete?");
    if (isConfirm) {
      handleDelete(id);
    }
  };

  return (
    <>
      <div className="container-fluid pt-5 mt-4">
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
                  {["a1", "a2", "b1", "b2", "c1", "c2"].map((seatKey) => (
                    <td key={seatKey}>
                      {editingId === items._id ? (
                        // Render input fields in edit mode
                        <input
                          type="number"
                          value={editedSeats[seatKey]}
                          onChange={(e) =>
                            setEditedSeats({
                              ...editedSeats,
                              [seatKey]: e.target.value,
                            })
                          }
                          min="0"
                          max="5"
                        />
                      ) : (
                        // Render the seat data
                        items.seats[seatKey]
                      )}
                    </td>
                  ))}
                  <td>
                    {editingId === items._id ? (
                      <button
                        className="btn btn-success"
                        onClick={() => handleEditBooking(items._id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleEdit(items._id, items.seats)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                  <td>
                    {/* <NavLink to={`/bookings/${items._id}`}> */}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteBooking(items._id)}
                    >
                      Delete
                    </button>
                    {/* </NavLink> */}
                  </td>
                </tr>
              ))}

              
            </tbody>
          </table>
        </div>
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
      </div>{" "}
    </>
  );
}

export default BookingData;
