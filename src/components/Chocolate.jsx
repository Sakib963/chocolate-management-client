import { FiEdit3 } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Chocolate = ({
  chocolate,
  handleDeleteChocolate,
}) => {
  const { _id, name, country, photo, price, category } = chocolate;
  return (
    <tr>
      <th>
        <img src={photo} alt="" className="h-16 w-16 rounded-lg" />
      </th>
      <td>{name}</td>
      <td>{country}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>
        <div className="space-x-4">
          <Link to={`/updateChocolate/${_id}`}>
            <button
              className="bg-btn p-3 rounded-lg text-[#774320]"
            >
              <FiEdit3 className="text-xl" />
            </button>
          </Link>
          <button
            className="bg-btn p-3 rounded-lg text-[#774320]"
            onClick={() => handleDeleteChocolate(_id)}
          >
            <AiOutlineCloseCircle className="text-xl" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Chocolate;
