import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "./Menu"

function Navigation() {
    return (
        <nav className="w-11/12 mx-auto flex pb-4 xl:py-12 justify-between">
            <div className="w-1/2">
                <h1 className="w-7/11 lg:w-4/11">
                    <a href="/">
                        <StaticImage src="../images/nl-logo.svg" alt="New Leaf Naturopathic Health logo" />
                        <p className="sr-only">New Leaf Naturopathic Health</p>
                    </a>
                </h1>
            </div>
            <div className="flex w-1/2 justify-between">
                {/* Mobile booking button */}
                <a href="/clinic-bookings" className="lg:hidden">
                    <button className="bg-nl-orange w-full px-1/24 py-4 fixed bottom-0 left-0 z-50 text-left text-lg font-serif flex justify-between">
                        <p className="mb-0">Book an appointment</p>
                        <svg viewBox="0 0 74.5 13.6" className="w-4/24 pt-2"><path d="M0 5.8h72.8v2H0z" /><path d="M65.4 12.6c0-.3.1-.6.4-.8l6.4-4.6c.2-.1.3-.3.3-.4 0-.1-.1-.2-.3-.4l-6.4-4.7c-.4-.3-.5-1-.2-1.4.3-.4 1-.5 1.4-.2l6.4 4.7c.7.5 1.1 1.2 1.1 2s-.4 1.5-1.1 2L67 13.4c-.4.3-1.1.2-1.4-.2-.1-.2-.2-.4-.2-.6z" /></svg>
                    </button>
                </a>
                {/* Desktop booking button */}
                <a href="/clinic-bookings" className="hidden lg:block">
                    <button className="bg-nl-green px-8 py-4 text-3xl text-nl-cream">
                        <p className="mb-0">Book an appointment</p>
                    </button>
                </a>
                <Menu />                
            </div>            
        </nav>
    )
}

export default Navigation