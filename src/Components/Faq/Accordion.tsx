import React from 'react';

type AccordionProps = {
  header: string,
  body: string,
};

export type AccordionData = {
  id: number,
  header: string,
  body: string,
};

const Accordion: React.FC<AccordionProps> = ({ header, body }) => {
  const [expanded, setExpanded] = React.useState(false);

  const className = expanded ? 'accordion accordion-expand' : 'accordion';

  const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      setExpanded(!expanded);
    }
  };

  return (
    <div role="button" tabIndex={0} className={className} onClick={() => setExpanded(!expanded)} onKeyUp={handleKeyUp}>
      <div className="accordion-header">
        <h4>{header}</h4>
        <i className="accordion-icon" />
        <p className="accordion-body">{body}</p>
      </div>
    </div>
  );
};

export default Accordion;
