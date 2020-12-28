/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: chatMessages
// ====================================================

export interface chatMessages_messages_sender {
  __typename: "User";
  username: string;
  id: string;
}

export interface chatMessages_messages_chat {
  __typename: "Chat";
  id: string;
}

export interface chatMessages_messages {
  __typename: "Message";
  message: string;
  sender: chatMessages_messages_sender;
  chat: chatMessages_messages_chat;
}

export interface chatMessages {
  messages: chatMessages_messages[];
}

export interface chatMessagesVariables {
  id: string;
}
