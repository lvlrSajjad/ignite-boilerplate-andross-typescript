import { /**put,*/ call } from "redux-saga/effects";
//import { path } from "ramda";
import FixtureAPI from "../../Services/FixtureApi";
import { getUserAvatar } from "../GithubSagas";
//import GithubActions from "../../Redux/Github/GithubRedux";

//const stepper = fn => mock => fn.next(mock).value;

const gen = getUserAvatar(FixtureAPI, { username: "taco" });

test("first calls API", () => {
  const step = gen.next();
  // first yield is API
  expect(step.value).toEqual(call(FixtureAPI.getUser, "taco"));
});

// test("success path", () => {
//   const response = FixtureAPI.getUser("taco");
//   const step = gen.next();
//   // first step API
//   step;
//   // Second step successful return
//   const stepResponse = step(response);
//   // Get the avatar Url from the response
//   const firstUser = path(["data", "items"], response)[0];
//   const avatar = firstUser.avatar_url;
//   expect(stepResponse).toEqual(put(GithubActions.userSuccess(avatar)));
// });
//
// test("failure path", () => {
//   const response = { ok: false };
//   const step = stepper(getUserAvatar(FixtureAPI, { username: "taco" }));
//   // first step API
//   step;
//   // Second step failed response
//   expect(step(response)).toEqual(put(GithubActions.userFailure()));
// });
