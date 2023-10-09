import React from "react";

export const FormTitle = ({ title }) => {
  return (
    <p
      htmlFor="images"
      className="uppercase text-zinc-800 font-semibold sm:text-lg md:text-xl bg-zinc-200 drop-shadow-md w-full py-2  px-3 text-center rounded-md my-4"
    >
      {title}
    </p>
  );
};
