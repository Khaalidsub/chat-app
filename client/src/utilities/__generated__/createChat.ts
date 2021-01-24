/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChatInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createChat
// ====================================================

export interface createChat_createChat_users {
  __typename: "User";
  username: string;
  id: string;
}

export interface createChat_createChat {
  __typename: "Chat";
  id: string;
  users: createChat_createChat_users[];
  description: string;
}

export interface createChat {
  createChat: createChat_createChat;
}

export interface createChatVariables {
  createChatInput: CreateChatInput;
}
