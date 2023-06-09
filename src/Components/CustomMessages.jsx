import React from 'react'

export default function CustomMessages({ message, button, action }) {
    return (
        <div
            id="popup-modal"
            tabIndex="-1"
            className="absolute flex justify-center items-center bg-zinc-900 bg-opacity-40  backdrop-blur-sm  
            z-50 p-4 overflow-x-hidden overflow-y-hidden max-h-screen w-screen h-screen inset-0 md:inset-0 md:h-screen"
        >
            <div className="relative mt-[60vh] md:mt-0 w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-3xl shadow-slate-700 shadow-2xl ">
                    <div className="p-6 text-center">
                        <h3 className="mb-5 text-lg font-semibold text-primary">
                            {message}
                        </h3>

                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-white bg-primary hover:bg-secondary hover:border-secondary font-medium 
                            rounded-full text-base  tracking-wide inline-flex items-center px-5 py-2.5 text-center mr-2 
                            border-2 border-primary shadow-md"
                            onClick={action}
                        >
                            {button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}