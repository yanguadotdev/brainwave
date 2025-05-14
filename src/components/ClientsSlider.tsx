import { useEffect } from "react";
import { clients } from "../consts/clients";

interface ClientsSliderProps {
    className: string
}

export default function ClientsSlider({ className }: ClientsSliderProps) {

    useEffect(() => {
        const $ = (el: string) => document.querySelector(el)
        const $slider = $('#companieSlider') as HTMLElement
        const $sliderTrack = $('#companieSliderContent') as HTMLElement

        $sliderTrack.classList.add('animate-marquee')
        $slider.appendChild($sliderTrack.cloneNode(true))
    }, [])

    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-hue-1/50">
                Helping people create beautiful content at
            </h5>
            <section
                id="companieSlider"
                className="relative overflow-hidden whitespace-nowrap py-4"
            >
                <div
                    id="companieSliderContent"
                    className="inline-block whitespace-nowrap"
                >
                    {clients.map((logo, index) => (

                        <img
                            key={index}
                            src={logo.src}
                            className="grayscale hover:transform-[scale(1.2)_rotate(5deg)] odd:hover:transform-[scale(1.2)_rotate(-5deg)] h-8 w-auto max-w-max transition-transform duration-300 ease-[cubic-bezier(.33,-0.09,.65,1.27)] inline-block mx-8 hover:grayscale-0"
                        />

                    ))}
                </div>
            </section>
        </div>
    );
};
