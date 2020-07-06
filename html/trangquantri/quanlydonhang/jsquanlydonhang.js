// Hiện thị thông tin của sản phẩm
var indexchange;


// Click nút thêm để hiện màn hình thêm
$(".menu-main-container-button-them").click(function(){
    $(".table-them.them").css('display','flex')
})
// Click chọn đơn hàng
$(".tittle-img-has-img").click(function(){
    if($(".main-desc-tittle-img-more").css('display')=="none"){
        $(".main-desc-tittle-img-more").css('display','block')
    }
    else{
        $(".main-desc-tittle-img-more").css('display','none')
    }
})



// Click nút hiện thị màn hình sửa
// $(".chucnang-sua").click(function(){
//     $(".table-them.sua").css('display','flex')
// })
function goisua()
{
    var maHD=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var TenHD=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var DiaDiem=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var SDT= $.trim($(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html())
    var SoTien= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html()
    var Ngay= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    var arrayNgay = Ngay.split('-');
    Ngay = arrayNgay[2]+"-"+arrayNgay[1]+"-"+arrayNgay[0]
    var TrangThai= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html()


    $('.table-them-containers #sua-ma-don-hang').val(maHD)
    $('.table-them-containers #sua-ten-don-hang').val(TenHD)
    $('.table-them-containers #sua-dia-diem').val(DiaDiem)
    $('.table-them-containers #sua-so-dien-thoai').val(SDT)  
    $('.table-them-containers #sua-so-tien').val(SoTien) 
    $('.table-them-containers #sua-ngay').val(Ngay)
    if(TrangThai.toLowerCase()=="xác thực"){
        $('.table-them-containers #thongtin-lsp option:nth-child(1)').val(TrangThai).attr("selected","selected")
    }
    else if(TrangThai.toLowerCase()=="chưa xác thực"){
        $('.table-them-containers #thongtin-lsp option:nth-child(2)').val(TrangThai).attr("selected","selected")
    }
    else{
        $('.table-them-containers #thongtin-lsp option:nth-child(3)').val(TrangThai).attr("selected","selected")
    }
   
    $(".table-them.sua").css('display','flex')
    
}

function goiHienThi(row)
{
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    indexchange=d;
    
    var maHD=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var TenHD=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var DiaDiem=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var SDT= $.trim($(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html())
    var SoTien= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html()
    var Ngay= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    var arrayNgay = Ngay.split('-');
    Ngay = arrayNgay[2]+"-"+arrayNgay[1]+"-"+arrayNgay[0]
    var TrangThai= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html()


    $('.table-them-containers #thong-tin-ma-don-hang').val(maHD)
    $('.table-them-containers #thong-tin-ten-don-hang').val(TenHD)
    $('.table-them-containers #thong-tin-dia-diem').val(DiaDiem)
    $('.table-them-containers #thong-tin-so-dien-thoai').val(SDT)  
    $('.table-them-containers #thong-tin-so-tien').val(SoTien) 
    $('.table-them-containers #thong-tin-ngay').val(Ngay)
    if(TrangThai.toLowerCase()=="xác thực"){
        $('.table-them-containers #thongtin-lsp option:nth-child(1)').val(TrangThai).attr("selected","selected")
    }
    else if(TrangThai.toLowerCase()=="chưa xác thực"){
        $('.table-them-containers #thongtin-lsp option:nth-child(2)').val(TrangThai).attr("selected","selected")
    }
    else{
        $('.table-them-containers #thongtin-lsp option:nth-child(3)').val(TrangThai).attr("selected","selected")
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
   
    $('.table-them-containers #thong-tin-ma-nguoi-dung').val('')
    $('.table-them-containers #thong-tin-tai-khoan').val('')
    $('.table-them-containers #thong-tin-mat-khau').val('')
    $('.table-them-containers #thong-tin-chuc-vu').val('')  
    $('.table-them-containers #thongtin-ngay-tao').val('') 
    $('.table-them-containers #thongtin-tinh-trang').val('')
  

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
        alert("Đã xóa")
        var d = row.parentNode.parentNode.parentNode.rowIndex;
        document.getElementById('bangsanphamid').deleteRow(d);
        UpdateXoaSoLuongSanPham()
        UpdateSTT2()
        UpdateTongDoanhThu()
        UpdateDoanhThu()
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

var maDH = $('.table-them-containers #sua-ma-don-hang').val()
var TenDH =  $('.table-them-containers #sua-ten-don-hang').val()
var DiaDiem =    $('.table-them-containers #sua-dia-diem').val()
var SDT =     $('.table-them-containers #sua-so-dien-thoai').val()  
var soTien =     $('.table-them-containers #sua-so-tien').val() 
var Ngay =    $('.table-them-containers #sua-ngay').val()
var TrangThai = $('.table-them-containers #sua-trang-thai').val()
    var patternMa =/^[a-zA-Z0-9]*$/;
    var patternTen = /^[a-zA-Z À-Ỹ]*$/;
    var patternAddress =/^[a-zA-Z À-Ỹ-0-9]*$/;
    var arrayNgay = Ngay.split('-')
    var NgayTaoChange = Ngay.split("-")
    Ngay = NgayTaoChange[2]+"-"+NgayTaoChange[1]+"-"+NgayTaoChange[0]
    if(patternMa.test(maDH) == false||maDH.trim()=="") {
        confirm("Mã đơn hàng gồm các kí tự a-z,A-Z và chữ số")
    }
    else if(patternTen.test(TenDH)==false||TenDH.trim()==""){
        confirm("Tên khách hàng không có kí tự đặc biệt và số")
    }
    else if(patternAddress.test(DiaDiem) == false||DiaDiem.trim()==""){
        confirm("Địa điểm không có kí tự đặc biệt")
    }
    else if(SDT[0]!=0 || SDT.length!=10 ||SDT.trim()==""){
        confirm("vui lòng nhập đúng định dạng của số điện thoại")
    }
    else if(arrayNgay[0].length!=4 ||arrayNgay[1].length!=2||arrayNgay[2].length!=2){
        confirm("Nhập theo định dạng dd-mm-yyyy")
    }
    else if(soTien.trim()==""){
        confirm("vui lòng nhập đúng định dạng của email")
    }
    else if(TrangThai.trim()==""){
        confirm("vui lòng chọn trạng thái")
    }
    else{
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html(maDH)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html(TenDH)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html(DiaDiem)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html(SDT)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html(soTien)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html(Ngay)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html(TrangThai)

    
    UpdateSTT2()
    UpdateTongDoanhThu()
    UpdateDoanhThu()
    }
}
// Sự kiện thêm thông tin sản phẩm vào trong danh sách
function themsanpham(){
    
    
    var bool = true;
    
    var maDH = $('.table-them-containers #ma-don-hang').val()
    var TenDH =  $('.table-them-containers #ten-don-hang').val()
    var DiaDiem =    $('.table-them-containers #noi-nhan').val()
    var SDT =     $('.table-them-containers #so-dien-thoai').val()  
    var soTien =     $('.table-them-containers #so-tien').val() 
    var Ngay =    $('.table-them-containers #ngay').val()
    var TrangThai = $('.table-them-containers #trang-thai').val()
    var patternMa =/^[a-zA-Z0-9]*$/;
    var patternTen = /^[a-zA-Z À-Ỹ]*$/;
    var patternAddress =/^[a-zA-Z À-Ỹ-0-9]*$/;
    var arrayNgay = Ngay.split('-')
    var NgayTaoChange = Ngay.split("-")
    Ngay = NgayTaoChange[2]+"-"+NgayTaoChange[1]+"-"+NgayTaoChange[0]
    if(patternMa.test(maDH) == false||maDH.trim()=="") {
        confirm("Mã đơn hàng gồm các kí tự a-z,A-Z và chữ số")
    }
    else if(patternTen.test(TenDH)==false||TenDH.trim()==""){
        confirm("Tên khách hàng không có kí tự đặc biệt và số")
    }
    else if(patternAddress.test(DiaDiem) == false||DiaDiem.trim()==""){
        confirm("Địa điểm không có kí tự đặc biệt")
    }
    else if(SDT[0]!=0 || SDT.length!=10 ||SDT.trim()==""){
        confirm("vui lòng nhập đúng định dạng của số điện thoại")
    }
    else if(arrayNgay[0].length!=4 ||arrayNgay[1].length!=2||arrayNgay[2].length!=2){
        confirm("Nhập theo định dạng dd-mm-yyyy")
    }
    else if(soTien.trim()==""){
        confirm("vui lòng nhập số tiền")
    }
    else if(TrangThai.trim()==""){
        confirm("vui lòng chọn trạng thái")
    }
    else{
        var thongtinnguoidung = '<tr  class="">\
        <td>1</td>\
        <td>'+maDH+'</td>\
        <td>'+TenDH+'</td>\
        <td>'+DiaDiem+'</td>\
        <td>\
            '+SDT+'\
        </td>\
        <td>'+soTien+'</td>\
        <td>'+Ngay+'</td>\
        <td>'+TrangThai+'</td>\
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
            UpdateSTT2()
            UpdateTongDoanhThu()
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
     UpdateTongDoanhThu()
     UpdateDoanhThu()
     UpdateSTT2()
    // UpdateThemSoLuongSanPham()
    // UpdateXoaSoLuongSanPham()
    // loadChanLe()
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


/* Số thứ tự*/
function UpdateSTT(){
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    var k = 0;
    for(var i = 1;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[0];
        if(td){
            
            td.textContent = i
        }
        k = td;
    }
    $(".menu-main-desc-tittle-content .menu-main-desc-sum-content").html(k)
}
function UpdateSTT2(){
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    var k = 0
    for(var i = 1;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[0];
        if(td){
            if(tr[i].style.display == "none")
                {
                    continue;
                }
            k++;
            td.textContent = k
            
        }
    }
    $(".menu-main-desc-tittle-content .menu-main-desc-sum-content").html(k)
}

/*Tổng số lượng sản phẩm*/
function UpdateTongDoanhThu(){
    var array = []
    var TongTien = 0;
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    for(var i = 0;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[5]
        if(td){
            if(tr[i].style.display == "none")
                {
                    continue;
                }
            var txtvalue = td.textContent.trim() || td.innerText.trim();
            TongTien+=Number(txtvalue)
        }
    }
    $(".menu-main-desc-sum .menu-main-desc-content .menu-main-desc-sum-content").html(TongTien)
}    



/*Doanh thu */
function UpdateDoanhThu(){
    var Tong = 0;
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    for(var i = 0;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[7]
        if(td){
            if(tr[i].style.display == "none"){
                continue;
            }
            Tong++;
        }      
        
    }
    $(".menu-main-desc-sum-value .menu-main-desc-content .menu-main-desc-sum-content").html(Tong)
}    
/* End Update*/

// Tất cả đơn hàng
function TatCaDonHang(){
    var  table, tr, td, i;
    
    // Lấy ra bảng chứa thông tin cần sắp xếp
    table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    tr = table.getElementsByTagName("tr");
    // Duyệt lần lượt các hàng trong table
    for (i = 0; i < tr.length; i++) {
        // Giá trị của trường chứa thông tin để tìm kiếm
        td = tr[i].getElementsByTagName("td")[7];
        // Nếu td có giá trị 
        if (td) {
            if(tr[i].style.display == "none"){
                tr[i].style.display = "";
            }
            else {
                continue
            }
        }
          
    }
    UpdateSTT2()
    UpdateTongDoanhThu()
    UpdateDoanhThu()
}
// Đơn hàng xác thực
function DonHangXacThuc(){
    var input, filter, table, tr, td, i, txtValue;
    // // Lấy ra thẻ input chứa giá trị
    // input = document.getElementById("mysearch");
    // // Giá trị của thẻ input chữ thường
    filter = "Xác Thực"
    // Lấy ra bảng chứa thông tin cần sắp xếp
    table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    tr = table.getElementsByTagName("tr");
    // Duyệt lần lượt các hàng trong table
    for (i = 0; i < tr.length; i++) {
        // Giá trị của trường chứa thông tin để tìm kiếm
        td = tr[i].getElementsByTagName("td")[7];
        // Nếu td có giá trị 
        if (td) {
            // Gán giá trị của txtValue bằng 2 method texstContent hoặc innerText
            // 2 phương thức này để lấy giá trị text trong 1 thẻ nào đó
            txtValue = td.textContent || td.innerText;
            // Kiểm tra txtValue có tồn tại trong chuỗi lấy ở thẻ input không?
            // Nếu có thì không làm gì
            if (txtValue.toLowerCase()==filter.toLowerCase()) {
                tr[i].style.display = "";
        }
        // Nếu td không tìm thấy
        else {
            // Các hàng sẽ bị ẩn đi
            tr[i].style.display = "none";
        }
      }       
    }
    UpdateSTT2()
    UpdateTongDoanhThu()
    UpdateDoanhThu()
}
function DonHangChuaXacThuc(){
    var input, filter, table, tr, td, i, txtValue;
    // // Lấy ra thẻ input chứa giá trị
    // input = document.getElementById("mysearch");
    // // Giá trị của thẻ input chữ thường
    filter = "Chưa Xác Thực"
    // Lấy ra bảng chứa thông tin cần sắp xếp
    table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    tr = table.getElementsByTagName("tr");
    // Duyệt lần lượt các hàng trong table
    for (i = 0; i < tr.length; i++) {
        // Giá trị của trường chứa thông tin để tìm kiếm
        td = tr[i].getElementsByTagName("td")[7];
        // Nếu td có giá trị 
        if (td) {
            // Gán giá trị của txtValue bằng 2 method texstContent hoặc innerText
            // 2 phương thức này để lấy giá trị text trong 1 thẻ nào đó
            txtValue = td.textContent || td.innerText;
            // Kiểm tra txtValue có tồn tại trong chuỗi lấy ở thẻ input không?
            // Nếu có thì không làm gì
            if (txtValue.toLowerCase()==filter.toLowerCase()) {
                tr[i].style.display = "";
        }
        // Nếu td không tìm thấy
        else {
            // Các hàng sẽ bị ẩn đi
            tr[i].style.display = "none";
        }
      }       
    }
    UpdateSTT2()
    UpdateTongDoanhThu()
    UpdateDoanhThu()
}
function DonHangThanhToan(){
    var input, filter, table, tr, td, i, txtValue;
    // // Lấy ra thẻ input chứa giá trị
    // input = document.getElementById("mysearch");
    // // Giá trị của thẻ input chữ thường
    filter = "Thanh Toán"
    // Lấy ra bảng chứa thông tin cần sắp xếp
    table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    tr = table.getElementsByTagName("tr");
    // Duyệt lần lượt các hàng trong table
    for (i = 0; i < tr.length; i++) {
        // Giá trị của trường chứa thông tin để tìm kiếm
        td = tr[i].getElementsByTagName("td")[7];
        // Nếu td có giá trị 
        if (td) {
            // Gán giá trị của txtValue bằng 2 method texstContent hoặc innerText
            // 2 phương thức này để lấy giá trị text trong 1 thẻ nào đó
            txtValue = td.textContent || td.innerText;
            // Kiểm tra txtValue có tồn tại trong chuỗi lấy ở thẻ input không?
            // Nếu có thì không làm gì
            if (txtValue.toLowerCase()==filter.toLowerCase()) {
                tr[i].style.display = "";
        }
        // Nếu td không tìm thấy
        else {
            // Các hàng sẽ bị ẩn đi
            tr[i].style.display = "none";
        }
      }       
    }
    UpdateSTT2()
    UpdateTongDoanhThu()
    UpdateDoanhThu()
}
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
    UpdateSTT2()
    UpdateTongDoanhThu()
    UpdateDoanhThu()
}



/* Check xem mã sản phẩm đã tồn tại chưa*/
function CheckMaSanPham(){
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    // Giá trị mã ở input
    var valueMaSp = document.getElementById("ma-don-hang").value;
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

