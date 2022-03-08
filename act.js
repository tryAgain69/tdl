
var input=
document.getElementById('td-input');
var addbtn=
document.getElementById('btnAdd');
var list=document.getElementById('Myl');
function Addtodo(){
    var text=
    document.createTextNode(input.value);
    var li=document.createElement('li');
    li.appendChild(text);
    if(input.value==''){
        alert('please add todo')
    }else{

        list.appendChild(li)
    }

    input.value=''
    
}