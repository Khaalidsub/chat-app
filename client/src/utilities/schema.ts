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
      users {
        username
        id
      }
      description
    }
  }
`;
export const CREATE_USER = gql`
  mutation creatUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      username
      id
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($createMessageInput: CreateMessageInput!) {
    sendMessage(createMessageInput: $createMessageInput) {
      message
      chat {
        ChatName
      }

      sender {
        username
      }
    }
  }
`;

//QUERIES
export const CHATS = gql`
  query chats {
    chats {
      ChatName
      users {
        username
        id
      }
      id
      description
    }
  }
`;

export const MESSAGES = gql`
  query messages {
    messages {
      message
      sender {
        id
      }
      chat {
        id
      }
    }
  }
`;
export const CHAT_MESSAGES = gql`
  query chatMessages($id: String!) {
    chatMessages(id: $id) {
      message
      id
      sender {
        username
        id
      }
      chat {
        id
      }
    }
  }
`;
// export const CHAT = gql`
//   query chat {
//     chat {
//       users
//       id
//       description
//     }
//   }
// `;
export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      username
      id
      email
    }
  }
`;

//SUBSCRIPTIONS

export const MESSAGE_ADDED = gql`
  subscription onChatMessage($id: String!) {
    onChatMessage(id: $id) {
      message
      id
      sender {
        username
        id
      }
      chat {
        id
      }
    }
  }
`;
