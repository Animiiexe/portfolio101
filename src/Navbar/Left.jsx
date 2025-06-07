"use client";

import React, { useRef } from "react";
import logo from "../assets/logo1.png";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

const LogoSpinner = () => {
  const rotate = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Map scroll speed to rotation multiplier
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-5, 0, 5], {
    clamp: false,
  });

  useAnimationFrame((t, delta) => {
    const currentVelocity = velocityFactor.get(); // includes direction
    const rotateBy = (delta / 1000) * 100 * currentVelocity; // positive = CW, negative = CCW
    rotate.set(rotate.get() + rotateBy);
  });

  return (
    <motion.img
      src={logo}
      alt="logo"
      width={70}
      style={{ rotate }}
      className="pointer-events-none"
    />
  );
};

export default LogoSpinner;
