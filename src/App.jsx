// import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />

            <section className="z-0 min-h-screen bg-blue-500" />

            {/* <About />
            <Features />
            <Story />
            <Contact />
            <Footer /> */}
        </main>
    )
}

export default App
