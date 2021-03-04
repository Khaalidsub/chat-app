/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onChatCreated
// ====================================================

export interface onChatCreated_onChatCreations_users {
  __typename: "User";
  username: string;
  id: string;
}

export interface onChatCreated_onChatCreations {
  __typename: "Chat";
  ChatName: string;
  users: onChatCreated_onChatCreations_users[];
  id: string;
  description: string;
}

export interface onChatCreated {
  onChatCreations: onChatCreated_onChatCreations;
}
