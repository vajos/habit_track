import { gql } from "@apollo/client";

export default gql`
  query SignedUrlQuery($input: SignedUrlInput!) {
    generateUrl(input: $input) {
      success
      errors
      signedUrl
    }
  }
`;
