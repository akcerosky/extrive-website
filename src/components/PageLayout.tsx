import React from "react";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white">{children}</div>
);

export default PageLayout;