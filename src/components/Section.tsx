import {type ReactNode } from "react";
import SectionSvg from "../assets/svg/SectionSvg";

interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: ReactNode;
}

const Section = ({
  className,
  id,
  crosses = false,
  crossesOffset = "",
  customPaddings,
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`
        relative 
        ${
          customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
        } 
        ${className || ""}
      `}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-hue-6 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-hue-6 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-hue-6 ${
              crossesOffset
            } pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};

export default Section;
