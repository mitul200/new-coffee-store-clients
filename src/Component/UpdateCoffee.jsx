import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);

  const { photo,_id, name, quentity, suplier, tast, details, category } = coffee;

  const handelUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quentity = form.quentity.value;
    const suplier = form.suplier.value;
    const tast = form.tast.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = { name, quentity, suplier, tast, category, details, photo };
    console.log(updateCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update coffee successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className=" bg-[#FAF3F0] p-24">
        <Link to={'/updateCoffee'}><button className="btn btn-warning mb-5">Back home</button></Link>
      <form onSubmit={handelUpdateCoffee}>
        {/* row //// */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              name="name"
              defaultValue={name}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">quentity</span>
            </label>
            <input
              type="quentity"
              placeholder="quentity"
              name="quentity"
              defaultValue={quentity}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* row //// */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">suplier</span>
            </label>
            <input
              type="suplier"
              placeholder="suplier"
              name="suplier"
              defaultValue={suplier}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">tast</span>
            </label>
            <input
              type="tast"
              placeholder="tast"
              name="tast"
              defaultValue={tast}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* row //// */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <input
              type="category"
              placeholder="category"
              name="category"
              defaultValue={category}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">details</span>
            </label>
            <input
              type="details"
              placeholder="details"
              name="details"
              defaultValue={details}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* row //// */}
        <div className="md:flex">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">photo</span>
            </label>
            <input
              type="photo"
              placeholder="photo"
              name="photo"
              defaultValue={photo}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          className="btn bg-[#6F4E37] w-full mt-3"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
