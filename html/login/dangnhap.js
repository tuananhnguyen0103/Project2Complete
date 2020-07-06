function dangki(){
    var Ho,ten,email,gioitinh,tenNguoiDung,matKhau,laiMatKhau,SDT;
    Ho = $('table #ho').val()
    ten = $('table #ten').val()
    email = $('table #email').val()
    gioitinh = $("table input[name='gender']:checked").val()  
    tenNguoiDung =$('table #ten-dung').val()
    matKhau = $('table #mat-khau').val()
    laiMatKhau=$('table #lai-mat-khau').val()
    SDT = $('table #SDT').val()
    var patternMa =/^[a-zA-Z0-9]*$/;
    var patternTen = /^[a-zA-Z À-Ỹ]*$/;
    var patternTenNguoiDung =/^[a-zA-Z À-Ỹ-0-9]*$/;
    var patternEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    
    if(patternTen.test(Ho)==false||Ho.trim()==""){
        confirm("Vui lòng nhập Tên không có kí tự đặc biệt")
    }
    else if(patternTen.test(Ten)==false||Ten.trim()==""){
        confirm("Vui lòng nhập Tên không có kí tự đặc biệt")
    }
    else if(patternEmail.test(email)==false||email.trim()==""){
        confirm("Vui lòng nhập email theo định dạng ")
    }
    else if(patternMa.test(matKhau)==false||matKhau.trim()==""){
        confirm("Nhập mật khẩu không có kí tự đặc biệt")
    }
    else if(patternMa.test(laiMatKhau)==false||laiMatKhau.trim()==""||matKhau.trim()!=laiMatKhau.trim()){
        confirm("Nhập đúng mật khẩu bên trên")
    }
    else if(patternTenNguoiDung.test(tenNguoiDung)==false||tenNguoiDung.trim()==""){
        confirm("Vui lòng nhập tên người dùng chỉ được có kí tự -")
    }
    else if(gioitinh||gioitinh.trim()==""){
        confirm("Vui lòng chọn giới tính")
    }
    else if(SDT[0]!=0 || SDT.length!=10 ||SDT.trim()==""){
        confirm("Vui lòng nhập số điện thoại")
    }
    else{
        if(confirm("Đăng kí thành công")){
            alert("Cảm ơn quý khách")
        }
    }
}

function huyThongTin(){
    var ho,ten,email,gioitinh,tenNguoiDung,matKhau,laiMatKhau,SDT;
    ho = $('table #ho').val('')
    ten = $('table #ten').val('')
    email = $('table #email').val('')
    gioitinh = $("table input[name='gender']:checked").prop("checked", false)  
    tenNguoiDung =$('table #ten-dung').val('')
    matKhau = $('table #mat-khau').val('')
    laiMatKhau=$('table #lai-mat-khau').val('')
    SDT = $('table #SDT').val('')
}