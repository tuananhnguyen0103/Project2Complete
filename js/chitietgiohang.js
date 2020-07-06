function tangsanpham(elm){
    
}
function xoaGioHang(elm){

    var id= elm.parent().parent().attr('id')
    localStorage.removeItem("cash"+id)
    localStorage.removeItem("img"+id)
    localStorage.removeItem("name"+id)
    localStorage.removeItem('id'+id)
    localStorage.removeItem('soLong'+id) 
    capnhattienxoa()
    elm.parent().parent().remove()
    
}
function giansanpham(elm){
    var id= elm.parent().parent().attr('id')
    var sum = localStorage.getItem('soLong'+id)
    var sumchang = Number(sum)-1
    if(sumchang===0){
        xoaGioHang(elm)
    }
    else{
        localStorage.setItem('soLong'+id,sumchang) 
        capnhattienxoa()
        getgio()
    }
    
}
function tangsanpham(elm){
    var id= elm.parent().parent().attr('id')
    var sum = localStorage.getItem('soLong'+id)
    var sumchang = Number(sum)+1
    localStorage.setItem('soLong'+id,sumchang) 
    capnhattienxoa()
    getgio()
}
function capnhattienxoa(){
    var arrayItem = ['cafe','freeze','tra','banhmi','khac']
    var tien=0
    for(var i=0;i<arrayItem.length;i++){
     for(var j=1;j<20;j++){
        var price= localStorage.getItem("cash"+arrayItem[i]+"sp"+j) 
        var soluong = localStorage.getItem("soLong"+arrayItem[i]+"sp"+j) 
        if(price!=null)
        {
            tien+=Number(price)*Number(soluong)
            
        }
        sum1+=Number(soluong)
     }
 }
 $(".content-information-bill-total-cash .bill-total-cash-money").html(tien)
 $(".content-information-bill-total-cash .bill-total-cash-sum").html(sum1)
        sum1 = 0
 sumtotal=0
}
var sumtotal = 0;
var sum1=0;

  function getgio()
  {
      $('.information-bill-container-list').html('')
        var arrayItem = ['cafe','freeze','tra','banhmi','khac']
 
        for(var i=0;i<arrayItem.length;i++){
        for(var j=1;j<20;j++){
            var gia=  localStorage.getItem("cash"+arrayItem[i]+"sp"+j)
            var img = localStorage.getItem("img"+arrayItem[i]+"sp"+j)
            if(img!=null){
                var imguse = img.substr(3,img.length)
            }
            var name = localStorage.getItem("name"+arrayItem[i]+"sp"+j)
            var sum = localStorage.getItem('soLong'+arrayItem[i]+'sp'+j)
            var id = localStorage.getItem('id'+arrayItem[i]+'sp'+j)
            var thongtinsanpham='<div class="information-bill-container-list-item" id="'+id+'">\
            <div class="container-list-item-has-img">\
                <img src="'+imguse+'" alt="">\
            </div>\
            <div class="container-list-item-has-name">\
                <span class="idspanpham">'+id+'\
                </span>\
                <span>\
                    '+name+'\
                </span>\
            </div>\
            <div class="container-list-item-has-soLuong">\
                <div class="has-soLuong-giam" onclick="giansanpham($(this))">\
                    -\
                </div>\
                <span>\
                    '+sum+'\
                </span>\
                <div class="has-soLuong-tang" onclick="tangsanpham($(this))">\
                    +\
                </div>\
            </div>\
            <div class="container-list-item-has-cash">\
                <span>\
                    '+gia*sum+'\
                </span>\
                <div class="has-cash-delete" onclick="xoaGioHang($(this))">\
                        <img src="../../../object/icon/32x32/1484686539_TrashBin.png" alt="">\
                </div>\
            </div>\
        </div>'
            if(gia!=null){
                var valueHtml =  $('.information-bill-container-list').html()
                $('.information-bill-container-list').html(valueHtml+thongtinsanpham)
                sumtotal += Number(sum)*Number(gia)
                sum1+= Number(sum)
                }

        }
        
    }
    $(".content-information-bill-total-cash .bill-total-cash-money").html(sumtotal)
    $(".content-information-bill-total-cash .bill-total-cash-sum").html(sum1)
        sum1 = 0
        sumtotal=0
  }
  $(document).ready(function(){
    getgio()
 })


 ///
 function HuyThongTin(elm){
    var parentHasTable =elm.parent().parent().parent().find(".information-customer-table input")
    for(var i = 0;i<parentHasTable.length-1;i++){
        parentHasTable.val(null)
    }
 }
 function MuaGioHang(elm){
    var patternEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    var patternTen = /^[a-zA-Z À-Ỹ]*$/;
    var patternAddress =/^[a-zA-Z À-Ỹ-0-1]*$/;
    var Name =elm.parent().parent().parent().find(".information-customer-table tr:nth-child(1) input").val()
    var Email =elm.parent().parent().parent().find(".information-customer-table tr:nth-child(2) input").val()
    var Address= elm.parent().parent().parent().find(".information-customer-table tr:nth-child(3) input").val()
    var Number =elm.parent().parent().parent().find(".information-customer-table tr:nth-child(4) input").val()
    if($.trim(Name)===""){
        alert("Vui lòng nhập tên của bạn")
    }
    else if($.trim(Email)===""){
        alert("Vui lòng nhập email của bạn")
    }  
    else if($.trim(Address)===""){
        alert("Vui lòng nhập địa chỉ của bạn")
    }
    else if($.trim(Number)===""){
        alert("Vui lòng nhập số điện thoại của bạn")
    }            
    else{
        if(!patternTen.test(Name)){
            alert("Nhập tên không có số và kí tự đặc biệ")
        }
        else if(!patternEmail.test(Email)){
            alert("Nhập email theo định dạng yourEmail@gmail.com")
        }
        else if(!patternAddress.test(Address)){
            alert("Email chỉ có kí tự đặc biệt là "-"")
        }
        else if(Number[0]!=0 || Number.length!=10)   {
            alert("Số điện thoại phải bắt đầu bằng số 0 và 10 kí tự")
        }  
        else{
            if(confirm("Xác nhận mua hàng?")){
                alert("Cảm ơn bạn")
            }
        }        
    }
    
 }
 