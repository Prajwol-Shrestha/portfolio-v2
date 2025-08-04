"use client"

import sendEmail from "@/actions/send-email";
import ContactInfoCard from "@/components/cards/contact-info-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/text-area";
import Typography from "@/components/ui/Typography";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "prajwolshrestha08@gmail.com",
    icon: <Mail className="w-5 h-5 text-gray-400" />,
    type: "email",
  },
  {
    label: "Phone",
    value: "+977 9860080185",
    icon: <Phone className="w-5 h-5 text-gray-400" />,
    type: "tel",
  },
  {
    label: "Address",
    value: "Kathmandu, Nepal",
    icon: <MapPin className="w-5 h-5 text-gray-400" />,
    type: "address",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/prajwol-shrestha-04265a241/",
    icon: <Linkedin className="w-5 h-5 text-gray-400" />,
    type: "linkedin",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isPending, setIsPending] = useState(false)
  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true)
    try {
      const formData = new FormData(e.currentTarget);
      console.log(formData, 'formDataformData')
      const response = await sendEmail(formData);
      setIsPending(false)
      if(response.success) {
        setFormData({ name: '', email: '', message: '' })
        toast.success(response.message);
        return
      }
      toast.error(response.message);
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact-section" className="flex gap-12 justify-between items-center">
      <div className="basis-full sm:basis-2/3">
        <Typography variant={"h5"} component="h5" className="text-highlight">
          Connect with Me
        </Typography>
        <Typography variant={"h4"} className="font-bold mb-6">
          Let's start a project together
        </Typography>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" name="name" placeholder="Random User" required min={3} max={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="random@example.com"
              min={3}
              max={200}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="I want to work with you"
              className="h-30"
              required
              minLength={10}
              maxLength={300}
            />
          </div>
              <Button
            type="submit"
            disabled={isPending}
            className=" flex items-center font-semibold min-w-32 "
          >
            Submit
            <Send className="font-semibold" />
          </Button>
        </form>
      </div>

      <ContactInfoCard
        className="hidden sm:block"
        contactInfos={CONTACT_INFO}
      />
    </section>
  );
}
