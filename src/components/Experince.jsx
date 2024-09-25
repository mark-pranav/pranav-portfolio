import { EXPERIENCES } from "../constants"
import {motion} from "framer-motion";


const Experince = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h3 
        whileInView={{opacity: 1 , y:0}}
        initial = {{opacity: 0 , y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">E
        <span className="text-neutral-100 ">x</span>
        <span className="text-neutral-200 ">p</span>
        <span className="text-neutral-300 ">e</span>
        <span className="text-neutral-400 ">r</span>
        <span className="text-neutral-500 ">i</span>
        <span className="text-neutral-600 ">n</span>
        <span className="text-neutral-700 ">c</span>
        <span className="text-neutral-700 ">e</span></motion.h3> 
        <div>
            {EXPERIENCES.map((experince, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0 , x: -100}}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400 ">{experince.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0 , x: 100}}
                    transition={{dusratio: 1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold ">{experince.role} -{""}
                            <span className="text-sm text-purple-100">
                            {experince.company}
                            </span>
                            </h6>
                        <p className="mb-4 text-neutral-400 ">{experince.description}</p>
                        {experince.technologies.map((tech,index) => (
                          <span key={index} className="mt-4 mr-2 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-800">{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experince
