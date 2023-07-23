import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="w-full fixed top-0 z-10 bg-white flex items-center justify-center py-5 px-4">
        <div className="max-w-4xl w-full flex items-start justify-between">
          <div>
            <Link href="/" className="text-primary font-semibold">
              BaluFood
            </Link>
          </div>
          <div>
            <Link
              href="/menu"
              className="mr-3 hover:text-primary transition-all"
            >
              Menu
            </Link>
            <Link
              href="/categories"
              className="hover:text-primary transition-all"
            >
              Caregories
            </Link>
          </div>
        </div>
      </header>

      <div className="min-h-screen">{children}</div>

      <footer className="bg-footerBg text-center p-3">
        <a
          className="text-white"
          href="https://github.com/arashzareiJS"
          target="_blank"
          rel="noreferrer"
        >
          Created By Arash-Zarei | ReactJS & NextJS Developer
        </a>
      </footer>
    </>
  );
};

export default Layout;
