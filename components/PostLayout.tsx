"use client";

import React, { ReactNode } from "react";

interface PostLayoutProps {
  children: ReactNode;
}

const PostLayout: React.FC<PostLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-charcoal">
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default PostLayout;
