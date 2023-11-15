"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type NavbarMenu = {
  title: string;
  menu: {
    title: string;
    listMenu: { title: string; link: string }[];
  }[];
};

export default function HeadlessuiPopover({ title, menu }: NavbarMenu) {
  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                "text-black" 
                group inline-flex items-center rounded-md bg-transparent px-3 py-2 text-base font-medium  focus:outline-none  focus-visible:ring-none`}
            >
              <span>{title}</span>
              <ChevronDownIcon
                className={`text-black ${open ? "-rotate-180 transform" : ""}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-[24px] z-10 mt-10 bg-white border-[1px solid #DADCE0] rounded-[8px] p-[24px] flex items-stretch w-fit">
                {menu.map((obj, i) => (
                  <section className="flex">
                    <div
                      className={`w-[0.4px] bg-slate-300 mx-[24px] ${
                        i === 0 ? "hidden" : ""
                      }`}
                    ></div>
                    <section>
                      <p
                        className={`text-slate-400 mb-[16px] uppercase ${
                          obj.title ? "" : "hidden"
                        }`}
                      >
                        {obj.title}
                      </p>
                      <section className="flex flex-col items-start gap-[6px] min-w-[180px]">
                        {obj.listMenu.map((obj) => (
                          <Link
                            href={obj.link}
                            className="flex items-center font-bold py-[4px]"
                          >
                            {obj.title}
                            {obj.title === "Lihat Semua" ? (
                              <Image
                                src="/arrowRight.svg"
                                alt="arrow"
                                width={20}
                                height={20}
                                className="ml-2"
                              />
                            ) : null}
                          </Link>
                        ))}
                      </section>
                    </section>
                  </section>
                ))}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
