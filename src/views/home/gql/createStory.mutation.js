import { gql } from "@apollo/client";

export default gql`
  mutation CreateStoryMutation($input: CreateStoryInput!) {
    createStory(input: $input) {
      success
      errors
      story {
        title
        imageUrl
        uuid
        imageUrl
        created_at
        updated_at
      }
    }
  }
`;
