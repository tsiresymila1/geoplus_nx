import { gql } from '@apollo/client';

export const GET_POST_DOCUMENT = gql`
  query posts(
    $id: ID
    $status: PostStatus = PUBLIE
    $order: Order
    $pagination: OffsetPaginationInput
  ) {
    posts(
      categoryId: $id
      status: $status
      order: $order
      pagination: $pagination
    ) {
      data {
        id
        author {
          id
          displayName
          avatar {
            id
            name
            url
            mimetype
          }
        }
        authorV2 {
          ... on MinimalistUser {
            id
            displayName
            email
          }
          ... on MinimalistOrganisme {
            id
            displayName
          }
        }
        textContent
        image {
          id
          name
          mimetype
          url
        }
        content {
          id
          type
        }
        interactions {
          comment
          like
          love
          praise
          surprised
          thinking
        }
        reactions {
          id
          type
          user {
            id
            displayName
            email
            avatar {
              id
              name
              url
              mimetype
            }
          }
        }
        comments {
          id
          content
          user {
            id
            displayName
            email
            avatar {
              id
              name
              url
              mimetype
            }
          }
          createdAt
          capabilities {
            read
            create
            update
            delete
            report
          }
        }
        publish
        capabilities {
          read
          create
          update
          delete
          content {
            actualite {
              create
            }
          }
        }
      }
      pagination {
        count
        offset
        limit
      }
    }
  }
`;

export const CREATE_POST_DOCUMENT = gql`
  mutation createPost($input: PostInput!) {
    createPost(input: $input) {
      id
      author {
        id
        displayName
        avatar {
          id
          name
          url
          mimetype
        }
      }
      authorV2 {
        ... on MinimalistUser {
          id
          displayName
          email
        }
        ... on MinimalistOrganisme {
          id
          displayName
        }
      }
      textContent
      image {
        id
        name
        mimetype
        url
      }
      content {
        id
        type
      }
      interactions {
        comment
        like
        love
        praise
        surprised
        thinking
      }
      reactions {
        id
        type
        user {
          id
          displayName
          email
          avatar {
            id
            name
            url
            mimetype
          }
        }
      }
      comments {
        id
        content
        user {
          id
          displayName
          email
          avatar {
            id
            name
            url
            mimetype
          }
        }
        createdAt
        capabilities {
          read
          create
          update
          delete
          report
        }
      }
      publish
      capabilities {
        read
        create
        update
        delete
        content {
          actualite {
            create
          }
        }
      }
    }
  }
`;
