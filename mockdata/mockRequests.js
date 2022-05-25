import { rest, graphql } from "msw";
import mockStories from "./stories.json";
import env from "../src/config/env";

const storyHandlers = [
  rest.get(`${env.API_ENDPOINT}/story/random`, (req, res, ctx) => {
    return res(ctx.json(mockStories[0]));
  }),
  graphql.query("GetRandomStoryQuery", (req, res, ctx) =>
    res(
      ctx.data({
        getRandomStory: { story: mockStories[0], success: true, errors: null },
      })
    )
  ),
  graphql.mutation("CreateStoryMutation", (req, res, ctx) =>
    res(
      ctx.data({
        createStory: { story: mockStories[0], success: true, errors: null },
      })
    )
  ),
];

const signedUrlHandlers = [
  graphql.query("SignedUrlQuery", (req, res, ctx) =>
    res(
      ctx.data({
        generateUrl: { signedUrl: "signed-url", success: true, errors: null },
      })
    )
  ),
  rest.put(`signed-url`, (req, res, ctx) => {
    return res(ctx.json({ msg: "ok" }));
  }),
];

export const defaultHandlers = [...storyHandlers, ...signedUrlHandlers];

export default defaultHandlers;
