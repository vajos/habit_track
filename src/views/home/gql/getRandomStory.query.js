import { gql } from "@apollo/client";

export default gql`
  query GetRandomStoryQuery {
    getRandomStory {
      success
      story {
        title
        imageUrl
        uuid
        created_at
        updated_at
      }
      errors
    }
  }
`;
