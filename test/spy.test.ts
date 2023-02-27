import { setupNewUser } from "../src/User";

import * as Email from "../src/Email";

import sinon from "sinon";
import assert from "assert";

describe("User", () => {
  it("should setup new user and send notification", () => {
    const sendSpy = sinon.spy(Email, "send");

    setupNewUser({ name: "Test" }, () => {});

    sinon.assert.calledOnce(sendSpy);
    sinon.assert.callCount(sendSpy, 1);
    sinon.assert.calledWith(sendSpy, { name: "Test", nameLowercase: "test" });

    assert.equal(sendSpy.getCall(0).returnValue, "TEST");
    sendSpy.restore();
  });
});
