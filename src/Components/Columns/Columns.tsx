import React from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setColumns } from '../../redux/slices/columnsSlice';

import ColumnItem from './ColumnItem';
import Spinner from '../Spinner/Spinner';

import './Columns.css';

const Columns: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const columnItems = useAppSelector((state) => state.columns);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = !isMounted.current;
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      setIsLoading(true);

      fetch('./data/column.json')
        .then((data) => data.json())
        .then((data) => dispatch(setColumns(data)))
        .catch((error) => {
          toast.error('Не удалось загрузить данные по колонкам...');
          console.error(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <section className="columns">
        <Spinner />
      </section>
    );
  }

  if (!columnItems.length && !isLoading) {
    return (
      <section className="columns">
        <div className="data-empty">Нет данных...</div>
      </section>
    );
  }

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
