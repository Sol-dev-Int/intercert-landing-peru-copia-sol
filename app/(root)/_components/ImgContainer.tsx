'use client'

import Image from "next/image";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";


interface ImgContainerProps {
    image: string;
}

const ImgContainer : React.FC<ImgContainerProps> = ({image}) => {

    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <motion.div className={`relative overflow-hidden h-[200px] min-w-[200px] rounded-xl flex justify-center items-center`}
                    onHoverStart={() => setShowOverlay(true)}
                    onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
            {showOverlay && (
                <motion.div className={`absolute inset-0 z-10 flex justify-center items-center`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity:0}}
                >
                    <div className={`absolute bg-black pointer-events-none opacity-50 h-full w-full`}/>
                    <motion.h3 className={`bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75`}
                               initial={{y : 10}}
                               animate={{y: 0}}
                               exit={{y: 10}}
                    >
                        <span>Explore now</span>
                    </motion.h3>
                </motion.div>
            )}
            </AnimatePresence>
            <Image
                src={image}
                alt={image}
                fill
                style = {{
                    objectFit: "cover",
                }}/>
        </motion.div>
    )
}

export default ImgContainer;

