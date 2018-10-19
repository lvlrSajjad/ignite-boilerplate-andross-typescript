import { select, put } from "redux-saga/effects";
import { selectAvatar, startup } from "../../Sagas/StartupSagas";
import GithubActions from "../../Redux/Github/GithubRedux";

const stepper = fn => mock => fn.next(mock).value;

test("watches for the right action", () => {
  const step = stepper(startup);
  GithubActions.userRequest("GantMan");
  expect(step).toEqual(select(selectAvatar));
  expect(step).toEqual(put(GithubActions.userRequest("GantMan")));
});
