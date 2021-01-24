/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: chats
// ====================================================

export interface chats_chats_users {
  __typename: "User";
  username: string;
  id: string;
}

export interface chats_chats {
  __typename: "Chat";
  ChatName: string;
  users: chats_chats_users[];
  id: string;
  description: string;
}

export interface chats {
  chats: chats_chats[];
}
