import React, { useState } from "react";
import { assets } from "../assets/assets";

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Ashutosh Pandey",
    image: assets.profile_pic,
    email: "ashu22@gmail.com",
    phone: "8892206651",
    address: {
      line1: "57th cross, Richmond",
      line2: "Circle, Church Road, Delhi",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-8">
          My Profile
        </h1>
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={userData.image}
            alt=""
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md border-4 border-[#1C352D] object-cover mb-4"
          />
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="text-lg font-semibold text-gray-700 border-2 rounded-lg border-gray-300 focus:outline-none focus:border-[#1C352D] text-center"
            />
          ) : (
            <p className="text-xl font-semibold text-gray-800">
              {userData.name}
            </p>
          )}
        </div>
        <hr className="my-6 border-gray-500" />
        <div>
          <p className="text-lg font-semibold text-[#1C352D] mb-4">
            Contact Information
          </p>
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-cente mb-3">
              <p className="font-medium text-gray-600">Email id:</p>
              <p className="text-gray-800">{userData.email}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-cente mb-3">
              <p className="font-medium text-gray-600">Phone:</p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="border-2 rounded-lg px-2 border-gray-300 focus:outline-none focus:border-[#1C352D] text-gray-800"
                />
              ) : (
                <p className="text-gray-800">{userData.phone}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
              <p className="font-medium text-gray-600">Address:</p>
              {isEdit ? (
                <p>
                  <input
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev.address,
                        line1: e.target.value,
                      }))
                    }
                    className="border-2 rounded-lg px-2 border-gray-300 focus:outline-none focus:border-[#1C352D] text-gray-800"
                  />{" "}
                  <br />
                  <input
                    type="text"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev.address,
                        line2: e.target.value,
                      }))
                    }
                    className="border-2 rounded-lg px-2 border-gray-300 focus:outline-none focus:border-[#1C352D] text-gray-800"
                  />
                </p>
              ) : (
                <p className="text-gray-800">
                  {userData.address.line1} <br /> {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-[#1C352D] mb-4">
            Basic Information
          </p>
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-cente mb-3">
              <p className="font-medium text-gray-600">Gender:</p>
              {isEdit ? (
                <select
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                  className="border-2 rounded-lg px-2 border-gray-300 focus:outline-none focus:border-[#1C352D] text-gray-800"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                // <input
                //   type="text"
                //   value={userData.gender}
                //   onChange={(e) =>
                //     setUserData((prev) => ({
                //       ...prev,
                //       gender: e.target.value,
                //     }))
                //   }
                //
                // />
                <p className="text-gray-800">{userData.gender}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-cente mb-3">
              <p className="font-medium text-gray-600">DOB: </p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  className="border-2 rounded-lg px-2 border-gray-300 focus:outline-none focus:border-[#1C352D] text-gray-800"
                />
              ) : (
                <p className="text-gray-800">{userData.dob}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
