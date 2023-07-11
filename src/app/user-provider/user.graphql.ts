import { gql } from '@apollo/client';

const ME_DOCUMENT = gql`
  query me {
    me {
      id
      firstname
      lastname
      email
      displayName
      avatar {
        id
        name
        mimetype
        url
      }
      isDefaultAvatar
      incognito
      created_at
      updated_at
    }
  }
`;

export default ME_DOCUMENT;
