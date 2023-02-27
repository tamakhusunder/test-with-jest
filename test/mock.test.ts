import sinon from "sinon";
import * as Email from "../src/Email";
import { setupNewUser } from "../src/User";

describe("User", () => {
  it("should pass object with correct values to send once", function () {
    const emailMock = sinon.mock(Email);
    const info = { name: "test" };

    const expectedUser = {
      name: info.name,
      nameLowercase: info.name.toLowerCase(),
    };
    emailMock.expects("send").once().withArgs(expectedUser);
    setupNewUser(info, function () {});

    emailMock.verify();
    emailMock.restore();
  });

  it("should pass the error into the callback if save fails", function () {
    const expectedError = new Error("error");
    const emailMock = sinon.mock(Email);
    const callback = sinon.spy();

    emailMock
      .expects("send")
      .once()
      .withArgs({ name: "a123", nameLowercase: "a123" })
      .throwsException(expectedError);

    setupNewUser({ name: "a123" }, callback);
    sinon.assert.calledWith(callback, expectedError);
    emailMock.verify();
    emailMock.restore();
  });
});
