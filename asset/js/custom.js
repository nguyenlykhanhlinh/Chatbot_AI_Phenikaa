$(function () {
    "use strict";
    let linkRedirect = 'https://phenikaa-uni.edu.vn/vi/page/phenikaa-vr-tour';
    if(window.location.href ===linkRedirect){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            //document.write("mobile");
            window.location.href = "https://vrtour.phenikaa-uni.edu.vn/";
          }
    }   
});
