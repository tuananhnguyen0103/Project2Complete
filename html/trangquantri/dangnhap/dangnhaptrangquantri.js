function dangnhap(){
    var patternMa =/^[a-zA-Z0-9]*$/;
    var user = $('.container-info #user').val()
    var pass = $('.container-info #password').val()
    if(patternMa.test(user)==false||user.trim()==""||user.trim()!="tuananh010320"){
        confirm("Nhập sai tài khoản mật khẩu")
    }
    else if(patternMa.test(pass)==false||pass.trim()==""||pass.trim()!="101181"){
        confirm("Nhập sai tài khoản mật khẩu")
    }
    else{
        if(confirm("Đăng nhập thành công! Chuyển sang trang quản trị?")){
            window.location="../quanlysanpham/qlsanpham.html"
            alert("Đăng nhập thành công")
        }
        else{
            alert("Vui lòng chọn user khác")
        }
    }
}