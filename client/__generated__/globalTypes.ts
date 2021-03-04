/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateChatInput {
  ChatName: string;
  description: string;
  users: string[];
}

export interface CreateMessageInput {
  chat: string;
  message: string;
}

export interface CreateUserInput {
  email: string;
  username: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
