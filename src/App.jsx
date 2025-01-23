// import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import CursorFollower from './components/Cursor'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <CursorFollower />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
        </main>
    )
}

export default App
