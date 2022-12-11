import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addStashable?: Maybe<Scalars['Boolean']>;
  deleteStashable?: Maybe<Scalars['Boolean']>;
  updateStashable?: Maybe<Scalars['Boolean']>;
};


export type MutationAddStashableArgs = {
  link: Scalars['String'];
};


export type MutationDeleteStashableArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateStashableArgs = {
  id: Scalars['Int'];
  link: Scalars['String'];
};

export type OgImage = {
  __typename?: 'OGImage';
  height?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type OgResult = {
  __typename?: 'OGResult';
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<OgImage>;
  ogTitle?: Maybe<Scalars['String']>;
  ogType?: Maybe<Scalars['String']>;
  ogUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  stashables?: Maybe<Array<Maybe<Stashable>>>;
};


export type QueryStashablesArgs = {
  filter?: InputMaybe<StashableFilter>;
};

export type Stashable = {
  __typename?: 'Stashable';
  id: Scalars['Int'];
  inserted_at?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  ogResult?: Maybe<OgResult>;
  updated_at?: Maybe<Scalars['String']>;
};

export type StashableFilter = {
  search?: InputMaybe<Scalars['String']>;
};

export type AddStashableMutationVariables = Exact<{
  link: Scalars['String'];
}>;


export type AddStashableMutation = { __typename?: 'Mutation', addStashable?: boolean | null };

export type DeleteStashableMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteStashableMutation = { __typename?: 'Mutation', deleteStashable?: boolean | null };

export type StashablesQueryVariables = Exact<{ [key: string]: never; }>;


export type StashablesQuery = { __typename?: 'Query', stashables?: Array<{ __typename?: 'Stashable', id: number, link?: string | null, ogResult?: { __typename?: 'OGResult', ogDescription?: string | null, ogTitle?: string | null, ogType?: string | null, ogUrl?: string | null, ogImage?: { __typename?: 'OGImage', url?: string | null, height?: string | null, width?: string | null, type?: string | null } | null } | null } | null> | null };

export type UpdateStashableMutationVariables = Exact<{
  id: Scalars['Int'];
  link: Scalars['String'];
}>;


export type UpdateStashableMutation = { __typename?: 'Mutation', updateStashable?: boolean | null };


export const AddStashableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddStashable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"link"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addStashable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"link"}}}]}]}}]} as unknown as DocumentNode;
export type AddStashableMutationFn = Apollo.MutationFunction<AddStashableMutation, AddStashableMutationVariables>;

/**
 * __useAddStashableMutation__
 *
 * To run a mutation, you first call `useAddStashableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStashableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStashableMutation, { data, loading, error }] = useAddStashableMutation({
 *   variables: {
 *      link: // value for 'link'
 *   },
 * });
 */
export function useAddStashableMutation(baseOptions?: Apollo.MutationHookOptions<AddStashableMutation, AddStashableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStashableMutation, AddStashableMutationVariables>(AddStashableDocument, options);
      }
export type AddStashableMutationHookResult = ReturnType<typeof useAddStashableMutation>;
export type AddStashableMutationResult = Apollo.MutationResult<AddStashableMutation>;
export type AddStashableMutationOptions = Apollo.BaseMutationOptions<AddStashableMutation, AddStashableMutationVariables>;
export const DeleteStashableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteStashable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStashable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;
export type DeleteStashableMutationFn = Apollo.MutationFunction<DeleteStashableMutation, DeleteStashableMutationVariables>;

/**
 * __useDeleteStashableMutation__
 *
 * To run a mutation, you first call `useDeleteStashableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStashableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStashableMutation, { data, loading, error }] = useDeleteStashableMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStashableMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStashableMutation, DeleteStashableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStashableMutation, DeleteStashableMutationVariables>(DeleteStashableDocument, options);
      }
export type DeleteStashableMutationHookResult = ReturnType<typeof useDeleteStashableMutation>;
export type DeleteStashableMutationResult = Apollo.MutationResult<DeleteStashableMutation>;
export type DeleteStashableMutationOptions = Apollo.BaseMutationOptions<DeleteStashableMutation, DeleteStashableMutationVariables>;
export const StashablesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Stashables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stashables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"ogResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ogDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogTitle"}},{"kind":"Field","name":{"kind":"Name","value":"ogType"}},{"kind":"Field","name":{"kind":"Name","value":"ogUrl"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useStashablesQuery__
 *
 * To run a query within a React component, call `useStashablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStashablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStashablesQuery({
 *   variables: {
 *   },
 * });
 */
export function useStashablesQuery(baseOptions?: Apollo.QueryHookOptions<StashablesQuery, StashablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StashablesQuery, StashablesQueryVariables>(StashablesDocument, options);
      }
export function useStashablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StashablesQuery, StashablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StashablesQuery, StashablesQueryVariables>(StashablesDocument, options);
        }
export type StashablesQueryHookResult = ReturnType<typeof useStashablesQuery>;
export type StashablesLazyQueryHookResult = ReturnType<typeof useStashablesLazyQuery>;
export type StashablesQueryResult = Apollo.QueryResult<StashablesQuery, StashablesQueryVariables>;
export const UpdateStashableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStashable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"link"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStashable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"link"}}}]}]}}]} as unknown as DocumentNode;
export type UpdateStashableMutationFn = Apollo.MutationFunction<UpdateStashableMutation, UpdateStashableMutationVariables>;

/**
 * __useUpdateStashableMutation__
 *
 * To run a mutation, you first call `useUpdateStashableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStashableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStashableMutation, { data, loading, error }] = useUpdateStashableMutation({
 *   variables: {
 *      id: // value for 'id'
 *      link: // value for 'link'
 *   },
 * });
 */
export function useUpdateStashableMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStashableMutation, UpdateStashableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStashableMutation, UpdateStashableMutationVariables>(UpdateStashableDocument, options);
      }
export type UpdateStashableMutationHookResult = ReturnType<typeof useUpdateStashableMutation>;
export type UpdateStashableMutationResult = Apollo.MutationResult<UpdateStashableMutation>;
export type UpdateStashableMutationOptions = Apollo.BaseMutationOptions<UpdateStashableMutation, UpdateStashableMutationVariables>;
export const namedOperations = {
  Query: {
    Stashables: 'Stashables'
  },
  Mutation: {
    AddStashable: 'AddStashable',
    DeleteStashable: 'DeleteStashable',
    UpdateStashable: 'UpdateStashable'
  }
}