import styled from 'styled-components';
import { TextInput } from 'components';

type PropsType = {
  searchQuery: string;
  onChange: (value: string) => void;
};

const Container = styled.div`
  margin: 4rem 0;
`;

const Search = ({ searchQuery, onChange }: PropsType) => {
  return (
    <Container>
      <TextInput value={searchQuery} onChange={onChange} />
    </Container>
  );
};

export default Search;
