import { check, pricing } from "../consts/pricing";
import { Button } from "./Button";

const PricingList = () => {
    return (
        <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
                <div
                    key={item.id}
                    className="w-[19rem] max-lg:w-full h-full px-6 bg-hue-8 border border-hue-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-theme-2 [&>h4]:even:text-theme-1 [&>h4]:last:text-theme-3"
                >
                    <h4 className="h4 mb-4">{item.title}</h4>

                    <p className="body-2 min-h-[4rem] mb-3 text-hue-1/50">
                        {item.description}
                    </p>

                    <div className="flex items-center h-[5.5rem] mb-6">
                        {item.price && (
                            <>
                                <div className="h3">$</div>
                                <div className="text-[5.5rem] leading-none font-bold">
                                    {item.price}
                                </div>
                            </>
                        )}
                    </div>

                    <Button
                        className="w-full mb-6 flex"
                        href={item.price ? "/pricing" : "mailto:contact@yangua.dev"}
                        white={!!item.price}
                    >
                        {item.price ? "Get started" : "Contact us"}
                    </Button>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-start py-5 border-t border-hue-6"
                            >
                                <img src={check.src} width={24} height={24} alt="Check" />
                                <p className="body-2 ml-4">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PricingList;
