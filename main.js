!function(){
    var duration = 50;

    $('.actions').on('click','button',(e) => {
        let $button = $(e.currentTarget);
        let speed = $button.attr('data-speed');
        $button.addClass('active').siblings('.active').removeClass('active');
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }


    })

    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
      let id =  setTimeout(function fn1(){
            n++;
            container.innerHTML = code.substring(0,n);
            styleTag.innerHTML = code.substring(0,n);
            container.scrollTop = container.scrollHeight;
            if(n>=code.length){

            }
            else{
              id = setTimeout(fn1,duration);
            }
        },duration)
        fn();
    }
    let code = `
    #preview{
    height:100vh;
    border:1px  solid pink;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items:center;
    background: #FEE433;

}
.wrapper{
    width:100%;
    height:165px;
    position: relative;
}
.nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left:50%;
    top: 28px;
    margin-left: -12px;

}

.eye{
    width:49px;
    height:49px;
    background:#2E2E2E;
    position: absolute;
    border-radius:50%;
    border:2px solid #000000;
}
.eye::before{
    content:'';
    display: block;
    width:24px;
    height:24px;
    background:white;
    border-radius:50%;
    border:2px solid #000000;
    position: absolute;
    left:6px;
    top:-1px;
    box-shadow: -1px -1px 1px #ddd inset;

}
.eye.left{
    right:50%;
    margin-right:90px;

}
.eye.right{
    left:50%;
    margin-left:90px;
}

.face{
    width:68px;
    height:68px;
    border-radius:50%;
    position: absolute;
    border:2px solid #000000;
    background:#FC0D1C;
    top:85px;
}

.face.left{
    right:50%;
    margin-right:116px;}
.face.right{
    left:50%;
    margin-left:116px;
}

.upperLip{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #FDE348;


}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}

.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}

.lowerLip-Wrapper{
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    height: 110px;
    overflow: hidden;
    width: 300px;
}

.lowerLip{
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}`
    writeCode('',code);


}.call()

