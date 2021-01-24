/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: messageAdded
// ====================================================

export interface messageAdded_messageAdded_chat {
  __typename: "Chat";
  ChatName: string;
  id: string;
}

export interface messageAdded_messageAdded_sender {
  __typename: "User";
  username: string;
  id: string;
}

export interface messageAdded_messageAdded {
  __typename: "Message";
  chat: messageAdded_messageAdded_chat;
  message: string;
  sender: messageAdded_messageAdded_sender;
}

export interface messageAdded {
  messageAdded: messageAdded_messageAdded;
}
