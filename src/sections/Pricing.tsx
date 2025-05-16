import Section from "../components/Section";
import { smallSphere, stars } from "../consts/pricing";
import Heading from "../components/Heading";
import PricingList from "../components/PricingList";
import { LeftLine, RightLine } from "../components/Design/Pricing";

export default function Pricing () {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        src={smallSphere.src}
                        className="relative z-1"
                        width={255}
                        height={255}
                        alt="Sphere"
                    />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img
                            src={stars.src}
                            className="w-full"
                            width={950}
                            height={400}
                            alt="Stars"
                        />
                    </div>
                </div>

                <Heading
                    tag="Get started with Brainwave"
                    title="Pay once, use forever"
                />

                <div className="relative">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>

                <div className="flex justify-center mt-10">
                    <a
                        className="text-xs font-code font-bold tracking-wider uppercase border-b"
                        href="/pricing"
                    >
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    );
};