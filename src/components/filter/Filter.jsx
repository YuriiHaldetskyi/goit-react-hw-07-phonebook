import React from 'react';
import { Input, Title } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from '../../redux/filterSlice';
import { selectNameFilter } from '../../redux/selectiors';

export const Filter = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event =>
    dispatch(searchFilter(event.target.value));
  return (
    <label>
      <Title>Find User</Title>
      <Input value={filter} onChange={handleFilterChange}></Input>
    </label>
  );
};
