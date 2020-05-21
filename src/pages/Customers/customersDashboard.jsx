import React from "react";
import Header from "../../components/Header/Header";

const CustomersDashboard = () => (
  <div className="flex bg-gray-200 h-screen">
    <div className="bg-white w-64 m-0 p-0 fixed h-full overflow-auto shadow-lg">
      <div className="flex flex-col text-center justify-center">
          <div className="mx-auto my-4">
              <Header />
          </div>
        <div className="bg-red-500 rounded-full m-auto h-16 w-16 my-4 flex items-center justify-center">
          <h1 className="text-white uppercase text-2xl">A</h1>
        </div>
        <h1 className="text-gray-900 capitalize text-xl">Akalonu</h1>
      </div>
    </div>

    <div className="ml-64 my-4 px-6">
      <h1>Something incredible is about to be created in this customers dashboard, stay tuned!</h1>
    </div>
  </div>
);

export default CustomersDashboard;
