/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onChatMessage
// ====================================================

export interface onChatMessage_onChatMessage_sender {
  __typename: "User";
  username: string;
  id: string;
}

export interface onChatMessage_onChatMessage_chat {
  __typename: "Chat";
  id: string;
}

export interface onChatMessage_onChatMessage {
  __typename: "Message";
  message: string;
  id: string;
  sender: onChatMessage_onChatMessage_sender;
  chat: onChatMessage_onChatMessage_chat;
}

export interface onChatMessage {
  onChatMessage: onChatMessage_onChatMessage;
}

export interface onChatMessageVariables {
  id: string;
}
