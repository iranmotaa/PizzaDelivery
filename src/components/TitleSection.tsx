import React from "react";

export default function TitleSection({ title }) {
  return (
    <>
      <div className="pl-4 flex justify-center">
        <div className="my-5">
          <h2 className="sm:text-4xl">{title}</h2>
        </div>
      </div>
    </>
  );
}
