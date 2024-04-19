import { motion } from 'framer-motion';
import { cubicBezier } from 'framer-motion';

const slideUpAnim = {
  initial: { y: 1000 },
  animate: { y: 100 },
};

export default function Hero() {
  return (
    <div className=' flex flex-col gap-4 justify-end h-screen px-12'>
      <div className='overflow-hidden h-[30vh] p-4 text-stone-200 text-[10vw] select-none font-["Playfair"] italic tracking-tight font-extrabold scale-y-[1.75] -skew-x-[15deg]'>
        <motion.div
          viewport={{ once: true }}
          {...slideUpAnim}
          transition={{ duration: 1, ease: cubicBezier(0.16, 1, 0.3, 1) }}
          className=''
        >
          Anya
        </motion.div>
      </div>
      <div className='overflow-hidden h-[30vh] p-4 text-stone-200 text-[10vw] select-none font-["Playfair"] italic tracking-tight font-extrabold scale-y-[1.75] -skew-x-[15deg]'>
        <motion.div
          viewport={{ once: true }}
          {...slideUpAnim}
          transition={{
            duration: 1,
            ease: cubicBezier(0.16, 1, 0.3, 1),
          }}
          className=''
        >
          Kalimouline
        </motion.div>
      </div>
    </div>
  );
}
