import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContact(e.target.value));

  return (
    <FilterLabel>
      <span>Search contacts: </span>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </FilterLabel>
  );
};
