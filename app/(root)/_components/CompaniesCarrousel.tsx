'use client'

import ImgContainer from "@/app/(root)/_components/ImgContainer";
import useMeasure from "react-use-measure";
import {animate, motion, useMotionValue} from "framer-motion";
import {useEffect} from "react";


export default function CompaniesCarrousel(){

    const images = [
        "/products/BPA.png",
        "/products/BPM.png" ,
        "/products/HACCP.png" ,
        "/products/ISO IEC 2382.png" ,
        "/products/ISO IEC 29119.png" ,
        "/products/ISO 10002.png" ,
        "/products/ISO 17020.png" ,
        "/products/ISO 17021.png" ,
        "/products/ISO 17025.png" ,
        "/products/ISO 22005.png" ,
        "/products/ISO 28000.png" ,
        "/products/ISO 31001.png" ,
        "/products/ISO 56002.png" ,
        "/products/ISO 90003.png",
    ]

    let [ref , {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width/2 - 8;

        controls = animate(xTranslation, [0, finalPosition] , {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });

        return controls.stop;

    }, [xTranslation, width]);

    return (
        <>
            <motion.div className={`absolute left-0 flex gap-4`} ref={ref}
                        style={{
                            x: xTranslation
                        }}
            >

                {[...images,...images].map((item,idx) => (
                    <ImgContainer image={item} key={idx} />
                ))}
            </motion.div>
        </>
    );
}