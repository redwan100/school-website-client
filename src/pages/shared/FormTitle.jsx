import React from "react";

export const FormTitle = ({ title }) => {
  return (
    <p className="uppercase text-zinc-800 font-semibold sm:text-lg md:text-xl bg-zinc-200 drop-shadow-sm py-2  px-3 text-center rounded-md my-4 max-w-screen-md w-full mx-auto">
      {title}
    </p>
  );
};
