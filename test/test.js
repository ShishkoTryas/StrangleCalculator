const { expect } = require("chai")
const hre = require("hardhat")
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers")


describe("StrangeCalculator", async function () {
    async function deployFixture() {
        const sc = await hre.ethers.deployContract("StrangleCalculator");

        return { sc }
    }

    it("should be correct deploy", async function() {
        const { sc } = await loadFixture(deployFixture);

        expect(await sc.getAddress()).to.exist;
    });

    it("should be correct change storage", async function() {
        const { sc } = await loadFixture(deployFixture);
        let point = {
            x: 5,
            y: 5
        };
        let first = 5;
        await sc.setNewValues(first, point);
        const resultMap = await sc.getMapValue(12);
        expect(resultMap.x).to.equal(point.x);
        expect(resultMap.y).to.equal(point.y);

        const calcSum = first + point.x + point.y;
        const resultSum = await sc.getStorageValuesSum();
        expect(resultSum).to.equal(calcSum);
    });
})

