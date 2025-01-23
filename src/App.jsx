// import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import CursorFollower from './components/Cursor'
import Skills from './components/Skills'

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <CursorFollower />
            <Navbar />
            <Hero />

            {/* <section className="z-0 min-h-screen bg-blue-500" /> */}

            <About />
            <Skills />
            {/* <Features />
            <Story />
            <Contact />
            <Footer /> */}
        </main>
    )
}

export default App
