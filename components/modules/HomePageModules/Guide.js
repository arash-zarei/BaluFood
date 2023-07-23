import React from "react";

import Link from "next/link";

const Guide = () => {
  return (
    <div className="mt-14 grid grid-cols-1 text-center gap-7 sm:grid-cols-3">
      <Link href="/menu" className="guide">Menu</Link>
      <Link href="/categories" className="guide">Categories</Link>
      <Link href="/" className="guide">Discount</Link>
    </div>
  );
};

export default Guide;
