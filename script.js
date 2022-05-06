function aa() {
    var timer = null;
    var oDiv = document.getElementById('div1');
    //注意：下面这步很容易出错！
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    //				oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
    oUl.innerHTML += oUl.innerHTML;
    //ul的总宽度等于任何一个li的宽度乘以li的个数；
    oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
    var speed = 2;
    function move() {
        /*向左滚动*/
        //当oUl.offsetLeft走到oUl.offsetWidth的一半宽度的时候，
        //将已经滚动过的另一半回滚到初始位置，即oUl.style.left = 0;
        //由于offsetLeft的值有可能为负值，但是oUl.offsetWidth的宽度不能是负值；
        //为了进行比较比较，给oUl.offsetWidth添加负号
        if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
            oUl.style.left = 0;
        }
        /*想右滚动*/
        //当oUl.offsetLeft>0的时候，后面就会出现空白；
        //所以如上，将已经滚动过的另一半回滚到oUl.offsetWidth的宽度的一半；
        //即oUl.style.left = -oUl.offsetWidth/2+'px';
        if (oUl.offsetLeft > 0) {
            oUl.style.left = -oUl.offsetWidth / 2 + 'px';
        }
        oUl.style.left = oUl.offsetLeft + speed + 'px';
    }
    timer = setInterval(move, 30);
    oDiv.onmouseover = function() {
        clearInterval(timer);
    }
    oDiv.onmouseout = function() {
        timer = setInterval(move, 30);
    }
    var oA = document.getElementsByTagName('a');
    oA[0].onmouseover = function() {
        speed = -2;
    };
    oA[1].onmouseover = function() {
        speed = 2;
    };
}

