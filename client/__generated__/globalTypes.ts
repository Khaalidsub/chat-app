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
  sender: string;
}

export interface CreateUserInput {
  username: string;
  email: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
