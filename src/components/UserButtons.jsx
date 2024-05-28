import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserButtons = () => {
  return <div>
    <button className="px-2 relative">
      <FontAwesomeIcon icon={faCartShopping}/>
      <div id="cart-amount" className="absolute inline-flex items-center justify-center w-6 h-6 text-white bg-red-500 border-2 border-white rounded-full -top-4 -right-2">
        3
      </div>
    </button>
    <Link className="px-2" to="/history">
      <FontAwesomeIcon icon={faUser}/>
    </Link>
  </div>
};

export default UserButtons;