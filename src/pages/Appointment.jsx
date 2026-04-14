import React, { forwardRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, doctors } from "../assets/assets";
import Button from "../components/Button";
import RelatedDoc from "../components/RelatedDoc";

const Appointment = () => {
  const { docId } = useParams();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let slots = [];

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + 1);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // increment currenttime by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div className="mx-4 sm:mx-[6%] mb-30">
        {/* ---------Doctoe details-------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-[#1C352D] border rounded-xl">
            <img
              src={docInfo.image}
              alt=""
              className="w-full sm:w-65 xl:w-72 h-full"
            />
          </div>
          <div className="flex-1 border border-[#1C352D] p-3 sm:p-7 rounded-xl text-[#1C352D]">
            {/* -------Doctor Info------ */}
            <p className="flex gap-3 mb-1 text-2xl font-medium items-center">
              {docInfo.name}{" "}
              <img
                src={assets.verified_icon}
                alt=""
                className="w-[16px] h-[16px]"
              />
            </p>
            <div className="flex gap-3 mb-2">
              <p className="text-[14px] text-gray-600">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="text-xs border border-[#1C352D] text-[#1C352D] px-2 py-0.5 rounded-full font-medium">
                {docInfo.experience}
              </button>
            </div>

            {/* --------Doctor About-------- */}
            <div>
              <p className="flex gap-2 text-[18px] font-semibold items-center mb-1">
                About{" "}
                <img
                  src={assets.info_icon}
                  alt=""
                  className="w-[14px] h-[14px]"
                />
              </p>
              <p className="text-[15px] text-gray-600">{docInfo.about}</p>
            </div>
            <p className="text-[#1C352D] font-medium mt-4">
              Appointment fee: <span>$ {docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* ----------Booking Slots--------- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 mb-10 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-[#1C352D] text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-[#1C352D] text-white"
                      : "border border-gray-200"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <div className="mt-8">
            <Button variant="primary">Book an Appointment</Button>
          </div>
        </div>

        {/* ---------Listing Related Doctors--------- */}
        <hr />
        <RelatedDoc docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
