import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Loader2,
  User,
  Mail,
  Phone,
  FileText,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: null,
  });

  // Handle text inputs
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // Handle resume
  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Please select a PDF file.");
      e.target.value = "";
      return;
    }

    setInput({
      ...input,
      file: file,
    });
  };

  // Update profile
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("fullname", input.fullname.trim());
      formData.append("email", input.email.trim());
      formData.append("phoneNumber", String(input.phoneNumber).trim());
      formData.append("bio", input.bio.trim());
      formData.append("skills", input.skills.trim());

      if (input.file) {
        formData.append("file", input.file);
      }

      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));

        toast.success(
          res.data.message || "Profile updated successfully"
        );

        setOpen(false);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong while updating your profile"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[550px] rounded-2xl border border-gray-200 bg-white p-0 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <DialogHeader className="px-7 pt-7 pb-5 border-b bg-gradient-to-r from-purple-50 via-white to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6A38C2] shadow-md">
              <User className="h-5 w-5 text-white" />
            </div>

            <div>
              <DialogTitle className="text-xl font-bold text-gray-900">
                Update Profile
              </DialogTitle>

              <DialogDescription className="mt-1 text-sm text-gray-500">
                Keep your personal and professional details up to date.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={submitHandler}>
          <div className="space-y-5 px-7 py-6">

            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullname"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <User className="h-4 w-4 text-[#6A38C2]" />
                Full Name
              </Label>

              <Input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Enter your full name"
                value={input.fullname}
                onChange={changeEventHandler}
                required
                className="h-11 rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#6A38C2]"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <Mail className="h-4 w-4 text-[#6A38C2]" />
                Email Address
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={input.email}
                onChange={changeEventHandler}
                required
                className="h-11 rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#6A38C2]"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label
                htmlFor="phoneNumber"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <Phone className="h-4 w-4 text-[#6A38C2]" />
                Phone Number
              </Label>

              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                required
                className="h-11 rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#6A38C2]"
              />
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label
                htmlFor="bio"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <BriefcaseBusiness className="h-4 w-4 text-[#6A38C2]" />
                Bio
              </Label>

              <Input
                id="bio"
                name="bio"
                type="text"
                placeholder="Example: Full Stack Developer"
                value={input.bio}
                onChange={changeEventHandler}
                className="h-11 rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#6A38C2]"
              />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label
                htmlFor="skills"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <Sparkles className="h-4 w-4 text-[#6A38C2]" />
                Skills
              </Label>

              <Input
                id="skills"
                name="skills"
                type="text"
                placeholder="React, Node.js, MongoDB, Java"
                value={input.skills}
                onChange={changeEventHandler}
                className="h-11 rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#6A38C2]"
              />

              <p className="text-xs text-gray-400">
                Separate your skills using commas.
              </p>
            </div>

            {/* Resume */}
            <div className="space-y-2">
              <Label
                htmlFor="file"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <FileText className="h-4 w-4 text-[#6A38C2]" />
                Resume
              </Label>

              <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-3 transition hover:border-[#6A38C2] hover:bg-purple-50/40">
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={fileChangeHandler}
                  className="cursor-pointer border-0 bg-transparent shadow-none file:mr-4 file:rounded-md file:border-0 file:bg-[#6A38C2] file:px-3 file:py-1 file:text-sm file:font-medium file:text-white hover:file:bg-[#5b30a8]"
                />

                <p className="mt-2 text-xs text-gray-400">
                  PDF files only
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="flex gap-3 border-t bg-gray-50/70 px-7 py-5 sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
              className="h-11 rounded-lg px-6 font-semibold"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="h-11 min-w-[150px] rounded-lg bg-[#6A38C2] px-6 font-semibold text-white shadow-md transition-all hover:bg-[#5b30a8] hover:shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Profile"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;