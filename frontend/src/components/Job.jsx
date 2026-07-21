import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          beatae distinctio dolorem possimus nulla ex necessitatibus provident a
          vero fuga!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-5 flex-wrap">
              <Badge className="text-blue-700 font-semibold px-3 py-1" variant="ghost">
                12 Positions
              </Badge>
      
              <Badge className="text-[#F83002] font-semibold px-3 py-1" variant="ghost">
                Part Time
              </Badge>
      
              <Badge className="text-[#7209b7] font-semibold px-3 py-1" variant="ghost">
                24 LPA
              </Badge>
            </div>
<div className="flex items-center gap-3 mt-6">
  <Button variant="outline" className="px-6">
    Details
  </Button>

  <Button className="bg-[#7209b7] hover:bg-[#5f32aa] px-6">
    Save For Later
  </Button>
</div>
    </div>
  );
};

export default Job;
