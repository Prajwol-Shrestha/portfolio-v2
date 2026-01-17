"use client";

import cn from "@/utils/cn";
import Typography from "../ui/Typography";

type ContactInfo = {
  label: string;
  value: string;
  icon: React.ReactNode;
  type: string;
};

interface IProps {
  contactInfos: ContactInfo[];
  className?: string;
}

export default function ContactInfoCard({ contactInfos, className }: IProps) {
  function handleContactClick(info: ContactInfo) {
    if (info.type === "email") {
      window.location.href = `mailto:${info.value}`;
      return;
    }
    if (info.type === "tel") {
      window.location.href = `tel:${info.value}`;
      return;
    }

    if (info.type === "linkedin") {
      window.open(info.value, "_blank");
      return;
    }
  }

  return (
    <div
      className={cn(
        "bg-secondary rounded-2xl p-8 space-y-4 border border-border/50 shadow-sm",
        className
      )}
    >
      {contactInfos.map((info, index) => (
        <div
          key={index}
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => handleContactClick(info)}
        >
          {info.icon}
          <Typography variant={"body2"} className="text-gray-400">
            {info.value}
          </Typography>
        </div>
      ))}
    </div>
  );
}
