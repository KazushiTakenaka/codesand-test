/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数を再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1)

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);

// constは上書き不可
// val3 = "const変数を上書き"

// const val3 = "conse変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "たけ",
//   age: 30
// };
// val4.name = "take";
// console.log(val4);
// // ↓プロパティの追加
// val4.addres = "osaka";

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// // ↓０番目にbirdに書き換えてる
// val5[0] = "bird";
// // 配列の最後に追加している
// val5.push("monky");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "たけ";
// const age = 30;
// // 私の名前はたけです。年齢は30歳です

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2)

/**
 * アロー関数
 */
// 従来の書き方
// function func1(str) {
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 2));

// 分割代入
// const myProfile = {
//   name: "たけ",
//   age: 30,
//   address: "大阪",
// };

// const message1 = `名前は${myProfile.name}です。年齢 ${myProfile.age}です`;
// console.log(message1);

// const { name, age, address } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。住んでいるところは${address}です`;
// console.log(message2);

// const myProfile = ['たけ', 30];

// const message3 = `名前は${myProfile[0]}です。${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレッド構文...
 */

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //順番に処理する

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合(よく使うらいしい)
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//これでもコピーできるが配列を書き換えた時、元の配列も書き換えられるため使わない方がいいらしい
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "武仲"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// 三項演算子
//ある条件？条件がtrueの時：条件がfalseの時
//
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 'あああ';
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100をを超えています" : "許容範囲ないです";
// };

// console.log(checkSum(50,40))

/**
 * 論理演算子の本当鵜の意味を知ろう
 */
// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);
// &&は左側がtureなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
