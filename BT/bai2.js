


function merge2String(s1,s2) {

    var arr1 = s1.split('')
    var arr2 = s2.split("")


    var array = []
    for (i = 0; i < arr1.length; i++) {
        array.push(arr1[i])
        array.push(arr2[i])
    }
    // Return array to string
    var string = array.join()

    var newString = string.replace(/,/g, "")
    console.log(newString)

}

merge2String('abc', '123')
merge2String("abc", "0123")
merge2String("abcd", "123")
