import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
      <Table>
        <TableCaption className="text-gray-500 text-sm mt-4">
          A list of applied jobs
        </TableCaption>

        <TableHeader>
          <TableRow className="bg-gradient-to-r from-violet-100 to-purple-100 hover:from-violet-100 hover:to-purple-100">
            <TableHead className="font-bold text-gray-700 py-4">
              Date
            </TableHead>
            <TableHead className="font-bold text-gray-700">
              Job Role
            </TableHead>
            <TableHead className="font-bold text-gray-700">
              Company
            </TableHead>
            <TableHead className="text-right font-bold text-gray-700">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[1, 2].map((item, index) => (
            <TableRow
              key={index}
              className="transition-all duration-300 hover:bg-violet-50 hover:scale-[1.01] cursor-pointer"
            >
              <TableCell className="font-medium text-gray-600 py-5">
                22-07-2026
              </TableCell>

              <TableCell className="font-semibold text-gray-900">
                FrontEnd Developer
              </TableCell>

              <TableCell className="font-medium text-gray-700">
                Google
              </TableCell>

              <TableCell className="text-right">
                <Badge className="bg-green-100 text-green-700 border border-green-300 hover:bg-green-100 rounded-full px-4 py-1 text-sm font-semibold">
                  Selected
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;