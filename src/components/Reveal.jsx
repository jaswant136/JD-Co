import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
  once = true,
  ...rest
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
