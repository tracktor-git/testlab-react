import React from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store';

type Screens = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const queries = [
  '(max-width: 760px)',
  '(min-width: 761px) and (max-width: 1279px)',
  '(min-width: 1280px)',
];

export const useMatchMedia = (): Screens => {
  const mediaQueryLists = queries.map((query) => window.matchMedia(query));

  const [values, setValues] = React.useState(() => mediaQueryLists.map((list) => list.matches));

  React.useLayoutEffect(() => {
    const handler = () => setValues(mediaQueryLists.map((list) => list.matches));
    mediaQueryLists.forEach((list) => {
      list.addEventListener('change', handler);
    });

    return () => {
      mediaQueryLists.forEach((list) => {
        list.removeEventListener('change', handler);
      });
    };
  });

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({ ...acc, [screen]: values[index] }),
    { isDesktop: false, isTablet: false, isMobile: false },
  );
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
