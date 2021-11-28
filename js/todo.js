
function Ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(this.readyState==4&&this.status==200){
      var data = JSON.parse(this.responseText);
      myFunction(data);
    }
  };
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
Ajax();

function myFunction(data){

  data.forEach( function (obj){
    if(obj.completed==true){  
      $('#Demo').append('<input class="form-check-input" type="checkbox" disabled="true" checked="checked" value="'+obj.id+'"/> '+obj.title +'<br/>');
    }
    else{  
      $('#Demo').append('<input class="form-check-input" id="check" type="checkbox" value="'+obj.id+'"/> '+obj.title +'<br/>');
    console.log("hello");
    }
  });

  
    let count=0;
      let target=5;
      $('input[type="checkbox"]').on('change',function(){
        if($(this).prop('checked')==true){
        count++;
        if(count==target){
            alert(`Congrats! You have completed ${target} tasks!`);
          }
        }
        else{
          count--;
        }
      });
      
}


