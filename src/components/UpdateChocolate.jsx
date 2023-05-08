import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import Swal from "sweetalert2";

const UpdateChocolate = () => {
  const loadedChocolate = useLoaderData();
  console.log(loadedChocolate);
  const { _id, name, country, photo, price, category } = loadedChocolate;

  const navigate = useNavigate();

  const handleUpdateChocolate = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const country = form.country.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const category = form.category.value;

    const updatedChocolate = { name, country, photo, price, category };
    console.log(updatedChocolate);

    fetch(`http://localhost:5000/chocolates/${_id}`, {
        method: "PUT",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(updatedChocolate)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            Swal.fire(
                'Updated Successfully',
                'Now Go Back to Home Page',
                'success'
              )
              navigate('/')
        }
    })
  };
  return (
    <div className="w-3/4 mx-auto p-10 border rounded-lg">
      <Link to="/">
        <button className="flex items-center gap-2 border px-4 py-3 rounded-lg">
          <IoIosArrowRoundBack className="text-[#331105]" />
          All Chocolates
        </button>
      </Link>
      <div className="divider"></div>
      <div className="bg-[#F3F3F3] rounded-lg  py-12">
        <div className="space-y-3 text-center">
          <h3 className="text-2xl font-semibold">New Chocolate</h3>
          <p className="text-[#8D8D8D]">
            Use the below form to create a new product
          </p>
        </div>
        <form
          className="w-3/4 mx-auto mt-5 space-y-2"
          onSubmit={handleUpdateChocolate}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Hot Pink Chocolate"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Country/Factory</span>
            </label>
            <input
              type="text"
              name="country"
              defaultValue={country}
              placeholder="Enter Country/Factory Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Image URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter Image URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter Price"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control ">
            <div className="">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="category"
                defaultValue={category}
              >
                <option>Premium</option>
                <option>Elite</option>
                <option>Regular</option>
              </select>
            </div>
          </div>

          <label className="label">
            <input
              type="submit"
              value="Save"
              className="text-center w-full bg-[#91572B] text-white font-semibold py-3 px-4 rounded-lg cursor-pointer"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default UpdateChocolate;
