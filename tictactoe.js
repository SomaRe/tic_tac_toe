
$(document).ready(function(){
    
     var last='';
    
    function clickdisable(){
            $("td").off('click');
            }
    
    
   $(".reset").click(function()
       {
       location.reload(true); 
        });
    
    
    $("td").click(function(){
         if(this.textContent==='' && last==='')
         {
             this.textContent="X";
             last='X';
        }
        else if(last==='X')
        {
            this.textContent="O";
            last='O';
        }
        else if(last==='O')
        { 
            this.textContent='X';
            last='X';
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

 