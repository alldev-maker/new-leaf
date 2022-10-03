import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"


function Menu() {
    const [display, setDisplay] = useState(false);

    function displayMenu() {
        return setDisplay(!display)
    }

    return (
        <>
            <button className="text-lg lg:text-3xl text-nl-green" onClick={displayMenu}>Menu</button>
            <div className={display ? "block bg-nl-cream h-screen w-full fixed bottom-0 top-0 left-0 z-50" : "hidden"}>
                <div className="max-w-screen-2xl mx-auto xl:py-12">
                    <div className="w-11/12 mx-auto py-4 flex justify-between">
                        <div className="w-1/2">
                            <h1 className="w-7/11 lg:w-4/11 mb-4 lg:mb-8">
                                <a href="/">
                                    <StaticImage src="../images/nl-logo.svg" alt="New Leaf Naturopathic Health logo" />
                                    <p className="sr-only">New Leaf Naturopathic Health</p>
                                </a>
                            </h1>
                            <ul className="font-serif text-nl-green text-2xl lg:text-5xl">
                                <li className="mb-4 lg:mb-8"><a href="/about" className="no-underline">Who we are</a></li>
                                <li className="mb-4 lg:mb-8"><a href="/naturopathy" className="no-underline">What we do</a></li>
                                <li className="mb-4 lg:mb-8"><a href="/questions" className="no-underline">FAQs</a></li>
                                <li className="mb-4 lg:mb-8"><a href="/blog" className="no-underline">Journal</a></li>
                                <li className="mb-4 lg:mb-8"><a href="/contact" className="no-underline">Contact</a></li>
                                <li className="mb-4 lg:mb-8"><a href="/patient-ordering" className="no-underline">Patient Ordering</a></li>
                                <li className="mb-4 lg:mb-8 bg-nl-green p-2 lg:p-4 text-nl-cream text-center"><a href="/clinic-bookings" className="no-underline">Make a booking</a></li>
                            </ul>
                        </div>
                        <div>
                            <button className="text-lg lg:text-3xl text-nl-green mt-2 lg:mt-4" onClick={displayMenu}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu