import axios from "axios";
import React, { useState, useEffect } from "react";

export const PlantDetails = (props) => {
  const { data } = props;
  const [Plant, setPlant] = useState([]);

  useEffect(() => {
    axios
      .get(`https://water-plants-api.herokuapp.com/plants/${data.id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [data.id]);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        {/* {Plant.map(plant => (
					<h1>{plant.name}hELLOwoRLD</h1>
				))} */}

        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Plant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Your Plants Personal Information
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Plant name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            PLANT NAME GOES HERE
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Plant Nickname
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              NICKNAME GOES HERE
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Plant Species</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              PLANT SPECIES GOES HERE!
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">H20 Frequency</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              H20 FREQUENCY GOES HERE
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Plant Image</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              IMAGE GOES HERE -YGFDAYUIGDAYUIG DIY A U S G D A Y U D G A
              YUSDGUYASIGDY UAIGDAYUGDAY U G DSAYUGDIAD GAYUTIDGW AWDYU ADYU
              AWYUGD A U YWAGDGAUW YD G Y SADADADFATYDFAYTFDYTA FWDTYA
              FWDTYAUWAIYU YUWA DYUW UG WUY DYUGW DGAYUW DGAYUD S ADADADADSAD A
              UY
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Need To Change Something?
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Edit
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PlantDetails;
