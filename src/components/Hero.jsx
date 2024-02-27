import React from 'react'
import Plx from "react-plx";


function Hero() {
  return (
    <div className="parralax ">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              },
              {
                startValue: 0,
                endValue: 4,
                property: "blur"
              }
              
            ]
          },
          {
            start: 200,
            end: 600,
            easing: "ease-in",
            properties: [
              {
                startValue: 0,
                endValue: -200,
                property: "translateY"
              }
              
            ]
          }
        ]}
        style={{
          position: "relative",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%", height:"100vh" }} src="bg.png" alt="foreground" />
      </Plx>


      <Plx
        parallaxData={[
          {
            start: 0,
            end: 200,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
        <img style={{ width: "100%", height:"80vh" }} src="background.jpg" alt="background" />
      </Plx>


      <Plx className=" flex justify-center"
        parallaxData={[
          {
            start: 0,
            end: 300,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          // left: "20%",
          top: "20vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "30vw"
          }}
          src="/text-img.webp"
          alt="Goonies"
        />
      </Plx>
      {/* <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
        
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        >HI</div>
      </div> */}
    </div>
  )
}

export default Hero