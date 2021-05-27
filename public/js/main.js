
let curr_x = 0
let curr_y = 0
let name = "grissomshen"

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

const getName = () => {
  name = getUrlParameter("name")	
};

const getImgPos = (e) => {
    console.log(e)
    const touch = e.touches[0]
    console.log(touch);
    pageX = e.touches[0].pageX
    pageY = e.touches[0].pageY
    console.log(pageX,pageY)
    img_dom = e.target
    parent_dom = img_dom.offsetParent
    curr_x = (pageX - parent_dom.offsetLeft) / img_dom.width * 100
    curr_y = (pageY - parent_dom.offsetTop) / img_dom.height * 100
    console.log("x",curr_x);
    console.log("y",curr_y);
    
    const table_img = document.getElementById('img_table')
    table_img.style.left = `${curr_x}%`
    table_img.style.top = `${curr_y}%`
};

const onConfirmBtn = (e) => {
   const obj = {'x': curr_x,'y': curr_y,'n':name}
   $.ajax({
     type : "POST",
     url : "/sit",
     data : JSON.stringify(obj),
     contentType: "application/json; charset=utf-8",
   })
   
   alert("已通知")
};

const registerEvent = () => {
  getName()

  const main_div = document.getElementById('img_bg')
  main_div.addEventListener("touchstart", (e) => {
    getImgPos(e)
  })

  const confirm_btn = document.getElementById('confirm_btn')
  confirm_btn.addEventListener("click", (e) => {
    onConfirmBtn(e)
  })
}

window.onload = registerEvent
