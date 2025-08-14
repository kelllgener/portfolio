import React, { useEffect, useState } from 'react'

interface Props {
    onComplete: () => void;
}

const LoadingScreen = ( { onComplete }: Props ) => {

    const [text, setText] = useState("");
    const fullText = "Hi, Welcome to my Portfolio.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 700);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete])

  return (
    <div className='fixed inset-0 z-50 bg-white text-black flex flex-col items-center justify-center dark:bg-black dark:text-gray-300'>
        <div className="mb-4 text-4xl text-center font-mono font-bold">
            {text} <span className='animate-blink '> | </span>
        </div>

        <div className='w-[300px] h-[6px] bg-gray-800 rounded relative overflow-hidden'>
            <div className='w-[100%] h-full bg-teal-900 shadow-[0_0_15px_#3b82f6] animate-loading-bar dark:bg-teal-500'></div>
        </div>

    </div>
  )
}

export default LoadingScreen