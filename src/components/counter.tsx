import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const Counter = ({ end, label }: { end: number; label: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }
  }, [inView, end]);

  return (
    <div className="text-center" ref={ref}>
      <motion.h3
        className="text-teal-500 text-3xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {count}
        {label === "Years Experience" ? "+" : "K+"}
      </motion.h3>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
};
export default Counter;
