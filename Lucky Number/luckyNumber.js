



var button = document.getElementById('btn')



button.addEventListener("click", function () {

  
    var luckyNum1 = '1'
    var luckyNum2 = '7'
    var luckyNum3 = '4'

    const user = document.getElementById("demo").value
    




    if(isNaN(user)){

        document.getElementById('noti').innerHTML ='Ký tự không hợp lệ - Bạn phải nhập số'
        
    }

    

    else if(user == luckyNum1 || user == luckyNum2 || user == luckyNum3){
        console.log('234')
        document.getElementById('noti').innerHTML =''
        document.getElementById('loser').innerHTML =''
        document.getElementById('win').innerHTML ='Bạn đã trúng thưởng'
        
    }else{
        document.getElementById('noti').innerHTML =''
        document.getElementById('loser').innerHTML ='Bạn nhập đúng'
        document.getElementById('win').innerHTML =''
        
    }
   

})
