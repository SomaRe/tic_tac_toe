
$(document).ready(function(){
    
   $(".reset").click(function(){
      var cells=document.querySelectorAll("td");
       for(var i=0;i<9;i++){
           cells[i].textContent='';
       }
       last="";
   });
    
    var last='';
    
    $("td").click(function(){
         if(this.textContent==='' && last===''){
             this.textContent="X";
             last='X';
        }
        
        else if(last==='X'){
            this.textContent="O";
            last='O';
        }
        else if(last==='O'){ 
            this.textContent='X';
            last='X';
        }
        else{
            
        }
        
        var winner = "nil"
        //rows
    if($(".cell1").text() === $(".cell2").text() && $(".cell2").text()===$(".cell3").text()){
        winner = $(".cell1").text();
    } 
    else if($(".cell3").text() === $(".cell4").text() && $(".cell4").text()===$(".cell5").text()){
        winner = $(".cell3").text();
    } 
    else if($(".cell7").text() === $(".cell8").text() && $(".cell8").text()===$(".cell9").text()){
        winner = $(".cell7").text();
    } 
        //columns
    else if($(".cell1").text() === $(".cell4").text() && $(".cell4").text()===$(".cell7").text()){
        winner = $(".cell1").text();
    } 
    else if($(".cell2").text() === $(".cell5").text() && $(".cell5").text()===$(".cell8").text()){
        winner = $(".cell2").text();
    } 
    else if($(".cell3").text() === $(".cell6").text() && $(".cell6").text()===$(".cell9").text() ){
            winner = $(".cell3").text();
            }
        //diagonal
     else if($(".cell1").text() === $(".cell5").text() && $(".cell5").text()===$(".cell9").text() ){
            winner = $(".cell1").text();
            }
     else if($(".cell3").text() === $(".cell5").text() && $(".cell5").text()===$(".cell7").text() ){
            winner = $(".cell3").text();
            }    
    //else{
   //     winner='nil';
    //}
         $(".result").text(winner); 
        
    
    });
       
  
});

 