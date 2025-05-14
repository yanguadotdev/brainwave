import { curve, heroBackground, robot, homeSmile, file02, plusSquare, searchMd } from "../consts/Hero";
import { Button } from "../components/Button";
import Section from "../components/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../components/Design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../components/Generating";
import Notification from "../components/Notification";
import ClientsSlider from "../components/ClientsSlider";

export function Hero() {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.75rem]"
      customPaddings
      id="hero"
    >
      <div className="container mx-auto relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 font-semibold text-white mb-6">
            Unlock the power&nbsp;of&nbsp;AI Chatting&nbsp;with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve.src}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-sm leading-normal max-w-3xl mx-auto mb-6 md:text-base lg:text-xl text-white/80 lg:mb-8">
            Let Brainwave awaken your AI power. Elevate how you think, work, and create with the open AI chat experience.
          </p>
          <Button className="inline-flex" href="/pricing" white>
            Get started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-hue-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-hue-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot.src}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-hue-9/40 backdrop-blur border border-hue-1/10 rounded-2xl xl:flex">
                    {[homeSmile, file02, plusSquare, searchMd].map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon.src} width={24} height={25} alt='' />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground.src}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <ClientsSlider className="relative z-10 mt-20 block" />
      </div>

      <BottomLine />
    </Section>
  );
};

