import cn from "@/utils/cn";
import React from "react";
import Typography from "../ui/Typography";
import Folder from "../folder/folder";

type ICareer = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string;
};

interface IProps {
  className?: string;
  career: ICareer;
}

export default function CareerCard({ className, career }: IProps) {
  const { company, role, duration, responsibilities } = career;
  return (
    <div className={cn("flex gap-8 ", className)}>
      <div className="sm:w-1/2">
        <Typography component="h6" variant={"h6"} className="font-semibold">
          {" "}
          {company}{" "}
        </Typography>
        <Typography variant={"h6"}> {role} </Typography>
        <Typography variant={"body2"} className="text-gray-400 my-2">
          {" "}
          {duration}{" "}
        </Typography>
        <Typography variant={"body2"} className="text-gray-400">
          {" "}
          {responsibilities}{" "}
        </Typography>
      </div>
      <div className="hidden sm:flex sm:items-center sm:justify-center w-1/2">
        <Folder size={2} color="#5227FF" className="flex items-center justify-center" />
      </div>
    </div>
  );
}
