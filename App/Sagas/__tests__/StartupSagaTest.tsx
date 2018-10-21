import { select} from "redux-saga/effects";
import {selectAvatar, startup} from "../StartupSagas";
import GithubActions from "../../Redux/Github/GithubRedux";

//const stepper = fn => mock => fn.next(mock).value;

const gen = startup();

test("watches for the right action", () => {
  const step = gen.next();
  GithubActions.userRequest("GantMan");
  expect(step.value).toEqual(select(selectAvatar));
 // expect(step.value).toEqual(put(GithubActions.userRequest("GantMan")));
});
