// constletなどの変数宣言

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// var val1 = "var編を上書き";
// console.log(val1);

// var val1 = "var変数を性宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 =  "letは変数を上書き";
// console.log(val2);

// let val2 = "let変数を際宣言"

// const val3 = "const変数";
// console.log(val3)

// val = "const変数を上書き"

// const val3 = "const変数を際宣言"

// constで提起したおぶじぇくとはプロパティに変更が可能
// const val4 = {
//   name: "take",
//   age: 28,
// }
// val4.name = "たけ";
// console.log(val4)

// const val5 = ['dog','cat'];
// val5[0] = "vird";
// val5.push("monky");

// console.log(val5);

// テンプレート文字列

// const name = "たけ";
// const age = 30;
// // 私の名前は竹です年齢は３０歳です

// // 従来の方法
// const messahe1 = "私の名前は" + name + "です年齢は" + age + "です ";
// console.log(messahe1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です年齢は${age}です`;
// console.log(message2);

// アロー関数

// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// // console.log(func2("func2です"))；

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10,20));

// 分割代入

// const myProfile = {
//   name:"たけ",
//   age: 30,
// };

// const message1 = `名前は${myProfile.name}です年齢は${myProfile.age}歳です`;
// console.log(message1);

// const{name, age} = myProfile;
// const message2 = `名前は${name}です年齢は${age}歳です`;
// console.log(message2);

// const myProfile = {
//   name: "たけ",
//   age: 30,
// };
// const {name, age} = myProfile;
// const message2 = `名前は${name}です年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ["たけ", 30];
// const message3 =`名前は${myProfile[0]}です年齢は${myProfile[1]}歳です`;
// const [] = myProfile;

// const myProfile = {
//   name: "たけ",
//   age:30,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['たけ', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [neme, age] = myProfile;
// const message4 = `なまえは${name}です。年齢は${age}歳です。`;
// console.log(message4);

// const myProfile = {
//   name: "たけ",
//   age: 30,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['たけ', 30];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4)

// const sayHello = (name) => console.log(`こんにちは!${name}さん!`);
// sayHello("たけ");
// const sayHello = (name) => console.log(`こんにちは!${name}さん!`);
// sayHello("たけ");

// スプレット構文

// 配列の展開

// const arr1 = [1, 2, 3];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2, num3) => console.log(num1 + num2 +num3);
// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1)

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー。結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5, ...arr4, ...arr4];
// console.log(arr7);

// マップや
const nameArr = ["たけ", "山田", "今日"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const namearr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(namearr2);

// nameArr.map((name, index) => console.log(`${index + 1}ばんめ${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNaneArr = nameArr.map((name) => {
//   if (name === "たけ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNaneArr);

// 三項演算子

// ある条件？条件がtrueの時：条件がfolseの時
// const val1 = 1 < 0 ? "treです" : "ファルス";
// console.log(val1);

// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 * num2 > 100 ? '１００を超えています！！' ： '許容範囲ないです'
// }
// console.log(50,60)

// 論理演算子の本当の意味を知ろう

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log("１か２はｔｒｕｅにないrます")
// }
// if (flag1 && flag2){
//   console.log("１mo２はｔｒｕｅにないrます")
// }
// ||は左側falseなら右側を返す
// const num = "";
// const fee = num || "金額もなんです";
// console.log(fee);

const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
