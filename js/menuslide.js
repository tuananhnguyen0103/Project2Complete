

var indexcontainer=["index1","index2","index3","index4"];
function addContainer(){
        $(".slide-has-content-container--product:nth-child(1)").addClass(indexcontainer[0]);
        $(".slide-has-content-container--product:nth-child(2)").addClass(indexcontainer[1]);
        $(".slide-has-content-container--product:nth-child(3)").addClass(indexcontainer[2]);
        $(".slide-has-content-container--product:nth-child(4)").addClass(indexcontainer[3]);
}
function removeContainer(){
    $(".slide-has-content-container--product:nth-child(1)").removeClass(indexcontainer[0]);
    $(".slide-has-content-container--product:nth-child(1)").removeClass(indexcontainer[1]);
    $(".slide-has-content-container--product:nth-child(1)").removeClass(indexcontainer[2]);
    //3
    $(".slide-has-content-container--product:nth-child(2)").removeClass(indexcontainer[1]);
    $(".slide-has-content-container--product:nth-child(2)").removeClass(indexcontainer[2]);
    $(".slide-has-content-container--product:nth-child(2)").removeClass(indexcontainer[3]);
    //0
    $(".slide-has-content-container--product:nth-child(3)").removeClass(indexcontainer[2]);
    $(".slide-has-content-container--product:nth-child(3)").removeClass(indexcontainer[3]);
    $(".slide-has-content-container--product:nth-child(3)").removeClass(indexcontainer[0]);
    //1
    $(".slide-has-content-container--product:nth-child(4)").removeClass(indexcontainer[3]);
    $(".slide-has-content-container--product:nth-child(4)").removeClass(indexcontainer[0]);
    $(".slide-has-content-container--product:nth-child(4)").removeClass(indexcontainer[1]);
    //2

     //   $(".slide-has-content-container--product:nth-child(4)").removeClass(indexcontainer[3]);
}
function changeindex(){
        var changeindex = indexcontainer[0];
        indexcontainer[0] = indexcontainer[3];
        indexcontainer[3] = indexcontainer[2];
        indexcontainer[2] = indexcontainer[1];
        indexcontainer[1] = changeindex;
}
function slider()
{
    setInterval(addContainer(),1500)
    setInterval(changeindex,1500)
    setInterval(removeContainer(),1000)
    setInterval(addContainer(),1500)
    setInterval(slider,4000)

}
$(document).ready(function(){
    
    slider()
})
// window.onload=slider();