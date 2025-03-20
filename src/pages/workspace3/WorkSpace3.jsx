import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

function WorkSpace3() {
  const userName = useSelector(state => state.userData.user);
  const [width, setWidth] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const boxRef = useRef(null);
  const [boxBoundary, setBoxBoundary] = useState({ top: 0, left: 0, right: 0 });

  useEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setBoxBoundary({ top: rect.top, left: rect.left, right: rect.right });
    }
  }, [])
  // console.log(boxBoundary);

  const boxClick = (e) => {
    // console.log(e.clientX);
    const xAxisPos = e.clientX;
    const boxActualWidth = (boxBoundary.right)-(boxBoundary.left);
    const newWidth = ((xAxisPos-boxBoundary.left)/boxActualWidth)*100;
    // console.log(newWidth);
    setWidth(newWidth);
  }

  const onPipeDragStart = (e) => {
    // Prevent default drag image (Ghost image)
    const ghostElement = document.createElement("div");
    ghostElement.className = "hidden-drag"; // Add your Tailwind or CSS class
    document.body.appendChild(ghostElement); // Add it to the DOM

    e.dataTransfer.setDragImage(ghostElement, 0, 0); // Use it as the drag image
  };


  const onPipeDrag = (e) => {
    e.preventDefault();
    const xAxisPos = e.clientX;
    if (xAxisPos < boxBoundary.left || xAxisPos > boxBoundary.right) return;
    const boxActualWidth = (boxBoundary.right)-(boxBoundary.left);
    const newWidth = ((xAxisPos-boxBoundary.left)/boxActualWidth)*100;
    // console.log(newWidth);
    setWidth(newWidth);
  }

  

  return (
    <div>
        <div className=' flex flex-col items-center'>
            <h1 className=' mb-10'>Hi {userName}! You are welcomed to Workspace3.</h1>
            <div ref={boxRef} className=' w-1/2  flex  items-center'>
              <div className='flex bg-gray-500 justify-start cursor-default rounded-md' style={{width: `${width}%`, padding: width<6 ? "0px" : "4px"}}> 
                {/* width: `${Math.round(width)}%` */}
                <p className=' transition-all duration-200' style={{position: 'relative', bottom: width<6 ? "30px" : "0px"}}>Skill</p> 
                <p className='ml-2 transition-all duration-200' style={{position: 'relative', top: width<10 ? "30px" : "0px"}}>{Math.round(width)}%</p>
              </div>
              {/* Draggable Pipe code starts. */}
              <div draggable="true" onDragStart={(e) => onPipeDragStart(e)} onDrag={(e) => onPipeDrag(e)} className='relative bottom-0.5 cursor-grab text-3xl text-red-700 font-extrabold'>|</div>
              {/* Draggable Pipe code ends. */}
              <div className='flex bg-gray-700 justify-end cursor-default rounded-md' style={{width: `${100-width}%`, padding: width>87 ? "0px" : "4px"}}> 
                {/* width: `${Math.round(100-width)}%` */}
                <p className=' mr-2 transition-all duration-200' style={{position: 'relative', top: width>87 ? "30px" : "0px"}}>{Math.round(100-width)}%</p> 
                <p className=' transition-all duration-200' style={{position: 'relative', bottom: width>92 ? "30px" : "0px"}}>Sonnet</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WorkSpace3

// onClick={(e) => boxClick(e)}

