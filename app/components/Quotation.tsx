export default function Quotation({
  quotation
}: Readonly<{ quotation: Quotation }>) {
  return (
    <div>
      <p>{quotation.id}</p>
      <blockquote>{quotation.paragraph}</blockquote>
      <cite>{quotation.source}</cite>
    </div>
  );
}
