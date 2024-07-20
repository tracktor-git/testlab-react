import React from 'react';

export type ColumnItemProps = {
  title: string,
  text: string,
};

const ColumnItem: React.FC<ColumnItemProps> = ({ title, text }) => (
  <div className="column-item">
    <p className="column-title">{title}</p>
    <p className="column-text">{text}</p>
  </div>
);

export default ColumnItem;
