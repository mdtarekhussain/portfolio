"use client"
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'; // useState যোগ করুন
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Service', path: '/service' },
  { name: 'Resume', path: '/resume' },
  { name: 'Wark', path: '/wark' },
  { name: 'Contact', path: '/contact' },
];

const MobileNab = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // স্টেট যোগ করুন

  // লিংকে ক্লিক হ্যান্ডলার
  const handleLinkClick = () => {
    setIsOpen(false); // শিট বন্ধ করুন
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}> {/* open এবং onOpenChange যোগ করুন */}
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#39e629]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <SheetHeader className="flex flex-col items-center">
          <SheetTitle className="text-white">
            <div className="mt-16 mb-10 flex justify-center">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  src="https://i.ibb.co/1Y2MgjJK/tarek.jpg"
                  alt="Profile"
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] rounded-full object-cover" // rounded-full যোগ করুন
                />
              </Link>
            </div>
          </SheetTitle>

          <nav className="flex flex-col justify-center items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={handleLinkClick} // onClick হ্যান্ডলার যোগ করুন
                className={`${
                  link.path === pathname && 'border-b-2 pb-2 text-[#39e629] border-[#39e629]' 
                } text-xl capitalize hover:text-[#39e629] transition`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <SheetDescription>{/* Add anything else here */}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNab;