/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: messages
// ====================================================

export interface messages_messages_sender {
  __typename: "User";
  id: string;
  username: string;
}

export interface messages_messages_chat {
  __typename: "Chat";
  id: string;
  ChatName: string;
}

export interface messages_messages {
  __typename: "Message";
  message: string;
  sender: messages_messages_sender;
  chat: messages_messages_chat;
}

export interface messages {
  messages: messages_messages[];
}
