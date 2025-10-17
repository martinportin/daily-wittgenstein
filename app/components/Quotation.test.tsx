import renderQuotation from './renderQuotation';

describe('quote component tests', () => {
  const quotations: Quotation[] = [
    {
      id: '1',
      paragraph: 'The world is all that is the case.',
      source: 'Tractatus logico-philosophicus'
    },
    {
      id: '2',
      paragraph:
        'What is the case--a fact--is the existence of states of affairs.',
      source: 'Tractatus logico-philosophicus'
    },
    {
      id: '3',
      paragraph: 'A logical picture of facts is a thought.',
      source: 'Tractatus logico-philosophicus'
    },
    {
      id: '4',
      paragraph: 'A thought is a proposition with a sense.',
      source: 'Tractatus logico-philosophicus'
    },
    {
      id: '5',
      paragraph:
        'A proposition is a truth-function of elementary propositions. (An elementary proposition is a truth-function of itself.)',
      source: 'Tractatus logico-philosophicus'
    },
    {
      id: '6',
      paragraph:
        'The general form of a truth-function is [p, E, N(E)]. This is the general form of a proposition.',
      source: 'Tractatus logico-philosophicus'
    },
    {
      id: '7',
      paragraph: 'What we cannot speak about we must pass over in silence.',
      source: 'Tractatus logico-philosophicus'
    }
  ];

  const ids: RegExp[] = [/1/, /2/, /3/, /4/, /5/, /6/, /7/];

  const paragraphs: RegExp[] = [
    /The world is all that is the case./,
    /What is the case--a fact--is the existence of states of affairs./,
    /A logical picture of facts is a thought./,
    /A thought is a proposition with a sense./,
    /A proposition is a truth-function of elementary propositions. \(An elementary proposition is a truth-function of itself.\)/,
    /The general form of a truth-function is \[p, E, N\(E\)\]. This is the general form of a proposition./,
    /What we cannot speak about we must pass over in silence./
  ];

  const source: RegExp = /Tractatus logico-philosophicus/;

  quotations.forEach((quotation, index) => {
    test('should show the inserted quotation id', () => {
      const { getId } = renderQuotation({ quotation });
      expect(getId(ids[index])).toBeInTheDocument();
    });

    test('should show the inserted quotation quote', () => {
      const { getQuote } = renderQuotation({
        quotation
      });
      expect(getQuote(paragraphs[index])).toBeInTheDocument();
    });

    test('should show the inserted quotation source', () => {
      const { getSource } = renderQuotation({ quotation });
      expect(getSource(source)).toBeInTheDocument();
    });
  });
});
