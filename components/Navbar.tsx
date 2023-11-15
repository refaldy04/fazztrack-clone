import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadlessuiPopover from "./partials/Popover";
import { navbarData } from "@/data";
import ResponsiveDrawer from "./partials/Drawer";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full sticky top-0 z-50" id="navbar">
        <section className="w-full shadow-md min-h-[56px] md:min-h-[76px] flex items-center z-50 bg-white">
          <section className="container px-10 mx-auto flex items-center justify-between relative">
            <section className="flex items-center">
              <Link href="/" className="mr-[64px]">
                <Image src={"/fazz.svg"} alt="fazz" width={100} height={100} />
              </Link>
              <section className="hidden lg:block">
                <ul className="flex items-center gap-[24px]">
                  {navbarData.map((obj, i) => (
                    <li key={i}>
                      <HeadlessuiPopover {...obj} />
                    </li>
                  ))}
                </ul>
              </section>
            </section>
            <ul className="flex items-center gap-[16px]">
              <li className="block lg:hidden">
                <ResponsiveDrawer />
              </li>
            </ul>
          </section>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
