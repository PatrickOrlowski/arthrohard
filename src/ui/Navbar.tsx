"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        style={{
          height: "122px",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <Image
          src={"/assets/images/Arthrohard.png"}
          alt={"page-logo"}
          width={239}
          height={29}
          className={"max-w-1/3"}
        />
        {/* Desktop menu */}
        <ol className="hidden items-center space-x-4 uppercase md:flex max-w-1/3">
          <li>
            <Link href="/" className="!hover:underline">
              Co nas wyroznia
            </Link>
          </li>

          <li>
            <Link href="/" className="!hover:underline">
              Sklad
            </Link>
          </li>
          <li>
            <Link href="/" className="!hover:underline">
              Produkty
            </Link>
          </li>
        </ol>

        {/* Mobile menu button */}
        <div className={"max-w-1/3"}>
          <button className="md:hidden" onClick={toggleMenu}>
            <Image
              src={"/assets/icons/Vector.svg"}
              alt={"menu"}
              width={18}
              height={12}
            />
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="absolute top-[122px] left-0 w-full bg-white shadow-lg md:hidden"
          style={{
            backgroundColor: "#AD4844",
          }}
        >
          <ol className="flex flex-col text-white p-4 gap-10 uppercase items-center">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white block hover:underline"
              >
                Co nas wyroznia
              </Link>
            </li>

            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Sklad
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Produkty
              </Link>
            </li>
          </ol>
        </div>
      )}
    </>
  );
};

export default Navbar;
