var slideIndex = 0; // khởi tạo giá trị đầu của slide là 0
var myTime;// sau 6s làm mới lại showslide

showSlide();

//func slide auto
function showSlide() {
    var sumSlide = document.getElementsByClassName('mySlides');
    var dost = document.getElementsByClassName('click-img');
    for (var i = 0; i < sumSlide.length; i++) { //vòng lặp for sẽ đóng tất cả tấm hình
        sumSlide[i].style.display = 'none';
        dost[i].style.border = 'none'; //xóa tất cả border
    }
    slideIndex++;
    if (slideIndex > sumSlide.length) { //kiem tra slideindex mà lớn hơn tổng số slide
        slideIndex = 1;        //slide quay về tấm hình 1
    }
    sumSlide[slideIndex - 1].style.display = 'block'; //xuất tấm hình vị trí được chọn
    dost[slideIndex - 1].style.border = '2px solid red';//border hình được chọn bên dưới
    myTime = setTimeout(showSlide, 6000);
}

function slideNextPrev(n) { //khi click slide chạy tăng or giảm
    slideNextPre(slideIndex += n);
}
// func next, pre slide
function slideNextPre(n) {
    var sumSlide = document.getElementsByClassName('mySlides');
    var dost = document.getElementsByClassName('click-img');
    if (n > sumSlide.length) { //kiểm tra khi n lớn hơn tổng số hình thì
        slideIndex = 1;        //slide quay về tấm hình 1
    }
    if (n < 1) { //kiểm tra n mà nhỏ hơn 1 thì slide sẽ là tấm hình cuối
        slideIndex = sumSlide.length;
    }
    for (var i = 0; i < sumSlide.length; i++) { //vòng lặp for sẽ đóng tất cả tấm hình
        sumSlide[i].style.display = 'none';
        dost[i].style.border = 'none';//xóa tất cả border
    }
    sumSlide[slideIndex - 1].style.display = 'block'; //xuất tấm hình vị trí được chọn
    dost[slideIndex - 1].style.border = '2px solid red';//border hình được chọn bên dưới
    clearTimeout(myTime);
    myTime = setTimeout(showSlide, 6000);
}

//func click incon image
function clickIconimg(n) {
    picIconimg(slideIndex = n);
}
function picIconimg(n) {
    var sumSlide = document.getElementsByClassName('mySlides');
    var dost = document.getElementsByClassName('click-img');
    for (var i = 0; i < sumSlide.length; i++) { //vòng lặp for sẽ đóng tất cả tấm hình
        sumSlide[i].style.display = 'none';
        dost[i].style.border = 'none';//xóa tất cả border
    }
    sumSlide[slideIndex - 1].style.display = 'block'; //xuất tấm hình vị trí được chọn
    dost[slideIndex - 1].style.border = '2px solid red';//border hình được chọn bên dưới
    clearTimeout(myTime);
    myTime = setTimeout(showSlide, 6000);
}