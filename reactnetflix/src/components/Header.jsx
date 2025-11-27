import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/UserSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      console.log(res);
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-56"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="24px" color="white" />
          <h1 className="text-lg font-meduim text-white">{user.fullName} </h1>
          <div className="ml-4">
            <button
              onClick={handleLogOut}
              className="bg-red-800 text-white px-4 py-2"
            >
              Logout
            </button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2   ">
              Search Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
