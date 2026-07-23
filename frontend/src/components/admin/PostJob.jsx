import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const companyArray = [];

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { companies } = useSelector(store => store.company);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find(
            (company) => company.name.toLowerCase() === value
        );
        setInput({ ...input, companyId: selectedCompany._id });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const res = await axios.post(
                `${JOB_API_END_POINT}/post`,
                input,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }

        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#f8f9fb]">
            <Navbar />

            <div className='flex items-center justify-center w-screen my-10 px-4'>

                <form
                    onSubmit={submitHandler}
                    className='w-full max-w-4xl bg-white p-8 md:p-10 border border-gray-200 shadow-sm rounded-xl'
                >

                    {/* Heading */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Post a Job
                        </h1>

                        <p className="text-sm text-gray-500 mt-1">
                            Fill in the details below to create a new job opening.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5'>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">
                                Title
                            </Label>

                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="h-11 mt-2 bg-white border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900 focus-visible:ring-offset-0"
                            />
                        </div>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">
                                Description
                            </Label>

                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="h-11 mt-2 bg-white border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900 focus-visible:ring-offset-0"
                            />
                        </div>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">
                                Requirements
                            </Label>

                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="h-11 mt-2 bg-white border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900 focus-visible:ring-offset-0"
                            />
                        </div>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">
                                Salary
                            </Label>

                            <Input
                                type="text"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="h-11 mt-2 bg-white border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900 focus-visible:ring-offset-0"
                            />
                        </div>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">
                                Location
                            </Label>

                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="h-11 mt-2 bg-white border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900 focus-visible:ring-offset-0"
                            />
                        </div>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">
                                Job Type
                            </Label>

                            <Input
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="h-11 mt-2 bg-white border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900 focus-visible:ring-offset-0"
                            />
                        </div>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">
                                Experience Level
                            </Label>

                            <Input
                                type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="h-11 mt-2 bg-white border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900 focus-visible:ring-offset-0"
                            />
                        </div>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">
                                No of Position
                            </Label>

                            <Input
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="h-11 mt-2 bg-white border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900 focus-visible:ring-offset-0"
                            />
                        </div>

                        {
                            companies.length > 0 && (
                                <Select onValueChange={selectChangeHandler}>

                                    <SelectTrigger className="w-full h-11 mt-2 bg-white border-gray-300 rounded-md text-gray-700 focus:ring-1 focus:ring-gray-900">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>

                                    <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">

                                        <SelectGroup>

                                            {
                                                companies.map((company) => {
                                                    return (
                                                        <SelectItem
                                                            value={company?.name?.toLowerCase()}
                                                            className="cursor-pointer focus:bg-gray-100 focus:text-gray-900"
                                                        >
                                                            {company.name}
                                                        </SelectItem>
                                                    )
                                                })
                                            }

                                        </SelectGroup>

                                    </SelectContent>

                                </Select>
                            )
                        }

                    </div>

                    {
                        loading ?

                            <Button
                                className="w-full h-11 my-6 bg-black hover:bg-gray-800 text-white rounded-md font-medium transition-colors"
                            >
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                Please wait
                            </Button>

                            :

                            <Button
                                type="submit"
                                className="w-full h-11 my-6 bg-black hover:bg-gray-800 text-white rounded-md font-medium transition-colors"
                            >
                                Post New Job
                            </Button>
                    }

                    {
                        companies.length === 0 &&
                        <p className='text-sm text-red-600 font-medium text-center'>
                            *Please register a company first, before posting a jobs
                        </p>
                    }

                </form>

            </div>
        </div>
    )
}

export default PostJob