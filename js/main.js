

/** Creation of Normal and Power Ball Numbers **/
var createNormalNumbers = new createNumList("number-list","select-number-area",28,1);
var createPowerBallNumber =new createNumList("selected-number-list","selected-number-box",10,0);

createNormalNumbers.createNumbers();
createPowerBallNumber.createNumbers();

function createNumList(listName,containerName,max, min){
    this.listName = listName;
    this.containerName = containerName;
    this.max = max;
    this.min= min;

    this.listName = document.createElement("ul");
    this.containerName = document.getElementById(containerName);
    var listValue;
    this.listName.className=listName;


    this.createNumbers = function () {
        for(var i=min;i<=max;i++){

            var listItem = document.createElement("li");
            if(this.listName.className =="selected-number-list" && i==10){
                listValue = document.createTextNode("ALL");
                listItem.appendChild(listValue);
                listItem.value="10";

            }else{

                    listValue = document.createTextNode(i);
                    listItem.appendChild(listValue);
                    listItem.value=i;


            }


            this.listName.appendChild(listItem);
        }
        this.containerName .appendChild(this.listName);

    }





}


function User(roundNo, normalNo, powerNo, quantity, ticketPrice, userId, depBalance){

   Tickets.call(this,roundNo, normalNo, powerNo, quantity, ticketPrice);
    this.userId= userId;
    this.depBalance = depBalance;


    this.getUserTickets = function () {
        this.tickets={
            userId:this.userId,
            round:roundNo,
            normal:normalNo,
            power:powerNo,
            quantity:quantity,
            price:ticketPrice
        };
        return this.tickets;
    };
    this.setUserId = function(newUserId) {
        this.depBalance = newUserId;
    }

    this.getDepBalance = function () {
        return this.depBalance;
    };

    this.setDepBalance = function(newDepBalance) {
        this.depBalance = newDepBalance;
    };

}

User.prototype = {
    constructor: User


}



function Tickets(roundNo, fullNormalNo, powerNo, quantity, ticketPrice) {

        this.roundNo = roundNo;
        this.normalNo=fullNormalNo;
        this.powerNo=powerNo;
        this.quantity=quantity;
        this.ticketPrice=ticketPrice;
        this.purchaseTickets=[];


    }

Tickets.prototype = {
    constructor: Tickets,

    ShowPurchaseTickets: function () {

        var fullTicket="";
        for(var i=0;i<this.normalNo.length;i++){

            for(var e=0; e<this.powerNo.length;e++){
               fullTicket +=this.normalNo[i]+" "+this.powerNo[e]+ "\n";

            }
            return this.userId+"\n"+"Purchase Tickets:\n " +fullTicket;
        }

    },
    SavePurchaseTickets: function (){
        var ticket = this.normalNo;
        var power = this.powerNo;
            for(var i=0; i<ticket.length;i++){
                this.purchaseTickets.push(ticket[i] +" " + power[i]);

            }


    },


    SplitNormalArray: function (){

  for(var i=0; i<this.normalNo.length;i++){
       this.normalArray.push(this.normalNo[i].split(','));


   }


}

}


User.prototype = new Tickets;



//var user2= new User(1,["1","2","3","4","5"],"6",1,1000,"Aivee","100000");
//user2 = new User(1,["11","21","23","4","5"],"2",1,1000,"Aivee","100000");
//var allTickets = user2;
//allTickets.forEach(function (eachTickets)  {
   // console.log(eachTickets.showPurchaseTickets());
//});


function SelectNormalPowerNumbers() {
    this.normalNumbersArray = [];
    this.powerNumberArray = [];
    this.normalNo=[];
    this.quantity=[];
    this.totalPrice=0;
    this.myNumberListArray=[];
    this.myNumberListPowerArray=[];
    this.myNumberList=[];



}

SelectNormalPowerNumbers.prototype = {
    SaveNormalNo: function(newNormalNo) {
		this.normalNumbersArray.push(newNormalNo);
        this.normalNumbersArray.sort(function(a, b){return a-b});

    },
    SavePowerNo: function(newPowerNo) {
		
        this.powerNumberArray.push(newPowerNo);
		 this.myNumberListPowerArray.push(newPowerNo);
        this.powerNumberArray.sort(function(a, b){return a-b});

    },
    RemoveNormalNo: function(theNormalNumberToRemove) {
        while (this.normalNumbersArray.indexOf(theNormalNumberToRemove) !== -1) {
            this.normalNumbersArray.splice(this.normalNumbersArray.indexOf(theNormalNumberToRemove), 1);
        }
    },
    RemovePowerNo: function(thePowerNumberToRemove) {
        while (this.powerNumberArray.indexOf(thePowerNumberToRemove) !== -1) {
            this.powerNumberArray.splice(this.powerNumberArray.indexOf(thePowerNumberToRemove), 1);
            this.myNumberListPowerArray.splice(this.myNumberListPowerArray.indexOf(thePowerNumberToRemove), 1);
        }
    },
    ShowNormalNo:function ()  {
        var normalNo = this.normalNumbersArray.length > 0 ? this.normalNumbersArray.join(",") : "No Selected Numbers";
        return normalNo;
    },
    ShowPowerNo:function ()  {
        var powerNo = this.powerNumberArray.length > 0 ? this.powerNumberArray.join(",") : "No Selected Numbers";
        return powerNo;
    },
    CheckTheLimit:function ()  {
       var limit = this.normalNumbersArray.length;
       var check = limit == 5 ? true : false;
       return check;
    },
    CheckLenPowerNumber:function ()  {
        var limit = this.powerNumberArray.length;
        var check = limit > 0 ? true : false;
        return check;
    },

    AddFullNormalNo:function ()  {
		
        var normalNo = [this.normalNumbersArray].join(",");
       this.normalNo.push(normalNo);
    },
    RemoveItemFullNormalNo:function (theFullNoToRemove, len)  {

            this.normalNo.splice(theFullNoToRemove, len);

    },
    RemoveFullNormalNo:function ()  {

        this.normalNo=[];

    },
	UpdateFullNormalNo:function (theNumberToUpdate)  {

	   var normalNo = [this.normalNumbersArray].join(",");
       this.normalNo.push(normalNo);

    },
    ShowFullNormalNo:function ()  {
        var fullNormalNo = this.normalNo.length > 0 ? this.normalNo.join("\n") : "No Selected Numbers";
        return fullNormalNo;
    },
    GetLenFullNormalNo:function ()  {
        var len = this.normalNo.length;
        return len;
    },
    AddTempMyNumberList:function ()  {

        var myNumber = [this.normalNumbersArray].join(",");
        this.myNumberListArray.push(myNumber);

    },
    AddMyNumberList:function ()  {

        var myNumber = [this.normalNumbersArray].join(",");
        this.myNumberList.push(myNumber);
		

    },
    RemoveItemMyNumList:function (theFullMyNoToRemove, len)  {

        this.myNumberListArray.splice(theFullMyNoToRemove, len);

    },
    RemoveFullMyNumList:function ()  {

        this.myNumberListArray=[];
      //this.myNumberListPowerArray=[];

    },
    SaveTicketQuantity:function(newQuantity){
        this.quantity.push(newQuantity);

    },
    SaveTicketQuantity:function(newQuantity){
        this.quantity.push(newQuantity);

    },
    SaveTotalTicketPrice:function(totalTicketPrice){
        this.totalPrice = totalTicketPrice;

    },
    ResetAll:function(){
        this.normalNumbersArray = [];
        this.powerNumberArray = [];
        this.normalNo=[];
        this.quantity=[];
        this.totalPrice=0;

    },
    ResetNormalPower:function(){
        this.normalNumbersArray = [];
        this.powerNumberArray = [];
        this.myNumberListPowerArray=[];
        this.myNumberListArray=[];


    }

};

/** PowerBall Results **/
function PowerBallResults(){
    this.normalNumbersResult=[];
    this.powerNumberResult=[];
}

PowerBallResults.prototype = {
    constructor: PowerBallResults,
    AddNormalNumResult: function (newNormalNo) {

        this.normalNumbersResult.push(newNormalNo);
    },
    AddPowerNumResult: function (newPowerNo) {
        this.powerNumberResult.push(newPowerNo);
    }

}


/** Selection of Normal Numbers **/
var checkSelect=false;

var select = new SelectNormalPowerNumbers();

$('.number-list li').each(function (index, value){
        var link = value;

        link.onclick = SelectNormalNum;




});

function SelectNormalNum(){
	checkSelect=true;
    var checkClass = $(this).attr("class");
    var checkLimit1 = select.CheckTheLimit();


    if(checkClass==="active"){
        var theNormalToRemove = $(this).attr("value");

        if(checkLimit1===true){
            $(this).removeClass("active");

        }else{
            $(this).removeClass("active");
        }
            select.RemoveNormalNo(theNormalToRemove);
			select.RemoveItemFullNormalNo(0,1);
			select.UpdateFullNormalNo(theNormalToRemove);

    }else{
        if(checkLimit1===true){
            alert("You already selected 5 numbers");

        }else{

                $(this).addClass("active");
                var selectedNumber = $(this).attr("value");
                select.SaveNormalNo(selectedNumber);


        }

    }



}





/** Selection of Power Ball Number **/

$('.selected-number-list li').each(function (index, value){
   var link= value;
    link.onclick = SelectPowerNum;

});

function SelectPowerNum(){
	checkSelect=true;
    var selectedNumber = $(this).attr("value");
    var checkClass = $(this).attr("class");
    var listItemsActive = document.querySelectorAll('.selected-number-list li.active');
    var listItems = document.querySelectorAll('.selected-number-list li');
    if(selectedNumber==="10"){
        if(checkClass==="active"){
            RemoveClassActive(listItemsActive);
        }else {
           RemoveClassActive(listItems);
                        for (var i = 0; i < listItems.length - 1; i++) {
                            $(listItems).addClass("active");
                            for (var i = 0; i < listItems.length - 1; i++) {
                                select.SavePowerNo("0"+listItems[i].textContent);

                            }


                        }
							


                    
                }

    }else{

        if(checkClass==="active"){
            checkIfAllIsActive();
            $(this).removeClass("active");
            select.RemovePowerNo("0"+selectedNumber.toString());

        }else{
            $(this).addClass("active");
            select.SavePowerNo("0"+selectedNumber.toString());

        }

    }



    function checkIfAllIsActive(){
        for (var i = listItemsActive.length-1; i >0; i--) {
            var checkClass = $(listItemsActive[i]).attr("class");
            var selectedNumber = $(listItemsActive[i]).attr("value");
            if(selectedNumber==="10" && checkClass==="active"){
                $(listItemsActive[i]).removeClass("active");
            }

        }

    }

}


function RemoveClassActive(len){
    $(len).removeClass("active");
    for (var i = 0; i < len.length-1; i++) {
        select.RemovePowerNo("0"+len[i].textContent);
        select.RemoveItemFullNormalNo("0"+len[i].textContent,len.length);
    }

}

/** Buying of Tickets **/

function BuyTickets(){
    var modal = document.getElementById("open-modal");
    var span = document.getElementsByClassName("close")[0];
    var checkPowerNoLen = select.CheckLenPowerNumber();
    var checkLimit1 = select.CheckTheLimit();

    var normalNum= select.normalNumbersArray;
    var powerNum= select.powerNumberArray;
    select.RemoveFullNormalNo();

    for(var i=0;i<powerNum.length;i++){
        select.AddFullNormalNo(normalNum);
    }

    if((checkPowerNoLen ===false) && (checkLimit1===false)){
        alert("Please Select 5 normal numbers and at least 1 power ball number");
        modal.style.display = "none";
    }else if((checkPowerNoLen ===true) && (checkLimit1===false)){
        alert("Please Select 5 normal numbers");
        modal.style.display = "none";
    }else if((checkPowerNoLen ===false) && (checkLimit1===true)){
        alert("Please Select at least 1 power ball number");
        modal.style.display = "none";
    }
    else{
        modal.style.display = "block";
        span.onclick = function() {
			CancelBuyTickets();
            modal.style.display = "none";
        }

        CreateTickets();
		CalculateTicketQuantity();


    }


}

function CreateTickets(){

    var fullNormalNo = select.normalNo;
	var len = select.GetLenFullNormalNo();
	
	if(len!=0){
    createTicketList(fullNormalNo);
	}
	
    function createTicketList(arr) {
        var length = arr.length;
        var list = document.createElement("div");
        var selectedNormalNumbers= select.normalNo;
        var selectedPowerNumbers= select.powerNumberArray;
		
			
       
        for (var i = 0; i < length; i++) {
           var paragraph= document.createElement("p");
            var spanning = document.createElement("span");
            var spanning1 = document.createElement("span");
            var spanning2 = document.createElement("span");
            var input = document.createElement("input");
            var quantityNav = document.createElement("span");
            var quantityNavUp = document.createElement("span");
            var quantityNavDown = document.createElement("span");
			
			

            input.type = "number";
            input.min ="1";
            input.max="10";
            input.step="1";
            input.value="1";
            input.id="id-"+i;
			paragraph.id="ticket"+i;
			paragraph.className="pull-right";
			paragraph.className="col-md-12";
            spanning.id="normal-no";
            spanning1.id="power-no";
			spanning1.className="paddingleft";
            spanning2.className="quantity";
            quantityNav.className="quantity-nav";
            quantityNavUp.className="quantity-button quantity-up";
            quantityNavDown.className="quantity-button quantity-down";

            spanning.appendChild(document.createTextNode(selectedNormalNumbers[i]));
            spanning1.appendChild(document.createTextNode(selectedPowerNumbers[i]));
            spanning2.appendChild(input);
            quantityNavUp.appendChild(document.createTextNode("+"));
            quantityNavDown.appendChild(document.createTextNode("-"));
            quantityNav.appendChild(quantityNavUp);
            quantityNav.appendChild(quantityNavDown);
            spanning2.append(quantityNav);
            paragraph.appendChild(spanning);
            paragraph.appendChild(spanning1);
			
            paragraph.appendChild(spanning2);
			
            list.appendChild(paragraph);
			
			

        }
       return list;

    }

    document.getElementById("selected-tickets").appendChild(createTicketList(fullNormalNo));
    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
               var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");

            CalculateTicketQuantity();

        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");

              CalculateTicketQuantity();
        });



    });
  
}



/** Calculate Ticket Quantities **/
function CalculateTicketQuantity(){
  
       var sum=0;
       var len1= select.GetLenFullNormalNo();

       for(var e=0; e<len1;e++){
          var x= document.getElementById("id-"+e).value;
          sum = sum+Number(x);

       }

        document.getElementById("quantity").innerHTML=sum;
        document.getElementById("ticket-price").innerHTML= CalculateTicketPrice(sum);

}

function CancelBuyTickets(){
        var len1= select.GetLenFullNormalNo();

        for(var e=0; e<len1;e++){
            RemoveElement("ticket"+e);

        }

       RemoveModal();

}
function RemoveModal(){

    var modal = document.getElementById("open-modal");
    modal.style.display = "none";
}

function RemoveElement(elementId) {

        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
}

function RemoveAll(){
    var normalItemsActive = document.querySelectorAll('.number-list li.active');
    var powerItemsActive = document.querySelectorAll('.selected-number-list li.active');
    $(normalItemsActive).removeClass("active");
    $(powerItemsActive).removeClass("active");

    var len1= select.GetLenFullNormalNo();

    for(var e=0; e<len1;e++){
        RemoveElement("ticket"+e);

    }
    select.ResetAll();

}


/** Calculate Ticket Price **/
function CalculateTicketPrice(quantity){
        this.quantity = quantity;
        var ticketPrice = 1000;

        var total =  ticketPrice * this.quantity;
        return total;
}

/** Confirm Tickets**/
function ConfirmBuyTickets(){
    var fullNormalNum= select.normalNo;
    var powerNum= select.powerNumberArray;
    var len1= select.GetLenFullNormalNo();

    for(var e=0; e<len1;e++){
        var x= document.getElementById("id-"+e).value;
        select.SaveTicketQuantity(x);

    }

    var ticketPrice =  document.getElementById("ticket-price").innerHTML;
    select.SaveTotalTicketPrice(Number(ticketPrice));

    var roundNo =  document.getElementById("roundNo").innerHTML;
    var quantity=select.quantity;
    var totalPrice = select.totalPrice;
    user=new User(roundNo, fullNormalNum, powerNum, quantity, totalPrice,"Aivee","10000");
    user.SavePurchaseTickets();
    var getTickets = user.getUserTickets();
    console.log(getTickets);



alert(getTickets.normal);
    for (var i in getTickets) {
        if (getTickets[i].userId == "Aivee") {
            console.log(getTickets[i]); // {a: 5, b: 6}
        }
    }


    RemoveAll();
    RemoveModal();
    ResetAllSelectedNum();
    CreateUserPurchaseHistory();
}


/** Display User Purchase History **/

function CreateUserPurchaseHistory(){


    var fullNormalNo = user.purchaseTickets;
    var len = fullNormalNo.length;

    if(len!=0){
        createTicketList(fullNormalNo);
    }

    function createTicketList(arr) {
        var length = arr.length;

        var selectedNormalNumbers= user.normalNo;
        var selectedPowerNumbers= user.powerNo;
        var quan=user.quantity;
        var list = document.createElement("label");
        for (var i = 0; i < length; i++) {
			
			var list1 = document.createElement("label");
            var spanning = document.createElement("span");
            var spanning1 = document.createElement("span");
            var spanning2 = document.createElement("span");
            var spanning3 = document.createElement("span");

            spanning1.id="selected-normal-no";
            spanning2.id="selected-power-no";
            spanning3.id="quantities";
			spanning.className="totheleft";
            spanning.className="system";
            spanning1.className="selected-normal-no";
            spanning2.className="selected-power-no";
            spanning3.className="quantities";
			spanning3.className="totheright";
            spanning.appendChild(document.createTextNode("Number Select "));
            spanning1.appendChild(document.createTextNode(selectedNormalNumbers[i]));
            spanning2.appendChild(document.createTextNode(selectedPowerNumbers[i]));
            spanning3.appendChild(document.createTextNode("X "+quan[i]));
			
			
            list1.appendChild(spanning);
            list1.appendChild(spanning1);
            list1.appendChild(spanning2);
            list1.appendChild(spanning3);
			list.appendChild(list1);
        }
        return list;
		
    }

    document.getElementById("userHistory").appendChild(createTicketList(fullNormalNo));


}



/** Auto-pick Normal Numbers **/

function QuickPick(){
 	var autoNormalNumbersArray = [];
    var autoPowerNumbersArray = [];
    var rndNmbNormal = 0;
    var rndNmbPower=0;
    var count = 0;
    var count1 = 1;

    while(count<5){

        rndNmbNormal = mt_rand(28,1);

        if(autoNormalNumbersArray.indexOf(rndNmbNormal)===-1){
            autoNormalNumbersArray.push(rndNmbNormal);


            count++;
        }
    }

    while(count1<2){

        rndNmbPower = mt_rand(9,0);

        if(autoPowerNumbersArray.indexOf(rndNmbPower)===-1){
            autoPowerNumbersArray.push(rndNmbPower);


            count1++;
        }
    }


    AutoGenNormalNumbers();
    AutoGenPowerNumbers();


    function AutoGenNormalNumbers(){
        ResetSelectedNormalNumbers();

        for(var e = 0; e<autoNormalNumbersArray.length; e++){

            $('.number-list li').each(function (){
                var autoNumbers = $(this).attr("value");
                if (autoNormalNumbersArray[e]==autoNumbers) {
                    $(this).addClass("active");
                    select.SaveNormalNo(autoNumbers);

                }

            });

        }

    }

    function AutoGenPowerNumbers(){
        ResetSelectedPowerNumbers();
        for(var e = 0; e<autoPowerNumbersArray.length; e++){

            $('.selected-number-list li').each(function (){
                var autoNumbers = $(this).attr("value");
                if (autoPowerNumbersArray[e]==autoNumbers) {
                    $(this).addClass("active");
                    select.SavePowerNo("0"+autoNumbers.toString());
                }

            });

        }
    }

checkSelect=true;
}



/** Reset All Selected Normal and Power Ball Numbers **/

function ResetSelectedNormalNumbers(){
    $('.number-list li').each(function (){
        var theNormalToRemove = $(this).attr("value");
        var checkClass = $(this).attr("class");

        if(checkClass==="active"){
            $(this).removeClass("active"); //remove class
            select.RemoveNormalNo(theNormalToRemove);
        }


    });

}
function ResetSelectedPowerNumbers(){
    $('.selected-number-list li').each(function (){
        var theNormalToRemove = $(this).attr("value");
        var checkClass = $(this).attr("class");

        if(checkClass==="active"){
            $(this).removeClass("active"); //remove class
            select.RemovePowerNo("0"+theNormalToRemove.toString());

        }


    });

}

function ResetAllSelectedNum(){

    var listItemsActive = document.querySelectorAll('.selected-number-list li.active');
    var listItems = document.querySelectorAll('.number-list li.active');

    RemoveClassActive(listItemsActive);
    RemoveClassActive(listItems);
    select.ResetNormalPower();
}



function mt_rand(max, min){
    return Math.floor(Math.random() * max) + min;
}

/** My Number List **/

var cnt=0;
function CreateMyNumberList(){


        var modal = document.getElementById("open-modal-my-number");
        modal.style.display = "block";
		var selectedPowerNumbers= select.myNumberListPowerArray;
        var checkNormal=select.CheckTheLimit();
		select.RemoveFullMyNumList();

		 for(var i=0;i<selectedPowerNumbers.length;i++) {
            if(checkNormal==true){
                select.AddMyNumberList();
                select.AddTempMyNumberList();
            }else{
                select.myNumberListPowerArray=[];
            }

         }

    var fullMyNum = select.myNumberListArray;
    for (var i = 0; i < fullMyNum.length; i++) {
        CreateNumberList(fullMyNum[i]);
        document.getElementById("my-number").appendChild(CreateNumberList(fullMyNum[i]));
        cnt++;
    }





function CreateNumberList(fullArr) {

        var paragraph = document.createElement("p");
        var spanning = document.createElement("span");
        var spanning1 = document.createElement("span");
        var spanning2 = document.createElement("span");

        var buttonChoose = document.createElement("button");
        buttonChoose.innerHTML = "Select";
        var buttonDelete = document.createElement("button");
        var buttonIconDelete = document.createElement("i");

        buttonChoose.id = "button-choose-"+cnt;
        buttonDelete.id = "button-delete-"+cnt;
        buttonDelete.className = "del-btn";
        buttonIconDelete.className = "fa fa-trash";
        buttonChoose.className = "cmn-btn btn-md border-btn";

        buttonChoose.addEventListener("click", SelectNumbers);
        buttonDelete.addEventListener("click",  DeleteSelectNumbers.bind(this,buttonDelete.id));


        paragraph.id = "list-"+cnt;
        spanning.id = "select-normal-no-"+cnt;
        spanning1.id = "select-power-no-"+cnt;
		spanning1.className="paddingleft";
        spanning2.className = "buttons";
	spanning2.className="pull-right";
        buttonDelete.appendChild(buttonIconDelete);
        spanning.appendChild(document.createTextNode(fullArr));
        spanning1.appendChild(document.createTextNode(selectedPowerNumbers[i]));
        spanning2.appendChild(buttonChoose);
        spanning2.appendChild(buttonDelete);

        paragraph.appendChild(spanning);
        paragraph.appendChild(spanning1);
        paragraph.appendChild(spanning2);

        return paragraph;


}




}

function SelectNumbers(event){

    var tempNormalArray =[];
    var tempPowerArray =[];
    var buttonId= event.srcElement.id;
    var getId= buttonId.split("-").pop();

        $('#my-number>#list-'+getId+'> #select-normal-no-'+getId).each(function (index,element){

            var elementNormal= element.innerHTML;
            tempNormalArray=elementNormal.split(',');
                    ResetSelectedNormalNumbers();


                    for(var e=0;e<tempNormalArray.length;e++){
                        $('.number-list li').each(function (){
                            var valNum = $(this).attr("value");
                            if (tempNormalArray[e]==valNum) {
                                $(this).addClass("active");
                                select.SaveNormalNo(tempNormalArray[e]);
                            }
                        });
                    }

        });

    $('#my-number>#list-'+getId+'> #select-power-no-'+getId).each(function (index,element1){

        var elementPower= element1.innerHTML;

        tempPowerArray=elementPower.split(',');
        ResetSelectedPowerNumbers();

        for(var e=0;e<tempPowerArray.length;e++){
            $('.selected-number-list li').each(function (){
                var valPower = $(this).attr("value");
                if (tempPowerArray[e].slice(-1)==valPower) {
                    $(this).addClass("active");
                    select.SavePowerNo(tempPowerArray[e]);
                }
            });
        }

    });

    ConfirmNumber();




}

/** Delete Selected Numbers in My Number List **/

var results = new PowerBallResults();

function DeleteSelectNumbers(id1){
    var buttonId= id1;
    var getId= buttonId.split("-").pop();
    RemoveElement('list-'+getId);
}

function DeleteAll(){
       $('#my-number >p').remove();
       cnt=0;
}


function ConfirmNumber(){
        var modal1 = document.getElementById("open-modal-my-number");
        modal1.style.display = "none";

}
var count=0;
function randomNumbers(){

        var random = mt_rand(28, 1);
        var getNormalResult = results.normalNumbersResult;

        if (getNormalResult.indexOf(random)===-1) {
           results.AddNormalNumResult(random);
            $('.lottery').append('<li class="lottery-ball">' + random + '</li>');
        } else {
            // alert(random + ' has already been picked, go again.');
            randomNumbers();
        }
        // console.log(rememberNumbersArray);
        count++;
        if ($('.lottery').children().length > 4) {
            $('.next-ball').hide();
            $('.result').show();
        }
}

function result(){
    checkWin(count);
    $('.play-again').show();
    $('.result').hide();
}

function checkWin(id){
    results.innerHTML = "Winning numbers: <BR>";
    var getNormalResult = results.normalNumbersResult;

             user.SplitNormalArray();
    var getTicketNormal = user.normalArray;
  /*  for(var e = 0; e<getNormalResult.length; e++){
            for(var i = 0; i<getTicketNormal.length; i++) {
                for (var x = 0; x <5; x++) {
                    if (getNormalResult[e] === getTicketNormal[x]) {
                        alert("a");
                        results.innerHTML += getNormalResult[e] + "<BR>";
                    }
                }
            }

    }*/
    var myNumber = [getNormalResult].join(",");

    if  (getNormalResult.includes(getTicketNormal)){
        console.log('They are equal!');
    }
    else{
        alert("no");
    }
}




function playAgain(){
    results.innerHTML="";
    rememberNumbersArray = [];
    selectedNumbersArray = [];
    autoNumbersArray=[];
    user.normalArray=[];
    $('.lottery').children().remove();
    arr = [];
    $('.next-ball').show();
    $('.play-again').hide();

    $('.number-list li').removeClass('active')
//$('.number-list li').unbind('click');
}



