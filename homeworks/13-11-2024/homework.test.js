const trafficLights = require("./homework");

describe("Sample test", () => {
    it("Should work", () => {
        expect(trafficLights("C...R............G......", 10)).toEqual([
            "C...R............G......", // 0
            ".C..R............G......", // 1
            "..C.R............G......", // 2
            "...CR............G......", // 3
            "...CR............G......", // 4
            "....C............O......", // 5
            "....GC...........R......", // 6
            "....G.C..........R......", // 7
            "....G..C.........R......", // 8
            "....G...C........R......", // 9
            "....O....C.......R......", // 10
        ]);
    });
});
