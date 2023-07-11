import { gql } from '@apollo/client';

const DELETE_POST_DOCUMENT = gql`
  mutation deletePost($input: IdentifiedInput!) {
    deletePost(input: $input) {
      id
    }
  }
`;

export default DELETE_POST_DOCUMENT;
