let a = 1; //글로벌스코프 전역변수 함수의 어디든 다접근이 가능하다 




function b (){
  //*함수 b 는 목적이 콘솔 찍고 종료 하는 기계
  //*return 값은 없다 -> undefined 값이 리턴된다.
  //console.log(a);
  var c = "이지은";//리턴을 하지않으면 절대 꺼낼수없다
  //return c;


}//함수 안에 있는것 local 




console.log();