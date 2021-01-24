/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: chatMessages
// ====================================================

export interface chatMessages_chatMessages_sender {
  __typename: "User";
  username: string;
  id: string;
}

export interface chatMessages_chatMessages_chat {
  __typename: "Chat";
  id: string;
}

export interface chatMessages_chatMessages {
  __typename: "Message";
  message: string;
  id: string;
  sender: chatMessages_chatMessages_sender;
  chat: chatMessages_chatMessages_chat;
}

export interface chatMessages {
  chatMessages: chatMessages_chatMessages[];
}

export interface chatMessagesVariables {
  id: string;
}
