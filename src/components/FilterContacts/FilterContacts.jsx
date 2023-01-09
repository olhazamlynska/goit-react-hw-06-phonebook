import { nanoid } from 'nanoid';

import {
  Label,
  Input,
  Wrapper,
} from 'components/FilterContacts/FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';

export const FilterContacts = () => {
  const filterId = nanoid();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilterContacts(e.target.value));
  };

  return (
    <Wrapper>
      <Label htmlFor={filterId}>
        <Input
          type="text"
          title="Write name to find contact quickly"
          value={filter}
          onChange={onChangeFilter}
          id={filterId}
        ></Input>
      </Label>
    </Wrapper>
  );
};
