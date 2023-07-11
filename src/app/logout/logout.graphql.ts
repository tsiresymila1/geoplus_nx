import { gql } from '@apollo/client';

const LOUGOUT_DOCUMENT = gql`
  mutation logout{
    logout
  }
`;

export default LOUGOUT_DOCUMENT;
