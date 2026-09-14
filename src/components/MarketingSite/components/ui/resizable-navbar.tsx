// Adapted from https://ui.aceternity.com/components/resizable-navbar
'use client';
import { motion,useScroll,useMotionValueEvent,useReducedMotion } from 'motion/react';
import { useState,type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function ResizableNavbar({children,className}:{children:ReactNode;className?:string}) {
  const {scrollY}=useScroll();
  const [compact,setCompact]=useState(false);
  const reduced=useReducedMotion();
  useMotionValueEvent(scrollY,'change',value=>setCompact(value>100));
  return <motion.div className={cn('nav-wrap aceternity-nav',className)} data-compact={compact}
    initial={false}
    animate={{width:compact?'94%':'100%',y:compact?9:0,borderRadius:compact?15:0,boxShadow:compact?'0 8px 30px rgba(24,24,27,0.08),0 0 0 1px var(--line)':'0 0 0 rgba(24,24,27,0)'}}
    transition={reduced?{duration:0}:{type:'spring',stiffness:240,damping:34}}>
    {children}
  </motion.div>;
}
