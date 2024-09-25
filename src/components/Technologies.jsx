import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial : {y: -10},
    animate: { 
        y: [10 , -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h3 
        whileInView={{opacity:1 , y:0}}
        initial = {{opacity:0 , y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl"><span className="text-neutral-500 ">Tech </span> Stack</motion.h3>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity: 0 , x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-5xl "/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-5xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandRedux className="text-5xl text-red-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-5xl"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-5xl text-yellow-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-5xl text-red-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
