import React, { Suspense }  from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'));


function Product({link, name, description}) {
    window.onload = function() {
        var splineElement = document.querySelectorAll('spline-viewer');
        
        for (let pas = 0; pas < splineElement.length; pas++) {
          var shadowRoot = splineElement[pas].shadowRoot;
          shadowRoot.querySelector('#logo').remove();
        }
      }
  return (
    <div className='pt-20 ' >
        <div className="absolute">
            <div >
                <img src='frame.svg' style={{width: "100vw" }}></img>
            </div>
        </div>
        <div className=' flex flex-row justify-between mr-20'>

            <div className='font-orbitron font-light  mt-20 ml-32 flex flex-col'>
                <div className='text-2xl'>
                    {name}
                </div>
                <p className='mt-8 font-thin text-slate-500' dangerouslySetInnerHTML={{ __html: description }}>
                </p>
            </div>
           
            <div className=' h-[410px] w-[410px] relative bottom-10 flex items-center justify-center' >
                <Suspense fallback={<div>Loading...</div>}>
                    <Spline scene={link}/>
                 </Suspense>
                {/* <spline-viewer  url="https://prod.spline.design/JzlHZVDWu5Ug0SmD/scene.splinecode" ></spline-viewer> */}
            </div>

            
        </div>
    </div>
    
  )
}

export default Product