import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { GiChocolateBar } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";
import Chocolate from "./Chocolate";
import Swal from "sweetalert2";

const Home = () => {
  const loaderChocolates = useLoaderData();

  const [chocolates, setChocolates] = useState(loaderChocolates);

  const handleDeleteChocolate = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              const remainingChocolates = chocolates.filter(
                (chocolate) => chocolate._id !== _id
              );
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setChocolates(remainingChocolates);
            }
          });
      }
    });
  };

  return (
    <div className="w-3/4 mx-auto p-10 border rounded-lg">
      <Link to="/addChocolate">
        <button className="flex items-center gap-2 border px-4 py-3 rounded-lg">
          <BsPlusCircleFill className="text-[#331105]" />
          New Chocolate
          <GiChocolateBar className="text-[#331105]" />
        </button>
      </Link>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Country/Factory</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {chocolates.length > 0 ? (
                chocolates.map((chocolate) => (
                  <Chocolate
                    key={chocolate._id}
                    chocolate={chocolate}
                    setChocolates={setChocolates}
                    chocolates={chocolates}
                    handleDeleteChocolate={handleDeleteChocolate}
                  ></Chocolate>
                ))
              ) : (
                <div>
                  <h3>No Data Added</h3>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
