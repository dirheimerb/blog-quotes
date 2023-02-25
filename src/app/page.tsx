'use client';
import { Inter } from 'next/font/google';
import { QuoteCard } from '@/ui/QuoteCard';
import QuoteObject from '@/lib/quotes';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showQuote, setShowQuote] = React.useState<boolean>(false);
  const [life, setLife] = React.useState<string[]>([]);
  const [relationships, setRelationships] = React.useState<string[]>();
  const [success, setSuccess] = React.useState<string[]>();
  const [currentQuote, setCurrentQuote] = React.useState<string>('');
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [previousIndex, setPreviousIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const quoteObject = new QuoteObject();
    const quotes = quoteObject.getAllQuotes();
    setLife(quotes.life);
    setRelationships(quotes.relationships);
    setSuccess(quotes.success);
    setCurrentQuote(quotes.life[0]);
  }, []);

  const handleInitializeQuotes = () => {
    const quoteObject = new QuoteObject();
    const quotes = quoteObject.getAllQuotes();
    setLife(quotes.life);
    setRelationships(quotes.relationships);
    setSuccess(quotes.success);
  };

  const handleGetNextQuote = () => {
    const quotes = [life, relationships, success];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const randomQuoteIndex = Math.floor(
      Math.random() * randomQuote!.length,
    );
    
    setCurrentIndex(randomQuoteIndex);
    setPreviousIndex(currentIndex);
    return randomQuote![randomQuoteIndex];
  };

  const handleGetPreviousQuote = () => {
    const quotes = [life, relationships, success];
    setPreviousIndex(currentIndex);
    const randomQuote = quotes[previousIndex];
    if (currentIndex === 0) {
      setPreviousIndex(randomQuote!.length - 1);
      return randomQuote![randomQuote!.length - 1];
    }
    return randomQuote![previousIndex];
  };



  return (
    <main>
      <QuoteCard
        quote={currentQuote}
        leftClick={() => {
          setCurrentQuote(handleGetPreviousQuote());
        }}
        rightClick={() => {
          setCurrentQuote(handleGetNextQuote());
        }}
      />
    </main>
  );
}

// Religion - Math in Mark		2.0		Missing	02/02	0.0	0.0
// Health - Fed Up movie worksheet		10.0		Missing	02/09	0.0	0.0
// English - ACPENG-039: Night Ch. 4-5 response		10.0		Missing	01/30	0.0	0.0
// English - ACPENG-040: Unit 9 Vocab Quiz		20.0		Missing	02/03	0.0	0.0
// Bio - Mitosis Review		5.0		Missing	02/09	0.0	0.0
// Bio - BIO-018: Mitosis Virtual lab		10.0		Missing	02/09	0.0	0.0
// History - (052) Russian Peasants		15.0		Missing	01/12	0.0	0.0
