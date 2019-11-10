
$(document).ready(function(){
    
   $(".reset").click(function(){
      var cells=document.querySelectorAll("td");
       for(var i=0;i<9;i++){
           cells[i].textContent='';
       
       $("#hl1").css("display","none");
       $("#hl2").css("display","none");
       $("#hl3").css("display","none");
       $("#vl1").css("display","none");
       $("#vl2").css("display","none");
       $("#vl3").css("display","none");
       $("#dl1").css("display","none");
       $("#dl2").css("display","none");
       }
       $(".cell").prop("disabled",false);
       $('.result').text("nil");
       last="";
       
   });
    
    var last='';
    
    function clickdisable(){
        $('.cell').prop("disabled",true);
    }
    
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
    if($(".cell1").text() === $(".cell2").text() && $(".cell2").text()===$(".cell3").text() && $(".cell1").text()!=""){
        winner = $(".cell1").text();
        $("#hl1").css("display","block");
        clickdisable();
    } 
    else if($(".cell4").text() === $(".cell5").text() && $(".cell5").text()===$(".cell6").text() && $(".cell4").text()!=""){
        winner = $(".cell4").text();
        $("#hl2").css("display","block");
        clickdisable();
    } 
    else if($(".cell7").text() === $(".cell8").text() && $(".cell8").text()===$(".cell9").text() && $(".cell7").text()!=""){
        winner = $(".cell7").text();
        $("#hl3").css("display","block");
        clickdisable();
    } 
        //columns
    else if($(".cell1").text() === $(".cell4").text() && $(".cell4").text()===$(".cell7").text() && $(".cell1").text()!=""){
        winner = $(".cell1").text();
        $("#vl1").css("display","block");
        clickdisable();
    } 
    else if($(".cell2").text() === $(".cell5").text() && $(".cell5").text()===$(".cell8").text() && $(".cell2").text()!=""){
        winner = $(".cell2").text();
        $("#vl2").css("display","block");
      clickdisable();
    } 
    else if($(".cell3").text() === $(".cell6").text() && $(".cell6").text()===$(".cell9").text() && $(".cell3").text()!=""){
            winner = $(".cell3").text();
        $("#vl3").css("display","block");
      clickdisable();
            }
        //diagonal
     else if($(".cell1").text() === $(".cell5").text() && $(".cell5").text()===$(".cell9").text() && $(".cell1").text()!=""){
            winner = $(".cell1").text();
            $("#dl1").css("display","block");
            clickdisable();
            }
     else if($(".cell3").text() === $(".cell5").text() && $(".cell5").text()===$(".cell7").text() && $(".cell3").text()!="" ){
            winner = $(".cell3").text();
            $("#dl2").css("display","block");
           clickdisable();
            }    
   
         $(".result").text(winner); 
        
    
    });
       
  
});

 