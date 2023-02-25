'use client';
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

  return (
    <div className={styles.card}>
      <div className={styles.center}>
        <p
          className={styles.quote}
          data-testid="quote"
        >
          {currentQuote}
        </p>
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
