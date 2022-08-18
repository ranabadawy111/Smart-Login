let massage = document.getElementById("massage");
let index=Number(localStorage.getItem("indexArr"));
let data =JSON.parse(localStorage.getItem("parsonalData"));
massage.innerHTML=`Welcome ${data[index].name}`;

