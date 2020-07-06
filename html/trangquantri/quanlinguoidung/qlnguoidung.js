// Hiện thị thông tin của sản phẩm
var indexchange;
// function nutHienThi(declareDad){



// Click nút thêm để hiện màn hình thêm
$(".menu-main-container-button-them").click(function(){
    $(".table-them.them").css('display','flex')
})

// Click nút hiện thị màn hình sửa
// $(".chucnang-sua").click(function(){
//     $(".table-them.sua").css('display','flex')
// })
function goisua()
{
 
    var thongTinGocmaND=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var thongTinGocTaiKhoan=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var thongTinGocMatKhau=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var thongTinGocChucVu= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html()
    var thongTinGocNgayTao= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html()
    var thongTinGocTinhTrang= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    

    $('.table-them-containers #sua-ma-nguoi-dung').val(thongTinGocmaND)
    $('.table-them-containers #sua-tai-khoan').val(thongTinGocTaiKhoan)
     $('.table-them-containers #sua-mat-khau').val(thongTinGocMatKhau)
      $('.table-them-containers #sua-ngay-tao').val(thongTinGocNgayTao) 

     if(thongTinGocChucVu.toLowerCase()=="nhân viên"){
          $('.table-them-containers #sua-chuc-vu option:nth-child(1)').attr("selected","selected")
     }
     else if(thongTinGocChucVu.toLowerCase()=="khách hàng"){
         $('.table-them-containers #sua-chuc-vu option:nth-child(2)').attr("selected","selected")
     }
     else{
         $('.table-them-containers #sua-chuc-vu option:nth-child(3)').attr("selected","selected")
     }
 
     if(thongTinGocTinhTrang.toLowerCase()=="tồn tại"){
         $('.table-them-containers #sua-tinh-trang option:nth-child(1)').attr("selected","selected")
     }
     else{
        $('.table-them-containers #sua-tinh-trang option:nth-child(2)').attr("selected","selected")
     }

    $(".table-them.sua").css('display','flex')
    
}

function goiHienThi(row)
{
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    indexchange=d;

    var thongtinGocMaND=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var thongTinGocTaiKhoan=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var thongTinGocMatKhau=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var thongTinGocChucVu= $.trim($(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html())
    var thongTinGocNgayTao= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html()
    var thongTinGocTinhTrang= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    var arrayNgay = thongTinGocNgayTao.split('-');
    thongTinGocNgayTao = arrayNgay[2]+"-"+arrayNgay[1]+"-"+arrayNgay[0]


    $('.table-them-containers #thong-tin-ma-nguoi-dung').val(thongtinGocMaND)
    $('.table-them-containers #thong-tin-tai-khoan').val(thongTinGocTaiKhoan)
    $('.table-them-containers #thong-tin-mat-khau').val(thongTinGocMatKhau)
    

    $('.table-them-containers #thong-tin-ngay-tao').val(thongTinGocNgayTao) 

    if(thongTinGocChucVu.toLowerCase()=="nhân viên"){
         $('.table-them-containers #thong-tin-chuc-vu option:nth-child(1)').attr("selected","selected")
    }
    else if(thongTinGocChucVu.toLowerCase()=="khách hàng"){
        $('.table-them-containers #thong-tin-chuc-vu option:nth-child(2)').attr("selected","selected")
    }
    else{
        $('.table-them-containers #thong-tin-chuc-vu option:nth-child(3)').attr("selected","selected")
    }

    if(thongTinGocTinhTrang.toLowerCase()=="tồn tại"){
        $('.table-them-containers #thong-tin-tinh-trang option:nth-child(1)').attr("selected","selected")
    }
    else{
       $('.table-them-containers #thong-tin-tinh-trang option:nth-child(2)').attr("selected","selected")
    }
     
    $(".table-them.thong-tin").css('display','flex')
    
}
// Click nút thoát trong màn hình thêm
$(".button-thoat").click(function(){
    $(".table-them").css('display','none')

})
// Click nút thoát trong màn hình hiện thịtable-hien-them
function thoat(){
    $("#table-hien-them").css('display','none')
}

function nutHuy(){
    // Nút hủy của table Hủy
   
     $('.table-them-containers #sua-ma-nguoi-dung').val('')
     $('.table-them-containers #sua-tai-khoan').val('')
      $('.table-them-containers #sua-mat-khau').val('')
       $('.table-them-containers #sua-chuc-vu').val('')  
       $('.table-them-containers #sua-ngay-tao').val('') 
      $('.table-them-containers #sua-tinh-trang').val('')
  

// Nút hủy của table thêm

$('.table-them-containers #ma-nguoi-dung').val('')
     $('.table-them-containers #tai-khoan').val('')
      $('.table-them-containers #mat-khau').val('')
       $('.table-them-containers #chuc-vu').val('')  
       $('.table-them-containers #ngay-tao').val('') 
      $('.table-them-containers #tinh-trang').val('')


}
// Ấn ngoài bảng nó vẫn bị tắt
// $(".table-them").mousedown(function(){
//     $(".table-them").css('display','none')
// })


/*Thêm ảnh của sản phẩm*/
// Thay đổi thẻ input sau khi chọn file thì sẽ gọi hàm này
$(".inputfile").change(function(){
    // Hàm readImgUrlAndPreview là để cho thẻ img có source vừa chọn
    // Tham số this là sự kiện thay đổi
    // this ở đây là đường dẫn của ảnh
    readImgUrlAndPreview(this);
    function readImgUrlAndPreview(imgsrc){
        if(imgsrc.files){
            var newsrc = new FileReader();
            newsrc.onload = function(eventImg){
                $(".imgload").attr("src",eventImg.target.result)
            }
        }
        newsrc.readAsDataURL(imgsrc.files[0])
    }
})

// Thay đổi hình ảnh
$(".inputfilesua").change(function(){
    // Hàm readImgUrlAndPreview là để cho thẻ img có source vừa chọn
    // Tham số this là sự kiện thay đổi
    // this ở đây là đường dẫn của ảnh
    readImgUrlAndPreview(this);
    function readImgUrlAndPreview(imgsrc){
        if(imgsrc.files){
            var newsrc = new FileReader();
            newsrc.onload = function(eventImg){
                $(".suaload").attr("src",eventImg.target.result)
            }
        }
        newsrc.readAsDataURL(imgsrc.files[0])
    }
})




// Xóa thông tin của sản phẩm
function nutXoa(row){
    if(confirm("Xác nhận xóa")){
    
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById('bangsanphamid').deleteRow(d);
    UpdateXoaSoLuongSanPham()
    UpdateSTT()
    UpdateTongSLSP()
    UpdateDoanhThu()
    alert("Đã xóa")
    }
}

// Lấy hàng cần sửa
function getGiaTri(row){
    console.clear();
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    console.log(d)
    indexchange=d;
    goisua();
    
}
// Sửa thông tin của sản phẩm

function nutSua(){

// Lấy các giá trị của input sẽ được sửa

  var maND = $('.table-them-containers #sua-ma-nguoi-dung').val()
  var TaiKhoan =  $('.table-them-containers #sua-tai-khoan').val()
  var MatKhau =    $('.table-them-containers #sua-mat-khau').val()
  var ChucVu =     $('.table-them-containers #sua-chuc-vu').val()  
  var NgayTao =     $('.table-them-containers #sua-ngay-tao').val() 
  var TinhTrang =    $('.table-them-containers #sua-tinh-trang').val()

    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html(maND)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html(TaiKhoan)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html(MatKhau)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html(ChucVu)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html(NgayTao)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html(TinhTrang)
    
    console.clear();
    UpdateSTT()
    UpdateTongSLSP()
    UpdateDoanhThu()
   
}
// Sự kiện thêm thông tin sản phẩm vào trong danh sách
function themsanpham(){
    
    
    var bool = true;
    
    var maND = $('.table-them-containers #ma-nguoi-dung').val()
  var TaiKhoan =  $('.table-them-containers #tai-khoan').val()
  var MatKhau =    $('.table-them-containers #mat-khau').val()
  var ChucVu =     $('.table-them-containers #chuc-vu').val()  
  var NgayTao =     $('.table-them-containers #ngay-tao').val() 
  var TinhTrang =    $('.table-them-containers #tinh-trang').val()
    var NgayTaoChange = NgayTao.split("-")
    NgayTao = NgayTaoChange[2]+"-"+NgayTaoChange[1]+"-"+NgayTaoChange[0]

    var patternTKMK = /^[a-zA-ZÀ-Ỹ0-9]*$/;
    var patternMa =/^[a-zA-ZÀ-Ỹ0-9]*$/;
    if(patternTKMK.test(TaiKhoan) == false||TaiKhoan.trim()=="") {
        confirm("vui lòng nhập đúng định dạng của tài khoản")
    }
    else if(patternMa.test(maND)==false||maND.trim()==""){
        confirm("vui lòng nhập đúng định dạng của mã sản phẩm")
    }
    else if(patternTKMK.test(MatKhau) == false||MatKhau.trim()==""){
        confirm("vui lòng nhập đúng định dạng của mật khẩu")
    }
    else if(ChucVu.trim()==""){
        confirm("Vui lòng chọn chức vụ")
    }
    else if(NgayTao.trim()==""){
        confirm("Vui lòng chọn ngày tạo ")
    }
    else if(TinhTrang.trim()==""){
        confirm("Vui lòng chọn tình trạng")
    }
    else{
        var thongtinnguoidung = '<tr  class="">\
        <td>1</td>\
        <td>'+maND+'</td>\
        <td>'+TaiKhoan+'</td>\
        <td>'+MatKhau+'</td>\
        <td>\
            '+ChucVu+'\
        </td>\
        <td>'+NgayTao+'</td>\
        <td>'+TinhTrang+'</td>\
        <td>\
            <div class="chucnang">\
                <div class="chucnang-hienthi" onclick="goiHienThi(this)">\
                    <img src="../../../object/imgAdmin/binoculars.png" alt="">\
                </div>\
                <div class="chucnang-xoa" onclick="nutXoa(this)">\
                    <img src="../../../object/imgAdmin/delete.png" alt="">\
                </div>\
                <div class="chucnang-sua" onclick="getGiaTri(this)">\
                    <img src="../../../object/imgAdmin/edit.png" alt="">\
                </div>\
            </div>\
        </td>\
    </tr>'
        
            if(!CheckMaSanPham()){
            var valueHtml =  $('.thanbangsanpham').html()
            $('.thanbangsanpham').html(valueHtml+thongtinnguoidung)
            loadChanLe()
            UpdateThemSoLuongSanPham()
            UpdateSTT()
            UpdateTongSLSP()
            UpdateDoanhThu()
            alert("Thêm thành công")
        }
            else{
                alert("Đã tồn tại sản phẩm vui lòng chọn sửa thông tin")
            }
        }
        

}


// Màu nền cho từng sản phẩm
$(document).ready(function(){
    UpdateTongSLSP()
    UpdateDoanhThu()
    UpdateSTT()
    loadChanLe()
})

function loadChanLe(){
    var tenle = $('.thanbangsanpham tr')
    console.log(tenle.length)
    for(var i = 1;i<=tenle.length;i++){
        if(i%2!==0){
            $('.thanbangsanpham tr:nth-child('+i+')').addClass('sanpham_le')
        }
    }
}





/*Update*/

/*Sản phẩm*/
function UpdateThemSoLuongSanPham(){
  var sl= $("tbody tr").length
  $(".menu-main-desc-tittle-content .menu-main-desc-sum-content").html(sl)
}
function UpdateXoaSoLuongSanPham(){
    var sl= $("tbody tr").length
    $(".menu-main-desc-tittle-content .menu-main-desc-sum-content").html(sl)
  }


/*Số lượng*/
function UpdateThemTongSanPham(row){
    var sl= row.parent().parent().find('nth-child(6)').html()
    $(".menu-main-desc-tittle-content .menu-main-desc-sum-content").html(sl)
  }
  function UpdateXoaTongSanPham(){
      var sl= $("tbody tr").length
      $(".menu-main-desc-tittle-content .menu-main-desc-sum-content").html(sl)
    }


/* Số thứ tự*/
function UpdateSTT(){
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    
    for(var i = 1;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[0];
        if(td){
            td.textContent = i
        }
    }
}


/*Tổng số lượng sản phẩm*/
function UpdateTongSLSP(){
    var TongTien = 0;
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    for(var i = 0;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[4]
        if(td){
            var txtvalue = td.textContent.trim() || td.innerText.trim();
            if(txtvalue!="Khách Hàng")
                TongTien += 1
        }
    }
    $(".menu-main-desc-sum .menu-main-desc-content .menu-main-desc-sum-content").html(TongTien)
}    



/*Doanh thu */
function UpdateDoanhThu(){
    var TongTien = 0;
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    for(var i = 0;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[6]
        if(td){
            var txtvalue = td.textContent.trim().toLowerCase() || td.innerText.trim().toLowerCase();
            if(txtvalue=="tồn tại")
                TongTien += 1
        }
    }
    $(".menu-main-desc-sum-value .menu-main-desc-content .menu-main-desc-sum-content").html(TongTien)
}    
/* End Update*/



/*Tìm kiếm sản phẩm*/

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    // Lấy ra thẻ input chứa giá trị
    input = document.getElementById("mysearch");
    // Giá trị của thẻ input chữ thường
    filter = input.value.toUpperCase();
    // Lấy ra bảng chứa thông tin cần sắp xếp
    table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    tr = table.getElementsByTagName("tr");
    // Duyệt lần lượt các hàng trong table
    for (i = 0; i < tr.length; i++) {
        // Giá trị của trường chứa thông tin để tìm kiếm
        td = tr[i].getElementsByTagName("td")[2];
        // Nếu td có giá trị 
        if (td) {
            // Gán giá trị của txtValue bằng 2 method texstContent hoặc innerText
            // 2 phương thức này để lấy giá trị text trong 1 thẻ nào đó
            txtValue = td.textContent || td.innerText;
            // Kiểm tra txtValue có tồn tại trong chuỗi lấy ở thẻ input không?
            // Nếu có thì không làm gì
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
        }
        // Nếu td không tìm thấy
        else {
            // Các hàng sẽ bị ẩn đi
            tr[i].style.display = "none";
        }
      }       
    }
}




/* Check xem mã sản phẩm đã tồn tại chưa*/
function CheckMaSanPham(){
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    // Giá trị mã ở input
    var valueMaSp = document.getElementById("ma-nguoi-dung").value;
    for(var i = 0;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[1];
        if(td){
            var txtvalue = td.textContent || td.innerText;
            if(txtvalue.trim() == valueMaSp.trim()){
                return true;
            }
        }
    }
    return false
}
function ChangeValueMaSP() {
    var x = document.getElementById("thongtin-masp");
    var em  = x.value.toUpperCase();
    return em
}