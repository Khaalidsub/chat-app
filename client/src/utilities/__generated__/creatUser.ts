/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: creatUser
// ====================================================

export interface creatUser_createUser {
  __typename: "User";
  username: string;
  id: string;
}

export interface creatUser {
  createUser: creatUser_createUser;
}

export interface creatUserVariables {
  createUserInput: CreateUserInput;
}
