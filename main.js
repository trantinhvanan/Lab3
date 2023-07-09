//Bai 1
var x = 1;
for (let i = 1; i <=5; i++) {
    console.log("\n");
    var b = "";
    for (let a = 0; a < x; a++){
        b = b + '1';
    }
    console.log(b);
    x += 2;
}
//Bai 2
var myArr = [9,7,9,0,7,8,387,123,456];
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 == 0) {
        console.log(myArr[i] + " là số chẵn");
    } else {
        console.log(myArr[i] + " là số lẻ");
    }
}
//Bai 3
var answers = [];
var answer = prompt ("Bạn ăn cơm chưa?").toLowerCase();
if (answer === "yes") {
    answers.push(answer);
    answer = prompt ("Bạn muốn ăn tráng miệng không?")
    if (answer === "yes") {
        answers.push(answer);
        answer = prompt ("Bạn muốn ăn bánh ngọt không?")
        if (answer === "yes") {
            answers.push(answer);
            alert("Vậy để tôi đi lấy!")
        } else {
            answers.push(answer);
            alert("Vậy thôi!")
        }
    } else {
        answers.push(answer);
        alert("Vậy thôi!")
    }
} else {
    answers.push(answer);
    answer = prompt ("Bạn muốn ăn sườn xáo chua ngọt không?")
    if (answer === "yes") {
        answers.push(answer);
        alert("Vậy đi ăn thôi!")
    } else {
        answers.push(answer);
        answer = prompt ("Bạn muốn ăn phở không?")
        if (answer === "yes") {
            answers.push(answer);
            alert("Vậy đi ăn thôi!")
        } else {
            answers.push(answer);
            alert("Khỏi đi ăn với bạn vậy!")
        }
    }
}
console.log(answers);