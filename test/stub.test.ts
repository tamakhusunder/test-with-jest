import { setupNewUser } from "../src/User";
import * as Email from "../src/Email";

import sinon from "sinon";
import assert from "assert";

describe("User", () => {
  it("should pass object with correct values to send", () => {
    const sendStub = sinon.stub(Email, "send");
    const info = { name: "tests" };

    const expectedUser = {
      name: info.name,
      nameLowercase: info.name.toLowerCase(),
    };

    setupNewUser(info, function () {});

    sendStub.restore();
    sinon.assert.calledWith(sendStub, expectedUser);
  });

  it("should return the value as determined", function () {
    const sendStub = sinon.stub(Email, "send");
    sendStub.returns("NOT_TEST");

    const callback = sinon.spy();

    const val = setupNewUser({ name: "test" }, callback);

    sendStub.restore();

    assert.notEqual(val, "TEST");
    assert.equal(val, "NOT_TEST");
  });

  it("should pass the error into the callback if save fails", function () {
    const expectedError = new Error("error");
    const sendStub = sinon.stub(Email, "send");
    sendStub.throws(expectedError);

    const callback = sinon.spy();

    setupNewUser({ name: "test" }, callback);

    sendStub.restore();

    sinon.assert.calledWith(callback, expectedError);
  });
});
