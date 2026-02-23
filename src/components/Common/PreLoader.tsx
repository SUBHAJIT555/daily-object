import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-gray-1">
      <div className="h-14 w-14 sm:h-16 sm:w-16 animate-spin rounded-full border-[3px] sm:border-4 border-solid border-gray-3 border-t-[var(--color-primary)]"></div>
    </div>
  );
};

export default PreLoader;
