import { render } from '@testing-library/react';
import Quotation from './Quotation';

export default function renderQuotation({
  quotation
}: {
  quotation: Quotation;
}) {
  const screen = render(<Quotation quotation={quotation} />);

  return {
    getId: (id: RegExp) => screen.getByText(id),
    getQuote: (quote: RegExp) => screen.getByText(quote),
    getSource: (source: RegExp) => screen.getByText(source)
  };
}
