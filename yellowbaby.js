!(function () {
    function writeCode(code) {
        let codeContainer = document.querySelector('#code')
        let drawContainer = document.querySelector('#style-draw')
        let n = 0
        let id = setInterval(() => {
            n += 1
            codeContainer.innerHTML = code.substring(0, n)
            drawContainer.innerHTML = code.substring(0, n)
            codeContainer.scrollTop = codeContainer.scrollHeight
            if (n >= code.length) {
                clearInterval(id)
            }
        }, 5)
    }
    let code = `
    /*设定容器样式*/
    .wrapper{
        width: 400px;
        height: 600px;
        margin:10px auto;
        position: relative;
        z-index: -2;
    }
    /*设身体样式*/
    .xhr_body{
        width: 250px;
        height: 400px;
        border: 5px solid #000;
        border-radius: 120px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: yellow;
        overflow: hidden;
    }

    /*头发的样式*/
    .xhr_hair_1,.xhr_hair_2{
        width: 130px;
        height: 100px;
        border-top:10px solid #000;
        border-radius: 50%;
        position: absolute; 
    }
    .xhr_hair_1{
        left: 100px;
        top:80px;
        transform: rotate(40deg);
    }
    .xhr_hair_2{
        left: 100px;
        top:70px;
        transform: rotate(40deg);
    }
    /*制作手臂*/
    .xhr_hand_l,.xhr_hand_r{
        width: 100px;
        height: 100px;
        background: yellow;
        position: absolute;
        border: 5px solid #000;
        border-radius: 30px;
        z-index: -1;
    }

    .xhr_hand_l{
        left: 50px;
        top: 300px;
        transform: rotate(30deg);
    }
    .xhr_hand_r{
        right: 50px;
        top: 300px;
        transform: rotate(-30deg);
    }
    /*手臂黑点的制作*/
        .xhr_hand_l::after,.xhr_hand_r::after{
        content: "";
        width: 50px;
        height: 10px;
        background: #000;
        border-radius: 10px;
        position: absolute;
    }
    .xhr_hand_l::after{
        left: -3px;
        top:50px;
        transform: rotate(-90deg);
    }
    .xhr_hand_r::after{
        right: -3px;
        top: 50px;
        transform: rotate(-90deg);
    }
    /*制作小黄人的腿*/
    .xhr_footer_l,.xhr_footer_r{
        width: 40px;
        height: 60px;
        background: #000;
        position: absolute;
    }
    .xhr_footer_l{
        left: 155px;
        top: 500px;
    }
    .xhr_footer_r{
        right: 155px;
        top: 500px;
    }
    /*制作小黄人的脚 伪类选择器*/
    .xhr_footer_l::after,.xhr_footer_r::after{
        content: "";
        width:60px;
        height: 40px;
        background: #000;
        border-radius:20px;
        position: absolute;
    }

    .xhr_footer_l::after{
        left: -40px;
        top: 20px;
    }
    .xhr_footer_r::after{
        right: -40px;
        top: 20px;
    }
    /*制作眼镜*/
    .xhr_eyes{
        position: absolute;
        left: 25px;
        top: 60px;
    }
    .xhr_eyes_l,.xhr_eyes_r{
        width: 90px;
        height: 90px;
        border: 5px solid #000;
        border-radius: 50%;
        background: white;
        float: left;
    }
    .xhr_eyes_l::after,.xhr_eyes_r::after{
        content: "";
        width: 30px;
        height: 20px;
        background: #000;
        position: absolute;
    }
    .xhr_eyes_l::after{
        left: -25px;
        top: 30px;
        transform: rotate(20deg);
    }
    .xhr_eyes_r::after{
        right: -25px;
        top: 30px;
        transform: rotate(-20deg);
    }

    /*制作眼珠*/
    .xhr_l_black,.xhr_r_black{
        width:50px;
        height:50px;
        border-radius: 50%;
        background: #000;
        position: absolute;
    }
    .xhr_l_black{
        left:25px; 
        top:25px; 
    }
    .xhr_r_black{
        left:125px; 
        top:25px; 
    }

    /*白眼珠样式设定*/

    .xhr_l_white,.xhr_r_white{
        width:20px;
        height:20px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
    }
    .xhr_l_white{
    left:50px; 
    top:40px; 
    }
    .xhr_r_white{
        left:130px; 
        top:40px; 
    }

    /*制作小黄人的嘴巴*/
    .xhr_mouth{
        width: 60px;
        height: 35px;
        border:5px solid #000;
        border-radius: 0 0 0 30px;
        background: #fff;
        position: absolute;
        left: 89px;
        top: 180px;
        transform: rotate(-30deg);
    }
    .xhr_mouth::after{
        content: "";
        width: 81px;
        height: 40px;
        background: yellow;
        position: absolute;
        border-bottom: 5px solid #000;
        top:-23px;
        left: 1px;
        transform: rotate(30deg);
    }

    /*制作裤子*/
        .xhr_trousers{
        position: absolute;
        top:290px;
    }
    .xhr_trousers_t{
        width: 150px;
        height: 50px;
        background: blue;
        border:5px solid #000;
        border-bottom: none;
        position: absolute;
        left: 45px;
        top:-40px;
        z-index:999;
    }
    .xhr_trousers_b{
        width: 250px;
        height: 100px;
        background: blue;
        border:5px solid #000;
        position: absolute;
        top: 10px;
    }
    /*肩带的设定*/
    .t_l_belt,.t_r_belt{
        width: 100px;
        height: 20px;
        background: blue;
        border: 5px solid #000;
        position: absolute;
    }
    .t_l_belt{
        left: -79px;
        top: -20px;
        transform: rotate(30deg);
    }
    .t_r_belt{
        right: -79px;
        top: -20px;
        transform: rotate(-30deg);
    }
    .t_l_belt::after,.t_r_belt::after{
        content: "";
        width:10px;
        height: 10px;
        background: #000;
        border-radius: 50%;
        position: absolute;
    }
    .t_l_belt::after{
        left: 82px;
        top: 5px;
    }
    .t_r_belt::after{
        left: 10px;
        top:5px;
    }
    /*给眼睛做动画*/
    .xhr_l_black,.xhr_r_black{
        animation-dalay:2s;
        animation: blackEyes 5s ease-in 1.7s infinite;
    /* 	绑定动画的属性   动画名称  动画完成时间   曲线速度（低速开始）  循环次数（一直循环） */
    }
    @keyframes blackEyes{
    20%,50%,60%,100%{
        transform: translate(0);
    }
    30%,40%{
        transform: translate(15px);
    }
    70%,80%{
        transform: translate(-15px);
    }
    }
    /*白眼珠的运动*/
    .xhr_l_white,.xhr_r_white{
    animation: whiteEyes 5s ease-in  infinite;
    }

    @keyframes whiteEyes{
    20%,50%,60%,100%{
        transform: translate(0);
    }
    30%,40%{
        transform: translate(15px,4px);
    }
    70%,80%{
        transform: translate(-15px,4px);
    }
    }

    /*头发的动画*/
    .xhr_hair_1,.xhr_hair_2{
        animation: hair 5s ease-in infinite;
    }

    @keyframes hair{
    10%,20%,50%,60%,100%{
        transform: rotate(40deg);
    }
    30%,40%{
        transform: rotate(43deg);
    }
    70%,80%{
        transform: rotate(46deg);
    }
    }
    /*
    *小黄人完成！
    */
        `
    writeCode(code)
})()