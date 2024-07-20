import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setColumns } from '../../redux/slices/columnsSlice';

import ColumnItem from './ColumnItem';
import './Columns.css';

const Columns: React.FC = () => {
  const dispatch = useAppDispatch();
  const columnItems = useAppSelector((state) => state.columns);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = !isMounted.current;
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      fetch('./data/columns.json')
        .then((data) => data.json())
        .then((data) => dispatch(setColumns(data)))
        .catch((error) => console.error(error.message));
    }
  }, [dispatch]);

  return (
    <section className="columns">
      <div className="container">
        <div className="columns-wrapper">
          {
            columnItems.map(({ text, title, id }) => (
              <ColumnItem title={title} text={text} key={id} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Columns;
