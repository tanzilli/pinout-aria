var ariag25_n = [
	"3V3",
	"PC0",	
	"PC1",
	"PC2",
	"PC3",
	"PC4",
	"PC5",
	"PC6",
	"PC7",
	"PC8",
	"PC9",
	"PC10",
	"PC11",
	"PC12",
	"PC13",
	"PC14",
	"PC15",
	"PC16",
	"PC17",
	"PC18",
	"PC19",
	"PC20",
	"PC21",
	"GND"
];


var ariag25_e = [
	"GND",
	"PC22", 
	"PC23",
	"PC24",
	"PC25",
	"PC26",
	"PC27",
	"PC28",
	"PC29",
	"PC30",
	"PC31",
	"USBCP",
	"USBCN",
	"GND",  
	"USBBN", 
	"USBBP",
	"GND",  
	"USBAN", 
	"USBAP",
	"VBAT",
	"NRST",
	"SHDN",
	"WKUP",
	"3V3"
];


var ariag25_s = [
	"3V3",
	"PA21",
	"MMC_DA3",
	"MMC_DA2",
	"MMC_DA1",
	"MMC_CK",
	"MMC_CDA",
	"MMC_DA0",
	"PA14",
	"PA13",
	"PA12",
	"PA11",
	"DTXD",
	"DRXD",
	"PA8",
	"PA7",
	"PA6",
	"PA5",
	"PA4",
	"PA3",
	"PA2",
	"PA1",
	"PA0",
	"GND"
];

var ariag25_w = [
	"GND",
	"ETH_RXP",
	"ETH_RXN",
	"ETH_TXP",
	"ETH_TXN",
	"ETH_3V3",
	"ETH_LED1",
	"ETH_LED2",
	"PA22",
	"PA23",
	"PA24",
	"PA25",
	"PA26",
	"PA27",
	"PA28",
	"PA29",
	"PA30",
	"PA31",
	"ADVREF",
	"PB11",
	"PB12",
	"PB13",
	"PB14",
	"3V3"
];

function showHwSerial() {
	$("div.hwsections").slideUp();
	$("div#hwserial").slideDown();
}

function showHwI2c() {
	$("div.hwsections").slideUp();
	$("div#hwi2c").slideDown();
}

function showHwAdc() {
	$("div.hwsections").slideUp();
	$("div#hwadc").slideDown();
}

function showHwMac() {
	$("div.hwsections").slideUp();
	$("div#hwmac").slideDown();
}

function ShowPins(side,div,direction) {
	var contents="";
	if (side=="N") {
		atmel_array=ariag25_n;
	}
	if (side=="E") {
		atmel_array=ariag25_e;
	}
	if (side=="S") {
		atmel_array=ariag25_s;
	}
	if (side=="W") {
		atmel_array=ariag25_w;
	}
	
	if (direction=="asc") {
		for (i=0;i<atmel_array.length;i++) {
			if (div=="div_top_pins" || div=="div_right_pins") {
				contents+="<button class='pins'>";
				contents+=side + (i+1);
				contents+="</button>";
			}	
			contents+="<button class='atmelnames'>";
			contents+=atmel_array[i];
			contents+="</button>";
			if (div=="div_bottom_pins" || div=="div_left_pins") {
				contents+="<button class='pins'>";
				contents+=side + (i+1);
				contents+="</button>";
			}	
			contents+="<br/>";
		}
	} else {
		for (i=atmel_array.length-1;i>=0;i--) {
			if (side=="div_top_pins" || side=="div_right_pins") {
				contents+="<button class='pins'>";
				contents+=side + (i+1);
				contents+="</button>";
			}	
			contents+="<button class='atmelnames'>";
			contents+=atmel_array[i];
			contents+="</button>";
			if (div=="div_bottom_pins" || div=="div_left_pins") {
				contents+="<button class='pins'>";
				contents+=side + (i+1);
				contents+="</button>";
			}
			contents+="<br/>";
		}
	}	
	$("#" + div).html(contents);
	
	$(".atmelnames").each(function (){
		if ($(this).text()=="GND") {
			$(this).css("background-color","black");
		}
		if ($(this).text()=="3V3") {
			$(this).css("background-color","red");
		}
		if ($(this).text()=="ADVREF") {
			$(this).css("background-color","red");
		}
		if ($(this).text()=="VBAT") {
			$(this).css("background-color","red");
		}
		if ($(this).text().search("ETH")!=-1) {
			$(this).css("background-color","orange");
		}
		if ($(this).text().search("USB")!=-1) {
			$(this).css("background-color","#81BEF7");
		}
		if ($(this).text().search("MMC")!=-1) {
			$(this).css("background-color","#DA81F5");
		}
		if ($(this).text().search("RXD")!=-1 || $(this).text().search("TXD")!=-1) {
			$(this).css("background-color","#2E2EFE");
		}
	});
	
	
	
}	

function ShowAllPins(degree) {
	if (degree==0) {
		ShowPins("N","div_top_pins","asc");
		ShowPins("E","div_right_pins","asc");
		ShowPins("S","div_bottom_pins","desc");
		ShowPins("W","div_left_pins","desc");
	}	
	if (degree==90) {
		ShowPins("N","div_right_pins","asc");
		ShowPins("E","div_bottom_pins","desc");
		ShowPins("S","div_left_pins","desc");
		ShowPins("W","div_top_pins","asc");
	}	
	if (degree==180 || degree==-180 ) {
		ShowPins("N","div_bottom_pins","desc");
		ShowPins("E","div_left_pins","desc");
		ShowPins("S","div_top_pins","asc");
		ShowPins("W","div_right_pins","asc");
	}	
	if (degree==-90) {
		ShowPins("N","div_left_pins","desc");
		ShowPins("E","div_top_pins","asc");
		ShowPins("S","div_right_pins","asc");
		ShowPins("W","div_bottom_pins","desc");
	}	
	$("#div_top_pins").rotate(-90);
	$("#div_bottom_pins").rotate(-90);

	$(".atmelnames").click(function() {
		$("#debug").text($(this).text());
	});
	$(".pins").click(function() {
		$("#debug").text($(this).text());
	});
}

function readDTS() {
	$.ajax({
		url: $("#dt_filename").val() + ".dts",
	}).done(function(data) {
	
		tab = RegExp("\\t", "g");
		data=data.replace(tab,"  ");

		data=data.replace("[copyright]","Generated with dtEditor");
	
		//**********************
		// USART0 (/dev/ttyS1)
		//**********************

		if ($("#usart0enabled").is(':checked')) {
			data=data.replace("[usart0status]","okay");
			aria_south[23-1]="TXD0";
			aria_south[22-1]="RXD0";
		} else {
			data=data.replace("[usart0status]","disabled");
			aria_south[23-1]="PA0";
			aria_south[22-1]="PA1";
		}	

		if ($("#usart0pinctrl").is(':checked')) {
			data=data.replace("[usart0pinctrl]","pinctrl-0 = <&pinctrl_usart0 &pinctrl_usart0_rts &pinctrl_usart0_cts>;");
			aria_south[21-1]="RTS0";
			aria_south[20-1]="CTS0";
		} else {
			data=data.replace("[usart0pinctrl]","");
			aria_south[21-1]="PA2";
			aria_south[20-1]="PA3";
		}	

		if ($("#usart0rs485atboottime").is(':checked')) {
			data=data.replace("[usart0rs485atboottime]","linux,rs485-enabled-at-boot-time;");
		} else {
			data=data.replace("[usart0rs485atboottime]","");
		}	

		if ($("#usart0rs485rtsdelay").is(':checked')) {
			data=data.replace("[usart0rs485rtsdelay]","rs485-rts-delay = <" + $("#usart0rs485beforedelay").val() + " " + $("#usart0rs485afterdelay").val() + ">;");
		} else {
			data=data.replace("[usart0rs485rtsdelay]","");
		}	

		//**********************
		// USART1 (/dev/ttyS2)
		//**********************

		if ($("#usart1enabled").is(':checked')) {
			data=data.replace("[usart1status]","okay");
			aria_south[18-1]="TXD1";
			aria_south[17-1]="RXD1";
		} else {
			data=data.replace("[usart1status]","disabled");
			aria_south[18-1]="PA5";
			aria_south[17-1]="PA6";
		}	

		if ($("#usart1pinctrl").is(':checked')) {
			data=data.replace("[usart1pinctrl]","pinctrl-0 = <&pinctrl_usart1 &pinctrl_usart1_rts &pinctrl_usart1_cts>;");
			aria_east[7-1]="RTS1";
			aria_east[8-1]="CTS1";
		} else {
			data=data.replace("[usart1pinctrl]","");
			aria_east[7-1]="PC27";
			aria_east[8-1]="PC28";
		}	

		if ($("#usart1rs485atboottime").is(':checked')) {
			data=data.replace("[usart1rs485atboottime]","linux,rs485-enabled-at-boot-time;");
		} else {
			data=data.replace("[usart1rs485atboottime]","");
		}	

		if ($("#usart1rs485rtsdelay").is(':checked')) {
			data=data.replace("[usart1rs485rtsdelay]","rs485-rts-delay = <" + $("#usart1rs485beforedelay").val() + " " + $("#usart1rs485afterdelay").val() + ">;");
		} else {
			data=data.replace("[usart1rs485rtsdelay]","");
		}	

		//**********************
		// USART2 (/dev/ttyS3)
		//**********************

		if ($("#usart2enabled").is(':checked')) {
			data=data.replace("[usart2status]","okay");
			aria_south[16-1]="TXD2";
			aria_south[15-1]="RXD2";
		} else {
			data=data.replace("[usart2status]","disabled");
			aria_south[16-1]="PA7";
			aria_south[15-1]="PA8";
		}	
	
		//**********************
		// USART3  (/dev/ttyS4)
		//**********************

		if ($("#usart3enabled").is(':checked')) {
			data=data.replace("[usart3status]","okay");
			aria_east[2-1]="TXD3";
			aria_east[3-1]="RXD3";
		} else {
			data=data.replace("[usart3status]","disabled");
			aria_east[2-1]="PC22";
			aria_east[3-1]="PC23";
		}	
	
		if ($("#usart3pinctrl").is(':checked')) {
			data=data.replace("[usart3pinctrl]","pinctrl-0 = <&pinctrl_usart3 &pinctrl_usart3_rts &pinctrl_usart3_cts>;");
			aria_east[4-1]="RTS3";
			aria_east[5-1]="CTS3";
		} else {
			data=data.replace("[usart3pinctrl]","");
			aria_east[4-1]="PC24";
			aria_east[5-1]="PC25";
		}	

		if ($("#usart3rs485atboottime").is(':checked')) {
			data=data.replace("[usart3rs485atboottime]","linux,rs485-enabled-at-boot-time;");
		} else {
			data=data.replace("[usart3rs485atboottime]","");
		}	

		if ($("#usart3rs485rtsdelay").is(':checked')) {
			data=data.replace("[usart3rs485rtsdelay]","rs485-rts-delay = <" + $("#usart3rs485beforedelay").val() + " " + $("#usart3rs485afterdelay").val() + ">;");
		} else {
			data=data.replace("[usart3rs485rtsdelay]","");
		}	

		//**********************
		// UART0 (/dev/ttyS5)
		//**********************

		if ($("#uart0enabled").is(':checked')) {
			data=data.replace("[uart0status]","okay");
			aria_north[10-1]="UTXD0";
			aria_north[11-1]="URXD0";
		} else {
			data=data.replace("[uart0status]","disabled");
			aria_north[10-1]="PC8";
			aria_north[11-1]="PC9";
		}	
	
		//**********************
		// UART1 (/dev/ttyS6)
		//**********************

		if ($("#uart1enabled").is(':checked')) {
			data=data.replace("[uart1status]","okay");
			aria_north[18-1]="UTXD1";
			aria_north[19-1]="URXD1";
		} else {
			data=data.replace("[uart1status]","disabled");
			aria_north[18-1]="PC16";
			aria_north[19-1]="PC17";
		}	
	
		//**********************
		// I2C0 (/dev/i2c-0)
		//**********************

		if ($("#i2c0enabled").is(':checked')) {
			data=data.replace("[i2c0status]","okay");
			aria_west[17-1]="SDA0";
			aria_west[18-1]="SCL0";
		} else {
			data=data.replace("[i2c0status]","disabled");
			aria_west[17-1]="PA30";
			aria_west[18-1]="PA31";
		}	

		//**********************
		// I2C1 (/dev/i2c-1)
		//**********************

		if ($("#i2c1enabled").is(':checked')) {
			data=data.replace("[i2c1status]","okay");
			aria_north[2-1]="SDA1";
			aria_north[3-1]="SCL1";
		} else {
			data=data.replace("[i2c1status]","disabled");
			aria_north[2-1]="PC0";
			aria_north[3-1]="PC1";
		}	

		//**********************
		// ADC
		//**********************

		if ($("#adcenabled").is(':checked')) {
			data=data.replace("[adcstatus]","okay");
			aria_west[20-1]="AD0";
			aria_west[21-1]="AD1";
			aria_west[22-1]="AD2";
			aria_west[23-1]="AD3";
		} else {
			data=data.replace("[adcstatus]","disabled");
			aria_west[20-1]="PB11";
			aria_west[21-1]="PB12";
			aria_west[22-1]="PB13";
			aria_west[23-1]="PB14";
		}	
	
		//**********************
		// MACB0 (Ethernet)
		//**********************

		if ($("#macb0enabled").is(':checked')) {
			data=data.replace("[macb0status]","okay");
		} else {
			data=data.replace("[macb0status]","disabled");
		}	

		data=data.replace("[macb0macaddress]",$("#macb0macaddress").val());	
	
		$("#dts").val(data);
		showsAriaPins();
	});
} 

	
$(document).ready(function() {
	aria_angle=0;	
	ShowAllPins(aria_angle);
	
	readDTS();
	
	$("input").change(function() {
		$("#dtblink").html("");
		readDTS();
	});	

	$("#icon_top").click(function() {
		aria_angle=0;
		$("#ariag25_image").rotate({animateTo:aria_angle});
		ShowAllPins(aria_angle);
	});
	$("#icon_left").click(function() {
		aria_angle=-90;
		$("#ariag25_image").rotate({animateTo:aria_angle});
		ShowAllPins(aria_angle);
	});
	$("#icon_bottom").click(function() {
		aria_angle=180;
		$("#ariag25_image").rotate({animateTo:aria_angle});
		ShowAllPins(aria_angle);
	});
	$("#icon_right").click(function() {
		aria_angle=90;
		$("#ariag25_image").rotate({animateTo:aria_angle});
		ShowAllPins(aria_angle);
	});

	$(document).mousemove(function(event) {
		$("#coordinates").text(event.pageX + " " + event.pageY);
	});

});

