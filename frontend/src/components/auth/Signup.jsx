import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter your name" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="text" placeholder="Enter your email" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="text" placeholder="Enter your Phone Number" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="text" placeholder="Enter your Password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="student"
                className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="Recruiter"
                className="cursor-pointer"
                />
                <Label htmlFor="r2">Recuiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
              accept="image/*"
              type="file"
              className="cursor-pointer"
              />
            </div>
          </div>
          <Button
  type="submit"
  className="w-full bg-black text-white hover:bg-black/90"
>
  SignUp
</Button>
<span className="text-sm">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default signup;
