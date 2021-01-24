/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onChatMessages
// ====================================================

export interface onChatMessages_onChatMessages_sender {
  __typename: "User";
  username: string;
  id: string;
}

export interface onChatMessages_onChatMessages_chat {
  __typename: "Chat";
  id: string;
}

export interface onChatMessages_onChatMessages {
  __typename: "Message";
  message: string;
  id: string;
  sender: onChatMessages_onChatMessages_sender;
  chat: onChatMessages_onChatMessages_chat;
}

export interface onChatMessages {
  onChatMessages: onChatMessages_onChatMessages;
}

export interface onChatMessagesVariables {
  id: string;
}
