import React from 'react'
import Product from './Product'

function Products() {
  return (
    <div className='mt-[22vh] ' >
      <div className="flex flex-row justify-center ">
        <div className='font-orbitron font-normal text-5xl text-cyan-400	 '>
          Gear Lineups
        </div>
      </div>
      
        <Product name="QuantumKey ID" link="https://prod.spline.design/JzlHZVDWu5Ug0SmD/scene.splinecode" description="Unlock a realm where innovation meets individuality with the QuantumKey ID, your exclusive passport to the cybernetic symphony of the future. This isn't just an ID card; it's a testament to your identity in a world where the digital and the physical realms converge in harmony.
                 <br/> <br/>Crafted with the most advanced cryptic algorithms and infused with your unique biometric signatures, QuantumKey ID is your secure gateway to an elite marketplace of futuristic weaponry, high-tech gadgets, and beyond. Each card is designed with dynamic nano-etching technology that displays holographic data, ensuring that your credentials are not just secure but also a spectacle of cyber artistry."/>

        <Product name="RoverSec Sentinel" link="https://prod.spline.design/cebaLXmkZhR48gTi/scene.splinecode" description="Introducing the RoverSec Sentinel – your autonomous guardian and the ultimate ally in urban survival. In the sprawling cities of the future, the Sentinel stands apart as a bulwark against chaos. Engineered for resilience and designed for discretion, this mobile security unit is your silent sentinel, always vigilant, always watching.
            <br/> <br/>The RoverSec Sentinel's compact form factor belies its robust capabilities. Equipped with 360-degree perception sensors and an AI-driven security protocol, it patrols with relentless efficiency. Its electric terrain-adaptive treads are silent on the city streets, yet bold in the face of obstacles, ensuring it can navigate the unpredictable landscapes of the neon-soaked concrete jungles."      />

        <Product name="Etherion Codex" link="https://prod.spline.design/Ho5j5ro3B1qHrgwK/scene.splinecode" description="Behold the Etherion Codex, the ultimate emblem of digital mastery and blockchain prowess. This transcendent symbol is not merely a visual spectacle; it's the heart of a new era in cryptographic transactions and digital interactions.
        <br/> <br/>Suspended in a holographic matrix, the Etherion Codex is an interactive portal, an art piece, and a sophisticated tool for the enlightened trader. It dynamically displays the real-time ebb and flow of the Ethereum blockchain, providing an intuitive and mesmerizing representation of your digital currency's movement."        />



        {/* <Product name="NeuroVisor Mark I" link="https://prod.spline.design/O3FcoliBqf1-xzXD/scene.splinecode" description="Step into the shadows of the future with NeuroVisor Mark I – the pinnacle of augmented reality headgear, designed for the discerning denizen of the digital dusk. Engineered with precision for the cyberpunk connoisseur, this visor isn't just a piece of technology; it's a piece of the revolution.  <br/> <br/>
        The NeuroVisor Mark I transcends traditional visual boundaries, offering an immersive, 360-degree sensory experience. With its hyper-advanced AR interface, you'll navigate the neon-lit night with a clarity that outshines daylight. The visor's crystalline display is powered by nano-layered optics, projecting a world augmented by layers of data, insight, and virtual interaction. "/>
         */}

    </div>
  )
}

export default Products