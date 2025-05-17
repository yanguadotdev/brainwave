import { useEffect, useState } from "react";

import brainwave from "../assets/brainwave.svg";
import { navigation } from "../consts/navigation";
import { Button } from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./Design/Header";

const Header = () => {
    const [currentHash, setCurrentHash] = useState<string>('');
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
        document.body.classList.toggle("overflow-hidden");
    };

    const handleClick = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        }
    };


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentHash(window.location.hash);

            const handleHashChange = () => {
                setCurrentHash(window.location.hash);
            };

            window.addEventListener("hashchange", handleHashChange);
            return () => window.removeEventListener("hashchange", handleHashChange);
        }
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 border-b border-hue-6 lg:bg-hue-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-hue-8" : "bg-hue-8/90 backdrop-blur-sm"
                }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={brainwave.src} width={190} height={40} alt="Brainwave" />
                </a>

                <nav
                    className={`${openNavigation ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 bottom-0 bg-hue-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-hue-1 transition-colors hover:text-theme-1 ${item.onlyMobile ? "lg:hidden" : ""
                                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === currentHash
                                        ? "z-2 lg:text-hue-1"
                                        : "lg:text-hue-1/50"
                                    } lg:leading-5 lg:hover:text-hue-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <a
                    href="#signup"
                    className="button hidden mr-8 text-hue-1/50 transition-colors hover:text-hue-1 lg:block"
                >
                    New account
                </a>
                <Button className="lg:flex hidden" href="#login">
                    Sign in
                </Button>

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </header>
    );
};

export default Header;
