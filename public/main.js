$(document).ready(function(){
    $("#subCate, #subCateOptions").fadeOut(0);
    
    checkCustomerType();
    $("#customerType").change(function(){checkCustomerType();});

    $("#btnAddNewItem").click(function(){
        $("#tbOrders").append(`
            <tr>
                <td width="50%">
                    <div class="tbOrders_itemName">
                        Capuchino
                    </div>
                    <div class="tbOrders_Options">
                        Full cream (1.5$), less sugar (0$)
                    </div>
                </td>
                <td width="15%">x1</td>
                <td width="15%">
                    <input type="text" class="tbOrders_dicountAmount" value="0" />
                    <img src="./btnSave.png" class="btnUpdateDiscount" />
                </td>
                <td width="30%">
                    <div id="tbOrders_total">100$</div>
                </td>
            </tr> 
        `);
    });

    $(".subCateItem").click(function(){
        $(".subCateItem").removeClass("subCateItemHover");
        $(this).addClass("subCateItemHover");
    });

    $(".subCateItemOption").click(function(){
        var currentClassname = $(this).attr("class");
        if(currentClassname.includes("subCateItemHover")){
            $(this).removeClass("subCateItemHover");
        }else{
            $(this).addClass("subCateItemHover");
        }
    });

});

$(".cateItem").click(function(){
    $("#subCate").fadeIn(200);
});

$(".subCateItem").click(function(){
    $("#subCateOptions").fadeIn(200);
});

function checkCustomerType(){
    var currentType = $("#customerType").val();
    if(currentType==0){
        $("#customersGroup").fadeOut(100);
        $("#txtOrderName").fadeOut(100);
        $("#paymentStatus").fadeOut(100);
    }

    if(currentType==1){
        $("#customersGroup").fadeIn(100);
        $("#txtOrderName").fadeIn(100);
        $("#paymentStatus").fadeIn(100);
    }
}