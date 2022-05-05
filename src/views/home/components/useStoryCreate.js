import { useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import createStoryMutation from "../gql/createStory.mutation";
import signedUrlQuery from "../gql/signedUrl.query";

export default function useStoryCreate() {
  const [isUploading, setIsUploading] = useState();
  const [createStory] = useMutation(createStoryMutation);
  const [signedUrl] = useLazyQuery(signedUrlQuery);

  const handleCreate = async (values) => {
    setIsUploading(true);
    const { data } = await signedUrl({
      variables: { input: { fileType: values.thumbnail.type } },
    });

    if (!data.generateUrl.success) {
      throw new Error(data.errors);
    }

    await fetch(data.generateUrl.signedUrl, {
      method: "put",
      "Content-Type": values.thumbnail.type,
      body: values.thumbnail,
    });

    await createStory({
      variables: {
        input: {
          title: values.title,
          imageUrl: data.generateUrl.signedUrl.split("?")[0],
        },
      },
    });
    setIsUploading(false);
  };

  return {
    operations: { handleCreate },
    state: { isUploading },
  };
}
