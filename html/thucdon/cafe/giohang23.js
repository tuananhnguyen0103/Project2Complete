var check ;
function themgio(elm,id)
{
    var images=elm.parent().parent().parent().parent().find('.details-container-border-img img').attr('src')
    var sum = 1

    var cashOld=$.trim(elm.parent().parent().parent().find('span.desc-cash-details').html())
    var cashChange = $.trim(cashOld.substr(0,cashOld.length-3))
    var size ;
    
    var res = cashChange.split(".");
    var cashResult=res[0].concat(res[1])
    
    var name=$.trim(elm.parent().parent().parent().parent().parent().find('.wrapper-row-container-details-tittle span h2').html())
    var thongtinsanpham='<div class="header-container-item" id="id'+id+'">\
    <div class="header-container-item-img">\
        <img src="'+images+'" alt="">\
        <div class="soluong">\
                                <span>\
                                    '+sum+'\
                                </span>\
                            </div>\
    </div>\
    <div class="header-container-item-desc">\
        <div class="header-container-item-name">\
            <span>\
                '+name+'\
            </span>\
        </div>\
        <div class="header-container-item-monney">\
            <span>\
                Giá :\
                    <span>\
                    '+cashResult+' \
                    </span>\
                VNĐ\
            </span>\
            <span class="header-container-item-delete" onclick="xoaGioHang($(this))">\
                 <img src="../../../../object/icon/32x32/1484686539_TrashBin.png" alt="">\
             </span>\
        </div>\
    </div>\
</div>'

        var arrayItem = ['cafe','freeze','tra','banhmi','khac']
        for(var i=0;i<arrayItem.length;i++){

            for(var j=1;j<20;j++){
                var giaGet=  localStorage.getItem('cash'+arrayItem[i]+'sp'+j)
                var imgGet = localStorage.getItem('img'+arrayItem[i]+'sp'+j)
                var nameGet = localStorage.getItem('name'+arrayItem[i]+'sp'+j)
                var idCheckGet = localStorage.getItem('id'+arrayItem[i]+'sp'+j)
                var soLuongGet = localStorage.getItem('soLong'+arrayItem[i]+'sp'+j)
                // console.log(id)
                // console.log(idCheck)
                // console.log(gia)
                // console.log(img)
                // console.log(name)
                if(id==idCheckGet){
                    var soLuongNew = Number(soLuongGet)+1
                    $('.header-container-item-img .soluong span').html(soLuongNew)
                    localStorage.setItem('soLong'+arrayItem[i]+'sp'+j,soLuongNew)
                    check = false;
                    UpdateThemSoTien(id) 
                    getgio()
                    break;
                }
                else{
                    check = true;
                }
            }
            if(check){
                    var valueHtml =  $('.header-container-list-item').html()
                    $('.header-container-list-item').html(valueHtml+thongtinsanpham)
                    localStorage.setItem("img"+id,images)
                    localStorage.setItem("cash"+id,cashResult)
                    localStorage.setItem("name"+id,name)
                    localStorage.setItem("id"+id,id)
                    localStorage.setItem("soLong"+id,1)
                    UpdateThemSoTien(id)
                    getgio()
                    break;
            }
            else{
                break
            }
        }
  
    }


// XÓa giỏ hàng
function xoaGioHang(elm){

  var id= elm.parent().parent().parent().attr('id')
  var idnew= id.substr(2,id.length)
  
 localStorage.removeItem("cash"+idnew)
 localStorage.removeItem("img"+idnew)
 localStorage.removeItem("name"+idnew)
 localStorage.removeItem('id'+idnew)
 localStorage.removeItem('soLong'+idnew) 
 capnhattienxoa()
//     var check123 = true;

    

      elm.parent().parent().parent().remove()
     
}

function capnhattienxoa()
{
   
    var arrayItem = ['cafe','freeze','tra','banhmi','khac']
    var tien=0
    for(var i=0;i<arrayItem.length;i++){
     for(var j=1;j<20;j++){
        var price= localStorage.getItem("cash"+arrayItem[i]+"sp"+j) 
        var soluong = localStorage.getItem("soLong"+arrayItem[i]+"sp"+j) 
        if(price!=null)
        tien+=Number(price)*Number(soluong)
     }
 }
 $(".shopping-wapper-header-cash span").html(tien)
 sumtotal=0
}


function UpdateThemSoTien(id){
    var idsp=id.substr(0,id.length-1)
     var gia=$(".gia-tuong-tac span").html()
    for(var i=0;i<70;i++)
    {     
        var price= localStorage.getItem("cash"+idsp+i)  
        if(price!=null)
        break
    }
    var soluong = localStorage.getItem("soLong"+idsp+i)
       
    var k= (Number(gia)*Number(soluong)).toString()

    $(".shopping-wapper-header-cash span").html(k)
  } 



    var sumtotal = 0




  function getgio()
  {
      $('.header-container-list-item').html('`')
       var arrayItem = ['cafe','freeze','tra','banhmi','khac']
 
    for(var i=0;i<arrayItem.length;i++){
        for(var j=1;j<20;j++){
            var gia=  localStorage.getItem("cash"+arrayItem[i]+"sp"+j)
            var img = localStorage.getItem("img"+arrayItem[i]+"sp"+j)
            if(img){
                img = img.substring(3,img.length)
            }
            var name = localStorage.getItem("name"+arrayItem[i]+"sp"+j)
            var sum = localStorage.getItem('soLong'+arrayItem[i]+'sp'+j)
            var id = localStorage.getItem('id'+arrayItem[i]+'sp'+j)
            var thongtinsanpham='<div class="header-container-item" id="id'+id+'" >\
            <div class="header-container-item-img">\
                <img src="'+img+'" alt="">\
                <div class="soluong">\
                                <span>\
                                    '+sum+'\
                                </span>\
                            </div>\
                </div>\
                <div class="header-container-item-desc">\
                    <div class="header-container-item-name">\
                        <span>\
                            '+name+'\
                        </span>\
                    </div>\
                    <div class="header-container-item-monney">\
                        <span>\
                            Giá :\
                                <span>\
                                '+gia+' \
                                </span>\
                            VNĐ\
                        </span>\
                        <span class="header-container-item-delete" onclick="xoaGioHang($(this))">\
                            <img src="../../../../object/icon/32x32/1484686539_TrashBin.png" alt="">\
                        </span>\
                    </div>\
                </div>\
            </div>'
            if(gia!==null){
                var valueHtml =  $('.header-container-list-item').html()
                
                $('.header-container-list-item').html(valueHtml+thongtinsanpham)

                sumtotal += Number(sum)*Number(gia)
                  
                    
                }
        }
    }
    $(".shopping-wapper-header-cash span").html(sumtotal)
    sumtotal=0
  }
$(document).ready(function(){
   getgio()
})
