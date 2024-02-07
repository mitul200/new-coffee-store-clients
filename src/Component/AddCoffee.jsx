import Swal from 'sweetalert2'

const AddCoffee = () => {


    const handelCoffee =(event)=>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const quentity = form.quentity.value
        const suplier = form.suplier.value
        const tast = form.tast.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const user = {name,quentity,suplier,tast,category,details,photo};
        console.log(user)

        // send data to the server 
        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedID){
            Swal.fire({
              title: 'Success!',
              text: 'user Added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
          
        })
    }


  return (
    <div className=" bg-[#FAF3F0] p-24">
      <form onSubmit={handelCoffee}>
        {/* row //// */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              name="name"
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
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          className="btn bg-[#6F4E37] w-full mt-3"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
