/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMessageInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: sendMessage
// ====================================================

export interface sendMessage_sendMessage_chat {
  __typename: "Chat";
  ChatName: string;
}

export interface sendMessage_sendMessage_sender {
  __typename: "User";
  username: string;
}

export interface sendMessage_sendMessage {
  __typename: "Message";
  message: string;
  chat: sendMessage_sendMessage_chat;
  sender: sendMessage_sendMessage_sender;
}

export interface sendMessage {
  sendMessage: sendMessage_sendMessage;
}

export interface sendMessageVariables {
  createMessageInput: CreateMessageInput;
}
