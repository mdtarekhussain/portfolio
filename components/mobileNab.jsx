"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
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
  const pathname = usePathname(); // ✅ usePathname is correct

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#39e629]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <SheetHeader className="flex flex-col items-center">
          <SheetTitle className="text-white">
            <div className="mt-16 mb-10 flex justify-center">
              <Link href="/">
              
                  <Image
                    src="https://i.ibb.co/1Y2MgjJK/tarek.jpg"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="w-full rounded-full object-cover"
                  />
             
              </Link>
            </div>
          </SheetTitle>

          <nav className="flex flex-col justify-center items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname  && 'border-b-2 pb-2 text-[#39e629]  border-[#39e629]' 
                } text-xl capitalize hover:text-[#39e629]
                     transition`}
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
