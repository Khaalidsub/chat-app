import { gql } from "@apollo/client";

//MUTATIONS
export const LOGIN_USER = gql`
  mutation login($username: String!, $email: String!) {
    loginUser(username: $username, email: $email)
  }
`;
export const CREATE_CHAT = gql`
  mutation createChat($createChatInput: CreateChatInput!) {
    createChat(createChatInput: $createChatInput) {
      id
      users
      description
    }
  }
`;
export const CREATE_USER = gql`
  mutation creatUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
      id
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($createMessageInput: CreateMessageInput!) {
    sendMessage(createMessageInput: $createMessageInput) {
      id
      chat
      message
      sender
    }
  }
`;

//QUERIES
export const CHATS = gql`
  query chats {
    chats {
      users
      id
      description
    }
  }
`;
export const CHAT = gql`
  query chat {
    chat {
      users
      id
      description
    }
  }
`;
export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      name
      id
      email
    }
  }
`;

//SUBSCRIPTIONS

export const MESSAGE_ADDED = gql`
  subscription messageAdded {
    messageAdded {
      id
      chat
      message
      sender
    }
  }
`;
