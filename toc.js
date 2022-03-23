

 function run22(){
     let d1,d2,d3,d4,d5,d6,d7,d8,d9;
  d1=document.getElementById('a1').value;
  d2=document.getElementById('a2').value;
  d3=document.getElementById('a3').value;
  d4=document.getElementById('a4').value;
  d5=document.getElementById('a5').value;
  d6=document.getElementById('a6').value;
  d7=document.getElementById('a7').value;
  d8=document.getElementById('a8').value;
  d9=document.getElementById('a9').value;


//check player x won or not after that disabled all the other fields

    if((d1=='x' || d1=='X') && (d2=='x' || d2=='X') && (d3=='x' || d3=='X')){
        document.getElementById('demo').innerHTML= "player x won";
        document.getElementById('a4').disabled = true;
        document.getElementById('a5').disabled = true;
        document.getElementById('a6').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
        alert("Player X Won");
    }else if((d4=='x' || d4=='X') && (d5=='x' || d5=='X') && (d6=='x' || d6=='X')){
        document.getElementById('demo').innerHTML="player x won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
        alert("Player X Won");
    }else if((d7=='x' || d7=='X') && (d8=='x' || d8=='X') && (d9=='x' || d9=='X')){
        document.getElementById('demo').innerHTML="player x won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a4').disabled = true;
        document.getElementById('a5').disabled = true;
        document.getElementById('a6').disabled = true;
        alert("Player X Won");
    }else if((d1=='x' || d1=='X') && (d4=='x' || d4=='X') && (d7=='x' || d7=='X')){
        document.getElementById('demo').innerHTML="player x won";

        document.getElementById('a5').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a6').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
        alert("Player X Won");

    }else if((d3=='x' || d3=='X') && (d6=='x' || d6=='X') && (d9=='x' || d9=='X')){
        document.getElementById('demo').innerHTML="player x won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a4').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a5').disabled = true;
        alert("Player X Won");
    }else if((d2=='x' || d2=='X') && (d5=='x' || d5=='X') && (d8=='x' || d8=='X')){
        document.getElementById('demo').innerHTML="player x won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a4').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a6').disabled = true;
        document.getElementById('a9').disabled = true;
        alert("Player X Won");
    }else if((d1=='x' || d1=='X') && (d5=='x' || d5=='X') && (d9=='x' || d9=='X')){
        document.getElementById('demo').innerHTML="player x won";

        document.getElementById('a6').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
        alert("Player X Won");
    }
    else if((d3=='x' || d3=='X') && (d5=='x' || d5=='X') && (d7=='x' || d7=='X')){
        document.getElementById('demo').innerHTML="player x won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a4').disabled = true;
        document.getElementById('a6').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
        alert("Player X Won");
    }
    ////check player O won or not after that disabled all the other fields
    
    else if((d1=='o' || d1=='O') && (d2=='o' || d2=='O') && (d3=='o' || d3=='O')){
        document.getElementById('demo').innerHTML="player O won";

        document.getElementById('a4').disabled = true;
        document.getElementById('a5').disabled = true;
        document.getElementById('a6').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
        alert("Player O Won");
    }else if((d4=='o' || d4=='O') && (d5=='o' || d5=='O') && (d6=='o' || d6=='O')){
        document.getElementById('demo').innerHTML="player O won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
      alert("Player O Won");
    }else if((d7=='o' || d7=='O') && (d8=='o' || d8=='O') && (d9=='o' || d9=='O')){
        document.getElementById('demo').innerHTML="player O won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a4').disabled = true;
        document.getElementById('a5').disabled = true;
        document.getElementById('a6').disabled = true;
        alert("Player O Won");
    }else if((d1=='o' || d1=='O') && (d4=='o' || d4=='O') && (d7=='O' || d7=='O')){
        document.getElementById('demo').innerHTML="player 0 won";

        document.getElementById('a5').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a6').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
    alert("Player O Won");

    }else if((d3=='o' || d3=='O') && (d6=='o' || d6=='O') && (d9=='o' || d9=='O')){
        document.getElementById('demo').innerHTML="player O won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a4').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a5').disabled = true;
    alert("Player O Won");
    }else if((d2=='o' || d2=='O') && (d5=='o' || d5=='O') && (d8=='o' || d8=='O')){
        document.getElementById('demo').innerHTML="player O won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a4').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a6').disabled = true;
        document.getElementById('a9').disabled = true;
        alert("Player O Won");
    }else if((d1=='o' || d1=='O') && (d5=='o' || d5=='O') && (d9=='o' || d9=='O')){
        document.getElementById('demo').innerHTML="player O won";

        document.getElementById('a6').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a3').disabled = true;
        document.getElementById('a7').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a4').disabled = true;
        alert("Player O Won");
    }
    else if((d3=='o' || d3=='O') && (d5=='o' || d5=='O') && (d7=='o' || d7=='O')){
        document.getElementById('demo').innerHTML="player O won";

        document.getElementById('a1').disabled = true;
        document.getElementById('a2').disabled = true;
        document.getElementById('a4').disabled = true;
        document.getElementById('a6').disabled = true;
        document.getElementById('a8').disabled = true;
        document.getElementById('a9').disabled = true;
    alert("Player O Won");
    }
    //Checking when match is Tie
    else if((d1=='X' || d1=='O') && (d2=='X' || d2=='O') && (d3=='X' || d3=='O') && (d4=='X' || d4=='O') && (d5=='X' || d5=='O') && (d6=='X' || d6=='O')
    && (d7=='X' || d7=='O') && (d8=='X' || d8=='0') && (d9=='X' || d9=='O') ){

        document.getElementById('demo').innerHTML="Match tie";
        alert("Match Tie");
    }else{

        if(flag == 1){
            document.getElementById('demo').innerHTML="player x turn";
        }else{
            document.getElementById('demo').innerHTML="player o turn";
        }
    }
 }

// // // //function for reset game

  function resetGame(){
    location.reload();

//alert("hello");
 document.getElementById('a1').value= '';
 document.getElementById('a2').value= '';
 document.getElementById('a6').value= '';
 document.getElementById('a3').value= '';
document.getElementById('a4').value= '';
document.getElementById('a5').value= '';
document.getElementById('a7').value= '';
document.getElementById('a8').value= '';
document.getElementById('a9').value= '';


 }





flag =1;
function run1(){
    if(flag==1){
        document.getElementById('a1').value = 'X';
        document.getElementById('a1').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a1').value = '0';
        document.getElementById('a1').disabled ="true";  
        flag = 1;
    }
}

function run2(){
    if(flag==1){
        document.getElementById('a2').value = 'X';
        document.getElementById('a2').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a2').value = '0';
        document.getElementById('a2').disabled ="true";  
        flag = 1;
    }
}

function run3(){
    if(flag==1){
        document.getElementById('a3').value = 'X';
        document.getElementById('a3').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a3').value = '0';
        document.getElementById('a3').disabled ="true";  
        flag = 1;
    }
}

function run4(){
    if(flag==1){
        document.getElementById('a4').value = 'X';
        document.getElementById('a4').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a4').value = '0';
        document.getElementById('a4').disabled ="true";  
        flag = 1;
    }
}

function run5(){
    if(flag==1){
        document.getElementById('a5').value = 'X';
        document.getElementById('a5').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a5').value = '0';
        document.getElementById('a5').disabled ="true";  
        flag = 1;
    }
}

function run6(){
    if(flag==1){
        document.getElementById('a6').value = 'X';
        document.getElementById('a6').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a6').value = '0';
        document.getElementById('a6').disabled ="true";  
        flag = 1;
    }
}

function run7(){
    if(flag==1){
        document.getElementById('a7').value = 'X';
        document.getElementById('a7').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a7').value = '0';
        document.getElementById('a7').disabled ="true";  
        flag = 1;
    }
}

function run8(){
    if(flag==1){
        document.getElementById('a8').value = 'X';
        document.getElementById('a8').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a8').value = '0';
        document.getElementById('a8').disabled ="true";  
        flag = 1;
    }
}

function run9(){
    if(flag==1){
        document.getElementById('a9').value = 'X';
        document.getElementById('a9').disabled ="true";
        flag = 0;
    }else{
        document.getElementById('a9').value = '0';
        document.getElementById('a9').disabled ="true";  
        flag = 1;
    }
}


