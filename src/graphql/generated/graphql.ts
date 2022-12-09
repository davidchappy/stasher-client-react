/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  id: Scalars['ID'];
};


export type MutationUpdateStashableArgs = {
  id: Scalars['ID'];
  link: Scalars['String'];
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
  id?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type StashableFilter = {
  search?: InputMaybe<Scalars['String']>;
};

export type AddStashableMutationMutationVariables = Exact<{
  link: Scalars['String'];
}>;


export type AddStashableMutationMutation = { __typename?: 'Mutation', addStashable?: boolean | null };

export type StashablesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StashablesQueryQuery = { __typename?: 'Query', stashables?: Array<{ __typename?: 'Stashable', id?: number | null, link?: string | null } | null> | null };


export const AddStashableMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddStashableMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"link"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addStashable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"link"}}}]}]}}]} as unknown as DocumentNode<AddStashableMutationMutation, AddStashableMutationMutationVariables>;
export const StashablesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StashablesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stashables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]} as unknown as DocumentNode<StashablesQueryQuery, StashablesQueryQueryVariables>;