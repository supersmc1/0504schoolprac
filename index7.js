//왜 이렇게 작성하지?
let a ="똑"
let b ="딱"

//console.log(a);
//console.log(b);
let isStatus = true
let current = 0;
setInterval(function(){
  if(isStatus ===true){
    console.log(a);
    isStatus = false
  }else{
    console.log(b);
    isStatus = true;
    current++;
    console.log('지금똑딱이 횟수는 ${current} 입니다')
  }

  if(current > 10){
    clearInterval(timer);
  }
},1000);
