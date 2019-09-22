const MahaLap = require("./maha-lap");
describe("Test Maha-Lap", () => {
  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
  test("Test Tamnai wiht Tuesday", () => {
    const result = MahaLap.tamnaiWithDay("อังคาร");
    expect(result).toEqual(3);
  });

  test("Test Tamnai wiht Sunday", () => {
    const result = MahaLap.tamnaiWithDay("อาทิตย์");
    expect(result).toEqual(1);
  });

  test("Test Tamnai wiht Wednesday", () => {
    const result = MahaLap.tamnaiWithDay("พุธ");
    expect(result).toEqual(4);
  });

  test("Test Tamnai wiht Thursday", () => {
    const result = MahaLap.tamnaiWithDay("พฤหัสบดี");
    expect(result).toEqual(5);
  });

  test("Test Tamnai wiht Friday", () => {
    const result = MahaLap.tamnaiWithDay("ศุกร์");
    expect(result).toEqual(6);
  });

  test("Test Tamnai wiht Saturday", () => {
    const result = MahaLap.tamnaiWithDay("เสาร์");
    expect(result).toEqual(7);
  });

  test("Test Tamnai wiht Songkran", () => {
    const result = MahaLap.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });

  test("Test Tamnai wiht halloween", () => {
    const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });

  test("Test Tamnai wiht Christmas", () => {
    const result = MahaLap.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });
  test("Test Tamnai with story Snake", () => {
    const result = MahaLap.tamnaiWithStory("งู");
    expect(result).toEqual(3);
  });

  test("Test Tamnai with story Cat", () => {
    const result = MahaLap.tamnaiWithStory("แมว");
    expect(result).toEqual(6);
  });

  test("Test Tamnai with story exes", () => {
    const result = MahaLap.tamnaiWithStory("แฟนเก่า");
    expect(result).toEqual(28);
  });

  test("Test Tamnai with story special alphabet", () => {
    const result = MahaLap.tamnaiWithStory("⊙▂⊙?");
    expect(result).toEqual(10);
  });

  test("Test Tamnai with story 3 space bar", () => {
    const result = MahaLap.tamnaiWithStory("   ");
    expect(result).toEqual(6);
  });
});
