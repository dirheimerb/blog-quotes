import data from './quotes.json';
export interface Quote {
  life: string[];
  relationships: string[];
  success: string[];
}
export enum Category {
  Life = 'life',
  Relationships = 'relationships',
  Success = 'success',
}

export const category = [
  Category.Life,
  Category.Relationships,
  Category.Success,
];

const quotes = {
  [Category.Life]: data.quotes.life,
  [Category.Relationships]: data.quotes.relationships,
  [Category.Success]: data.quotes.success,
};

// const QuoteObject: Quote = Object.assign(Q, {
//     category,
//     quotes,
// });

class QuoteObject {
  category: string[] = category;
  quotes: Quote = quotes;

  constructor() {
    Object.assign(this, {
      category,
      quotes,
    });
  }

  getQuote(category: Category): string {
    const quote = this.quotes[category];
    const random = Math.floor(Math.random() * quote.length);
    return quote[random];
  }

  getAllQuotes(): Quote {
    return this.quotes;
  }

  getQuotes(category: Category): string[] {
    return this.quotes[category];
  }

  getCategories(): string[] {
    return this.category;
  }

  getQuoteByCategory(category: Category): string {
    return this.getQuote(category);
  }

  getQuotesByCategory(category: Category): string[] {
    return this.getQuotes(category);
  }
}

export default QuoteObject;
