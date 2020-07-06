// Hiện thị thông tin của sản phẩm
var indexchange;



// Click nút thêm để hiện màn hình thêm
$(".menu-main-container-button-them").click(function(){
    $(".table-them.them").css('display','flex')
})

// Click nút hiện thị màn hình sửa

function goisua()
{
 
    var thongTinGocMasp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var thongTinGocMalsp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var thongTinGocTensp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var thongTinGocImg= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5) img").attr("src")
    var thongTinGocsoLuong= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html()
    var thongTinGocGiaGoc= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    var thongTinGocGiaBan= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html()
    var thongTinGocGiaKM= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(9)").html()


    $('.table-them-containers #sua-masp').val(thongTinGocMasp)
   $('.table-them-containers #sua-lsp').val(thongTinGocMalsp)
    $('.table-them-containers #sua-tensp').val(thongTinGocTensp)
     $('.table-them-containers .suaload').attr('src',thongTinGocImg)   
    $('.table-them-containers #sua-giaGoc').val(thongTinGocGiaGoc)
    $('.table-them-containers #sua-soLuong').val(thongTinGocsoLuong)
   $('.table-them-containers #sua-giaBan').val(thongTinGocGiaBan)
     $('.table-them-containers #sua-giaKM').val(thongTinGocGiaKM)


    $(".table-them.sua").css('display','flex')
    
}

function goiHienThi(row)
{
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    console.log(d)
    indexchange=d;
    var thongTinGocMasp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var thongTinGocMalsp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var thongTinGocTensp=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var thongTinGocImg= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5) img").attr("src")
    var thongTinGocsoLuong= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html()
    var thongTinGocGiaGoc= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    var thongTinGocGiaBan= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html()
    var thongTinGocGiaKM= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(9)").html()

    $('.table-them-containers #thongtin-masp').val(thongTinGocMasp)
    if(thongTinGocMalsp.toLowerCase()=="bánh mì"){
        $('.table-them-containers #thongtin-lsp option:nth-child(1)').val(thongTinGocMalsp).attr("selected","selected")
    }
    else if(thongTinGocMalsp.toLowerCase()=="cà phê"){
        $('.table-them-containers #thongtin-lsp option:nth-child(2)').val(thongTinGocMalsp).attr("selected","selected")
    }
    else if(thongTinGocMalsp.toLowerCase()=="khác"){
        $('.table-them-containers #thongtin-lsp option:nth-child(3)').val(thongTinGocMalsp).attr("selected","selected")
    }
    else if(thongTinGocMalsp.toLowerCase()=="freeze"){
        $('.table-them-containers #thongtin-lsp option:nth-child(4)').val(thongTinGocMalsp).attr("selected","selected")
    }
    else{
        $('.table-them-containers #thongtin-lsp option:nth-child(5)').val(thongTinGocMalsp).attr("selected","selected")
    }
   

    $('.table-them-containers #thongtin-tensp').val(thongTinGocTensp)
     $('.table-them-containers .thong-tin-load').attr('src',thongTinGocImg)  
     $('.table-them-containers #thongtin-soLuong').val(thongTinGocsoLuong) 
    $('.table-them-containers #thongtin-giaGoc').val(thongTinGocGiaGoc)
   $('.table-them-containers #thongtin-giaBan').val(thongTinGocGiaBan)
     $('.table-them-containers #thongtin-giaKM').val(thongTinGocGiaKM)

     
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
    $('.table-them-containers #sua-masp').val('')
   $('.table-them-containers #sua-lsp').val('')
    $('.table-them-containers #sua-tensp').val('')
     $('.table-them-containers .suaload').attr('src','') 
     $('.table-them-containers #sua-soLuong').val('')  
    $('.table-them-containers #sua-giaGoc').val('')
   $('.table-them-containers #sua-giaBan').val('')
     $('.table-them-containers #sua-giaKM').val('')

// Nút hủy của table thêm

    $('.table-them-containers #masp').val('')
   $('.table-them-containers #lsp').val('')
    $('.table-them-containers #tensp').val('')
     $('.table-them-containers .imgload').attr('src','')
     $('.table-them-containers #soLuong').val('')   
    $('.table-them-containers #giaGoc').val('')
   $('.table-them-containers #giaBan').val('')
     $('.table-them-containers #giaKM').val('')
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
        UpdateSTT()
        UpdateTongSLSP()
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
  var  masSp = $('.table-them-containers #sua-masp').val()
  var  maLsp = $('.table-them-containers #sua-lsp').val()
  var  tenSp = $('.table-them-containers #sua-tensp').val()
  var  imgSp = $('.table-them-containers .suaload').attr('src')   
  var  soLuong = $('.table-them-containers #sua-soLuong').val()
  var  giaGoc = $('.table-them-containers #sua-giaGoc').val()
  var  giaBan =$('.table-them-containers #sua-giaBan').val()
  var  giaKM = $('.table-them-containers #sua-giaKM').val()
  var patternTen = /^[a-zA-Z À-Ỹ]*$/;
  var patternMa =/^[a-zA-Z À-Ỹ0-9]*$/;
  if(patternTen.test(tenSp) == false||tenSp.trim()=="") {
      confirm("vui lòng nhập đúng định dạng của tên sản phẩm")
  }
  else if(patternMa.test(masSp)==false||masSp.trim()==""){
      confirm("vui lòng nhập đúng định dạng của mã sản phẩm")
  }
  else if(imgSp.trim()==""){
      confirm("Vui lòng chọn ảnh")
  }
  else if(giaGoc.trim()==""||giaBan.trim()==""||giaKM.trim()==""){
      confirm("Vui lòng nhập tiền")
  }
  else{

    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html(masSp)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html(maLsp)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html(tenSp)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").attr("src",imgSp)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html(soLuong)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html(giaGoc)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(8)").html(giaBan)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(9)").html(giaKM)
    console.clear();
    UpdateSTT()
    UpdateTongSLSP()
    UpdateDoanhThu()
  }
}
// Sự kiện thêm thông tin sản phẩm vào trong danh sách
function themsanpham(){
    
    var masSp,maLsp,tenSp,STT,imgSp,soLuong,giaGoc,giaBan,giaKM;
    
    
    masSp = $('.table-them-containers #masp').val()
    
    maLsp = $('.table-them-containers #lsp').val()
    
    STT = $("tbody tr").length+1
    soLuong = $('.table-them-containers #soLuong').val()
    tenSp = $('.table-them-containers #tensp').val()
    imgSp = $('.table-them-containers #load').attr('src')   
    giaGoc = $('.table-them-containers #giaGoc').val()
    giaBan =$('.table-them-containers #giaBan').val()
    giaKM = $('.table-them-containers #giaKM').val()

    var patternTen = /^[a-zA-Z À-Ỹ]*$/;
    var patternMa =/^[a-zA-Z À-Ỹ0-9]*$/;
    if(patternTen.test(tenSp) == false||tenSp.trim()=="") {
        confirm("vui lòng nhập đúng định dạng của tên sản phẩm")
    }
    else if(patternMa.test(masSp)==false||masSp.trim()==""){
        confirm("vui lòng nhập đúng định dạng của mã sản phẩm")
    }
    else if(imgSp.trim()==""){
        confirm("Vui lòng chọn ảnh")
    }
    else if(giaGoc.trim()==""||giaBan.trim()==""||giaKM.trim()==""){
        confirm("Vui lòng nhập tiền")
    }
    else{
        var thongtin1sanpham = '<tr>\
    <td>'+STT+'</td>\
    <td>'+masSp+'</td>\
    <td>'+maLsp+'</td>\
    <td>'+tenSp+'</td>\
    <td><img src="'+imgSp+'" alt=""></td>\
    <td>'+soLuong+'</td>\
    <td>'+giaGoc+'</td>\
    <td>'+giaBan+'</td>\
    <td>'+giaKM+'</td>\
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
            $('.thanbangsanpham').html(valueHtml+thongtin1sanpham)
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
        var td = tr[i].getElementsByTagName("td")[5]
        if(td){
            var txtvalue = td.textContent || td.innerText;
            TongTien += Number(txtvalue)
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
        var td = tr[i].getElementsByTagName("td")[7]
        var tdSL = tr[i].getElementsByTagName("td")[5]
        if(td){
            var txtvalue = td.textContent || td.innerText;
            var txtvalueSL = tdSL.textContent || tdSL.innerText;
            TongTien += Number(txtvalue)*Number(txtvalueSL)
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
        td = tr[i].getElementsByTagName("td")[3];
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
    var valueMaSp = document.getElementById("masp").value;
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