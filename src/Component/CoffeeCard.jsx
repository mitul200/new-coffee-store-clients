/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// import { MdDelete } from "react-icons/md";
const CoffeeCard = ({ coffees }) => {
  console.log(coffees);
  const { photo, _id, name, quentity, suplier, tast, details, category } =
    coffees;

  // handel delete opareation
  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Delete this cart ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your cart has been deleted.",
                icon: "success",
              });
            }
          });

        console.log("delete confirmd");
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl flex justify-around">
      <figure>
        <img className=" w-64 h-64" src={photo} alt="Movie" />
      </figure>

      <div className=" flex align-middle p-6">
        <div className=" mt-5 mr-4">
          <h2 className="card-title uppercase"> Name : {name}</h2>
          <p>{suplier}</p>
          <p>{tast}</p>
          <p>{category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className=" px-2  btn join-item">👁️</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className=" px-2 bg-black btn join-item">🖋️</button>
            </Link>
            <button
              onClick={() => handelDelete(_id)}
              className=" rounded-full px-2 bg-red-700 btn join-item"
            >
              🛢️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
