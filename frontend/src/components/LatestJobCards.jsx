import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = ({job}) => {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div>
        <h1 className="font-semibold text-xl text-gray-900">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500 mt-1">India</p>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-xl text-gray-900">{job?.title}</h1>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {job?.description}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-5 flex-wrap">
        <Badge className="text-blue-700 font-semibold px-3 py-1" variant="ghost">
          {job?.position} Positions
        </Badge>

        <Badge className="text-[#F83002] font-semibold px-3 py-1" variant="ghost">
          {job?.jobType}
        </Badge>

        <Badge className="text-[#7209b7] font-semibold px-3 py-1" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;