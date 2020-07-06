// Hiện thị thông tin của sản phẩm
var indexchange;



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
    
 
    var maNL=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var TenNL=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var DiaDiem=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var SDT= $.trim($(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html())
    var Email= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html()
    var MoTa= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    
    $('.table-them-containers #sua-ma-nguyen-lieu').val(maNL)
    $('.table-them-containers #sua-ten-nguyen-lieu').val(TenNL)
    $('.table-them-containers #sua-dia-diem').val(DiaDiem)
    $('.table-them-containers #sua-so-dien-thoai').val(SDT)  
    $('.table-them-containers #sua-email').val(Email) 
    $('.table-them-containers #sua-mo-ta').val(MoTa)
    $(".table-them.sua").css('display','flex')
    
}

function goiHienThi(row)
{
    var d = row.parentNode.parentNode.parentNode.rowIndex;
    indexchange=d;
    
    var maNL=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html()
    var TenNL=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html()
    var DiaDiem=$(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html()
    var SDT= $.trim($(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html())
    var Email= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html()
    var MoTa= $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html()
    
    $('.table-them-containers #thong-tin-ma-nguyen-lieu').val(maNL)
    $('.table-them-containers #thong-tin-ten-nguyen-lieu').val(TenNL)
    $('.table-them-containers #thong-tin-dia-diem').val(DiaDiem)
    $('.table-them-containers #thong-tin-so-dien-thoai').val(SDT)  
    $('.table-them-containers #thong-tin-email').val(Email) 
    $('.table-them-containers #thong-tin-mo-ta').val(MoTa)
   
    

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
   
    $('.table-them-containers #sua-ma-nguyen-lieu').val('')
    $('.table-them-containers #sua-ten-nguyen-lieu').val('')
    $('.table-them-containers #sua-dia-diem').val('')
    $('.table-them-containers #sua-so-dien-thoai').val('') 
    $('.table-them-containers #sua-email').val('')
    $('.table-them-containers #sua-mo-ta').val('')
  

// Nút hủy của table thêm


    $('.table-them-containers #ma-nguyen-lieu').val('')
    $('.table-them-containers #ten-nguyen-lieu').val('')
    $('.table-them-containers #dia-diem').val('')
    $('.table-them-containers #so-dien-thoai').val('') 
    $('.table-them-containers #email').val('')
    $('.table-them-containers #mo-ta').val('')


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

var maNL = $('.table-them-containers #sua-ma-nguyen-lieu').val()
var TenNL =  $('.table-them-containers #sua-ten-nguyen-lieu').val()
var DiaDiem =    $('.table-them-containers #sua-dia-diem').val()
var SDT =     $('.table-them-containers #sua-so-dien-thoai').val()  
var Email =     $('.table-them-containers #sua-email').val() 
var MoTa =    $('.table-them-containers #sua-mo-ta').val()
var patternMa =/^[a-zA-Z0-9]*$/;
    var patternEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    var patternTen = /^[a-zA-Z À-Ỹ]*$/;
    var patternAddress =/^[a-zA-Z À-Ỹ-0-9]*$/;
    if(patternMa.test(maNL) == false||maNL.trim()=="") {
        confirm("Mã gồm các kí tự a-z,A-Z và chữ số")
    }
    else if(patternTen.test(TenNL)==false||TenNL.trim()==""){
        confirm("Tên không có kí tự đặc biệt và số")
    }
    else if(patternAddress.test(DiaDiem) == false||DiaDiem.trim()==""){
        confirm("Địa điểm không có kí tự đặc biệt")
    }
    else if(SDT[0]!=0 || SDT.length!=10 ||SDT.trim()==""){
        confirm("vui lòng nhập đúng định dạng của số điện thoại")
    }
    else if(patternEmail.test(Email) == false||Email.trim()==""){
        confirm("vui lòng nhập đúng định dạng của email")
    }
    else if(patternAddress.test(MoTa) == false||MoTa.trim()==""){
        confirm("vui lòng nhập đúng định dạng của mô tả")
    }
    else{
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(2)").html(maNL)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(3)").html(TenNL)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(4)").html(DiaDiem)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(5)").html(SDT)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(6)").html(Email)
    $(".thanbangsanpham tr:nth-child("+indexchange+") td:nth-child(7)").html(MoTa)
    
    UpdateSTT()
    UpdateDiaDiem()
    }
}
// Sự kiện thêm thông tin sản phẩm vào trong danh sách
function themsanpham(){
    
    
    var bool = true;
    
    var maNL = $('.table-them-containers #ma-nguyen-lieu').val()
  var TenNL =  $('.table-them-containers #ten-nguyen-lieu').val()
  var DiaDiem =    $('.table-them-containers #dia-diem').val()
  var SDT =     $('.table-them-containers #so-dien-thoai').val()  
  var Email =     $('.table-them-containers #email').val() 
  var MoTa =    $('.table-them-containers #mo-ta').val()
   
    var patternMa =/^[a-zA-Z0-9]*$/;
    var patternEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    var patternTen = /^[a-zA-Z À-Ỹ]*$/;
    var patternAddress =/^[a-zA-Z À-Ỹ-0-9]*$/;
    if(patternMa.test(maNL) == false||maNL.trim()=="") {
        confirm("Mã gồm các kí tự a-z,A-Z và chữ số")
    }
    else if(patternTen.test(TenNL)==false||TenNL.trim()==""){
        confirm("Tên không có kí tự đặc biệt và số")
    }
    else if(patternAddress.test(DiaDiem) == false||DiaDiem.trim()==""){
        confirm("Địa điểm không có kí tự đặc biệt")
    }
    else if(SDT[0]!=0 || SDT.length!=10 ||SDT.trim()==""){
        confirm("vui lòng nhập đúng định dạng của số điện thoại")
    }
    else if(patternEmail.test(Email) == false||Email.trim()==""){
        confirm("vui lòng nhập đúng định dạng của email")
    }
    else if(patternAddress.test(MoTa) == false||MoTa.trim()==""){
        confirm("vui lòng nhập đúng định dạng của mô tả")
    }
    else{
        var thongtinnguoidung = '<tr  class="">\
        <td>1</td>\
        <td>'+maNL+'</td>\
        <td>'+TenNL+'</td>\
        <td>'+DiaDiem+'</td>\
        <td>\
            '+SDT+'\
        </td>\
        <td>'+Email+'</td>\
        <td>'+MoTa+'</td>\
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
            UpdateDiaDiem()
            alert("Thêm thành công")
        }
            else{
                alert("Đã tồn tại sản phẩm vui lòng chọn sửa thông tin")
            }
        }
        

}


// Màu nền cho từng sản phẩm
$(document).ready(function(){
    UpdateDiaDiem()
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
function UpdateDiaDiem(){
    var array = []
    var TongTien = 0;
    // Lấy ra bảng chứa thông tin 
    var table = document.getElementById("bangsanphamid");
    // Lấy các hàng trong talbe bên trên
    var tr = table.getElementsByTagName("tr"); 
    for(var i = 0;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[3]
        if(td){
            var txtvalue = td.textContent.trim() || td.innerText.trim();
            array.push(txtvalue)
            var vitri = 0;
            var stt = 0;
            for(var j = 0 ;j<array.length;j++){
                if(txtvalue==array[j]){
                    vitri=j
                    stt+=1
                }
            }
            if(stt>1){
                array.splice(vitri,1)
            }
        }
    }
    TongTien = array.length
    $(".menu-main-desc-sum .menu-main-desc-content .menu-main-desc-sum-content").html(TongTien)
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
    var valueMaSp = document.getElementById("ma-nguyen-lieu").value;
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