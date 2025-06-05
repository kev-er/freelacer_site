"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactus from './Contactus';


const navigation = [
  { name: "About", href: "#aboutus-section", current: false },
  { name: "Services", href: "#services-section", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsOpenDrawer(false);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center border-right">
                <Link
                  href="/"
                  className="text-2xl sm:text-4xl font-semibold text-black"
                >
                  Kev Builds
                </Link>
              </div>

              {/* DESKTOP LINKS */}
              <div className="hidden lg:flex items-center border-right">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-900" : "navlinks hover:text-black",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* DESKTOP CONTACT BUTTON */}
              <div className="hidden lg:block">
                <button
                  type="button"
                  className="justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white"
                  onClick={openModal}
                >
                  Contact me
                </button>
              </div>
            </div>

            {/* DRAWER ICON */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 cursor-pointer"
                aria-hidden="true"
                onClick={() => setIsOpenDrawer(true)}
              />
            </div>

            {/* DRAWER */}
            <Drawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer}>
              <Drawerdata openModal={openModal} />
            </Drawer>

            {/* GLOBAL MODAL */}
            <Contactusform isOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;

