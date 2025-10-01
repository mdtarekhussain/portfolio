"use client"; // এই লাইনটি অবশ্যই প্রথমে থাকতে হবে

import Photo from "@/components/photo";
import Socials from "@/components/socials";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useState } from "react"; // useState ইমপোর্ট করুন

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = '/assets/tarek.pdf';
      link.download = 'tarek-cv.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8">
          {/* Left Text Section */}
          <div className="text-center md:text-left order-2 md:order-none flex-1">
            <span className="text-xl text-white/90">Web Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text text-[#39e629]">Tarek Hossain</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <span>{isDownloading ? 'Downloading...' : 'Download CV'}</span>
                <FiDownload className="text-[18px]" />
              </Button>

              <div className="mb-8 md:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border br rounded-full flex justify-center items-center text text-base hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Photo Section */}
          <div className="order-1 md:order-none flex-1 flex justify-center">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}