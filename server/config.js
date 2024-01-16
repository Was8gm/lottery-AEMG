/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "Special Prize"
  },
  {
    type: 1,
    count: 2,
    text: "Grand Prize",
    title: "Mystic gifts",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 5,
    text: "First Prize",
    title: "Mac Pro",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 6,
    text: "Second Prize",
    title: "华为 Mate30",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 7,
    text: "Third Prize",
    title: "Ipad Mini5",
    img: "../img/ipad.jpg"
  },
  {
    type: 5,
    count: 8,
    text: "Fourth Prize",
    title: "Dajang Drone",
    img: "../img/spark.jpg"
  },
  {
    type: 6,
    count: 8,
    text: "Fifth Prize",
    title: "Kindle Kindle Kindle",
    img: "../img/kindle.jpg"
  },
  {
    type: 7,
    count: 11,
    text: "Sixth Prize",
    title: "Bluetooth Earphone",
    img: "../img/edifier.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "AEMG";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
