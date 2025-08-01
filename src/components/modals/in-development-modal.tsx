"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import LottieWrapper from "../lottie-wrapper/lottie-wrapper";
import UnderDevelopment from "@/lotties/under-development.json";

export default function InDevelopmentModal() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-4xl">
            In Development
          </DialogTitle>

          <div className="">
            <LottieWrapper   className="max-w-3xs mx-auto" animationData={UnderDevelopment} />
          </div>
        </DialogHeader>
        <DialogFooter className="!justify-center">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="min-w-28 font-semibold mt-4">
              Got it!
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
