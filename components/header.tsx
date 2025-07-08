"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AlignJustify, X } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-[#0C1424] flex item-center justify-center sticky top-0 z-50">
      <nav className="container sm:px-14 px-6 py-10 flex item-center justify-between sm:justify-baseline">
        <img
          src="https://xbetagents.com/wp-content/uploads/2024/04/1xbet-logo.png"
          alt=""
          className="h-12 max-w-full"
        />
        <Menu as="div" className="relative inline-block text-left sm:hidden">
          {({ open }) => (
            <>
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#686C74] px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs">
                  {open ? (
                    <X aria-hidden="true" className="size-6 text-white" />
                  ) : (
                    <AlignJustify
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  )}
                </MenuButton>
              </div>

              <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="/"
                        className={`block px-4 py-2 text-sm ${
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "bg-[#3F444A] text-white"
                        }`}
                      >
                        Home
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#benifits"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Benifits
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#conditions"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Conditions
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#opportunities"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Opportunities
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#contacts"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Contacts
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </>
          )}
        </Menu>
        <div className="sm:flex item-center justify-center text-white w-full hidden">
          <ul className="flex gap-12 items-center justify-center font-semibold">
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="#benifits">Benifits</a>
            </li>
            <li>
              <a href="#conditions">Conditions</a>
            </li>
            <li>
              <a href="#opportunities">Opportunities</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
          <button className="uppercase bg-[#78A32F] rounded-md px-8 text-base ms-12 hidden sm:block">
            Become an agent
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
