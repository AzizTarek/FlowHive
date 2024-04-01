import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import "../../public/styles.css";
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});
// Inside your MarketingPage component file
import dynamic from "next/dynamic";
import React from "react";
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Top choice for task management
        </div>
        <div className="container">
          <h1 className="ctext text-3xl md:text-6xl text-center text-neutral-800 mb-6">
            Where ideas buzz and productivity
          </h1>
        </div>

        <div className="text-3xl md:text-6xl bg-gradient-to-r from-neutral-900 to-yellow-400 text-white px-4 p-2 rounded-md  w-fit">
          flourishes.
        </div>
        <div
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          Unlock unparalleled collaboration and elevate your project management
          to new heights with FlowHive. Whether you're in a bustling corporate
          tower or the quiet of your home office, our platform adapts to your
          workflow. Achieve more, together - discover the FlowHive difference.
        </div>
        <Button className="mt-6" size="lg" asChild>
          <Link href={"/sign-up"}>Join for free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
