'use client';
import { motion } from 'framer-motion';
import React from 'react';
import LeftButton from './Buttons/LeftArrow';
import RightButton from './Buttons/RightArrow';
import styles from './card.module.css';

export interface QuoteCardProps {
  quote: string;
  leftClick: () => void;
  rightClick: () => void;
}

export function QuoteCard({
  quote,
  leftClick,
  rightClick,
}: QuoteCardProps) {
  const [currentQuote, setCurrentQuote] = React.useState<string>(quote);

  React.useEffect(() => {
    setCurrentQuote(quote);
  }, [quote]);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
    <div className={styles.card}>
      <div className={styles.center}>
      <motion.div
      className="box"
      layout style={{ borderRadius: 20 }}
      transition={{
        delay: 0.5,
        x: { duration: 1 },
        default: { ease: "linear" }
      }}
    >
 
      
        <p
          className={styles.quote}
          data-testid="quote"
        >
          {currentQuote}
        </p>
        </motion.div>
      </div>
      <LeftButton
        classValue={styles.left}
        onClick={leftClick}
      />
      <RightButton
        classValue={styles.right}
        onClick={rightClick}
      />
    </div>
  );
}
