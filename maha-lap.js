class MahaLap {
  static tamnaiWithDay(day) {
    switch (true) {
      case day === "จันทร์":
        return 2;
      case day === "อังคาร":
        return 3;
      case day === "พุธ":
        return 4;
      case day === "พฤหัสบดี":
        return 5;
      case day === "ศุกร์":
        return 6;
      case day === "เสาร์":
        return 7;
      case day === "สงกรานต์":
        return 13;
      case day === "ฮาโลวีน":
        return 31;
      case day === "คริสมาสต์":
        return 25;
      default:
        return 1;
    }
  }

  static tamnaiWithStory(story) {
    const length = story.length;
    let sum = 0;
    for (let i = 0; i <= length; i++) {
      sum = sum + i;
    }
    return sum % 100;
  }

  static tamnaiWithTime(time) {
    const randomNumber = Math.random();
    if (time === "กลางวัน") {
      if (randomNumber >= 0.5) {
        return randomNumber;
      } else {
        return 0.5;
      }
    } else {
      if (randomNumber <= 0.5) {
        return randomNumber;
      } else {
        return 0.5;
      }
    }
  }
}

module.exports = MahaLap;
