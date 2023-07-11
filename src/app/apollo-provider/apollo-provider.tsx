import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloClientProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { useMemo } from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectAuthToken } from '../redux/slice/auth.slice';

export interface ApolloProviderProps {
  children: React.ReactNode | React.ReactNode[] | null;
}

export function ApolloProvider(props: ApolloProviderProps) {
  const token = useAppSelector(selectAuthToken);
  const client = useMemo(() => {
    const httpLink = createHttpLink({
      uri: import.meta.env.VITE_API_URL,
    });
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
          'X-DCE-PLATFORM': 'SWIZY',
        },
      };
    });
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache({
        typePolicies: {
          PaginatedPosts: {
            
          }
        },
      }),
    });
  }, [token]);

  return (
    <ApolloClientProvider client={client}>
      {props.children}
    </ApolloClientProvider>
  );
}

export default ApolloProvider;
