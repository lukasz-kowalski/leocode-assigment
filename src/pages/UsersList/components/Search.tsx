import styled from 'styled-components';
import { TextInput } from 'components';

type PropsType = {
  searchQuery: string;
  onChange: (value: string) => void;
};

const Container = styled.div`
  width: 30rem;
  margin: 4rem 0;
`;

const placeholder = 'Search by user name...';

const Search = ({ searchQuery, onChange }: PropsType) => {
  return (
    <Container>
      <TextInput value={searchQuery} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default Search;
