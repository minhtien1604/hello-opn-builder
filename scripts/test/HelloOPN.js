const { expect } = require("chai");

describe("HelloOPN", function () {
  it("Should deploy", async function () {
    const HelloOPN = await ethers.deployContract("HelloOPN");
    await HelloOPN.waitForDeployment();

    expect(await HelloOPN.message()).to.equal("Hello OPN!");
  });
});
