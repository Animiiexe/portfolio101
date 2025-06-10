import { cn } from "./../lib/utils";
import { motion, useScroll } from "framer-motion";

export const ScrollProgress = (({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-1.5 origin-left shadow-lg",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        background: [
          'linear-gradient(90deg, #ec4899 0%, #f43f5e 50%, #f59e0b 100%)',
          'linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)',
          'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
        ]
      }}
      transition={{
        background: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";