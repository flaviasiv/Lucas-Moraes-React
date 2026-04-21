import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const Section = ({ children, className, id, style }) => (
  <motion.div
    className={className}
    id={id}
    style={style}
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    {children}
  </motion.div>
);

export const FadeUp = ({ children, className, id }) => (
  <motion.div className={className} id={id} variants={fadeUp}>
    {children}
  </motion.div>
);

export const Frame = ({ children, className, style }) => (
  <motion.div
    className={className}
    style={style}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </motion.div>
);
