
$(document).ready(function(){
    
     $(".reset").click(function()
       {
       location.reload(true); 
        });
    
    var last='';
    
    function clickdisable(){
            $("td").off('click');
            }
    
    $(".2player").click(function(){
        $(this).attr('disabled',true);
        $('.1player').css('display','none');
        $("td").css("opacity",1);
        
    $(".subcell").click(function(){
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
      
        
        
        //rows
    if($(".subcell1").text() === $(".subcell2").text() && $(".subcell2").text()===$(".subcell3").text() && $(".subcell1").text()!=""){
        winner = $(".subcell1").text();
        $("#hl1").css("display","block");
        clickdisable();
    } 
    else if($(".subcell4").text() === $(".subcell5").text() && $(".subcell5").text()===$(".subcell6").text() && $(".subcell4").text()!=""){
       winner = $(".subcell4").text();
        $("#hl2").css("display","block");
        clickdisable();
    } 
        
    else if($(".subcell7").text() === $(".subcell8").text() && $(".subcell8").text()===$(".subcell9").text() && $(".subcell7").text()!=""){
        winner = $(".subcell7").text();
        $("#hl3").css("display","block");
        clickdisable();
    } 
        
        //columns
    else if($(".subcell1").text() === $(".subcell4").text() && $(".subcell4").text()===$(".subcell7").text() && $(".subcell1").text()!=""){
        winner = $(".subcell1").text();
        $("#vl1").css("display","block");
        clickdisable();
    } 
    else if($(".subcell2").text() === $(".subcell5").text() && $(".subcell5").text()===$(".subcell8").text() && $(".subcell2").text()!=""){
        winner = $(".subcell2").text();
        $("#vl2").css("display","block");
        clickdisable();
    } 
    else if($(".subcell3").text() === $(".subcell6").text() && $(".subcell6").text()===$(".subcell9").text() && $(".subcell3").text()!=""){
        winner = $(".subcell3").text();
        $("#vl3").css("display","block");
        clickdisable();
    }
        
        //diagonal
     else if($(".subcell1").text() === $(".subcell5").text() && $(".subcell5").text()===$(".subcell9").text() && $(".subcell1").text()!=""){
        winner = $(".subcell1").text();
        $("#dl1").css("display","block");
        clickdisable();
    }
     else if($(".subcell3").text() === $(".subcell5").text() && $(".subcell5").text()===$(".subcell7").text() && $(".subcell3").text()!="" ){
        winner = $(".subcell3").text();
        $("#dl2").css("display","block");
        clickdisable();
    }  
         $(".result").text(winner);  
           
       });
   
       
          
    
    });
    
    /*$(".1player").click(function(){
        $(this).attr('disabled',true);
        $('.2player').css('display','none');
        $(".instructions").fadeIn();
        $(".instructions").fadeOut(1500);
        
        var alltd = document.querySelectorAll("td");
        var numarr= [0,1,2,3,4,5,6,7,8];
         
        function ai(){
             for(var i=0;i<numarr.length;i++){
                if($(alltd[numarr[i]]).text()==='X'){
                    numarr.splice(i,1);
                    //$(".test").append("<p>X: "+numarr+"<p>");
                }
            }
            var num = Math.floor(Math.random()*(numarr.length));
            $(alltd[numarr[num]]).text("O").animate({opacity: 1},1000);
            numarr.splice(num,1);
            //$(".test").append("<p>O: "+numarr+"<p>");
        }
                

         $("td").click(function(){
         if(this.textContent==='')
         {
             this.textContent="X";
             this.style.opacity="1";
             ai();
        }
       
        var winner = "nil"
        
        
        
        //rows
    if($(".subsubcell1").text() === $(".subcell2").text() && $(".subcell2").text()===$(".subcell3").text() && $(".subcell1").text()!=""){
        winner = $(".subcell1").text();
        $("#hl1").css("display","block");
        clickdisable();
    } 
    else if($(".subcell4").text() === $(".subcell5").text() && $(".subcell5").text()===$(".subcell6").text() && $(".subcell4").text()!=""){
        winner = $(".subcell4").text();
        $("#hl2").css("display","block");
        clickdisable();
    } 
    else if($(".subcell7").text() === $(".subcell8").text() && $(".subcell8").text()===$(".subcell9").text() && $(".subcell7").text()!=""){
        winner = $(".subcell7").text();
        $("#hl3").css("display","block");
        clickdisable();
    } 
        
        //columns
    else if($(".subcell1").text() === $(".subcell4").text() && $(".subcell4").text()===$(".subcell7").text() && $(".subcell1").text()!=""){
        winner = $(".subcell1").text();
        $("#vl1").css("display","block");
        clickdisable();
    } 
    else if($(".subcell2").text() === $(".subcell5").text() && $(".subcell5").text()===$(".subcell8").text() && $(".subcell2").text()!=""){
        winner = $(".subcell2").text();
        $("#vl2").css("display","block");
        clickdisable();
    } 
    else if($(".subcell3").text() === $(".subcell6").text() && $(".subcell6").text()===$(".subcell9").text() && $(".subcell3").text()!=""){
        winner = $(".subcell3").text();
        $("#vl3").css("display","block");
        clickdisable();
    }
        
        //diagonal
     else if($(".subcell1").text() === $(".subcell5").text() && $(".subcell5").text()===$(".subcell9").text() && $(".subcell1").text()!=""){
        winner = $(".subcell1").text();
        $("#dl1").css("display","block");
        clickdisable();
    }
     else if($(".subcell3").text() === $(".subcell5").text() && $(".subcell5").text()===$(".subcell7").text() && $(".subcell3").text()!="" ){
        winner = $(".subcell3").text();
        $("#dl2").css("display","block");
        clickdisable();
    }    
            $(".result").text(winner);
           
       })
   
          
          
    });*/
  
});

 