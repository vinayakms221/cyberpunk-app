import React, { Suspense }  from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'));


function Avatar() {
    const cursorStyle = { cursor: `url(/cursor2.svg), pointer` }
  return (
    <div >
        <div className="flex flex-row justify-center pt-20 pb-4">
        <div className='font-orbitron font-normal text-5xl text-cyan-400	 '>
          Create Your Avatar
        </div>
      </div>
      <div  className='relative' style={cursorStyle}> 
        <div className='z-0 '>
        <Suspense fallback={<div>Loading...</div>}>
                <Spline scene="https://prod.spline.design/qkw0khnxzPcuDsmx/scene.splinecode"/>
            </Suspense>
        </div>
        
       
      </div>
    
    {/* <spline-viewer  url="https://prod.spline.design/JzlHZVDWu5Ug0SmD/scene.splinecode" ></spline-viewer> */}
</div>
  )
}

export default Avatar