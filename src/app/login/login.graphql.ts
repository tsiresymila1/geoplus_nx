import { gql } from '@apollo/client';

const SIGNIN_DOCUMENT = gql`
  mutation singin($input: SigninInput!) {
    signin(input: $input) {
      authToken
      apiToken
      expires
    }
  }
`;

export default SIGNIN_DOCUMENT;
