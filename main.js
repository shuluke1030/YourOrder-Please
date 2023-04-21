function order(words) {
    if (words === "") {
        return ""
    }
    let arr = words.split(' ');
    let result = [];
    //   return arr[0].toString()
    for (let i = 1; i <= arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let arrJ = arr[j].toString("").split("")
            if (arrJ.indexOf(i.toString()) !== -1) {
                result.push(arr[j])
            }
        }
    }
    return result.join(" ")

}
console.log(order("is2 Thi1s T4est 3a"))