module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false;
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        let temp = str[i];
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (temp === bracketsConfig[j][0]) {
                if (bracketsConfig[j][0] === bracketsConfig[j][1] && arr[arr.length - 1] === bracketsConfig[j][0]) {
                    arr.pop();
                } else {
                    arr.push(temp);
                }
            } else if (temp === bracketsConfig[j][1]) {
                if (arr[arr.length - 1] == bracketsConfig[j][0]) {
                    arr.pop();
                } else return false;
            }




        }
    }
    if (arr.length != 0) { return false }
    return true;
}
