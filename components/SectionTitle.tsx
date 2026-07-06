import Reveal from "./Reveal";

interface SectionTitleProps {
  number: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <Reveal className="section-title">
      <div className="section-title__row">
        <span className="section-title__num">{number}</span>
        <h2 className="section-title__text">{title}</h2>
        <div className="section-title__line"></div>
      </div>
    </Reveal>
  );
}
