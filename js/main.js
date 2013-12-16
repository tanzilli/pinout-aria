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

function showHwSpi() {
	$("div.hwsections").slideUp();
	$("div#hwspi").slideDown();
}

function showHwOther() {
	$("div.hwsections").slideUp();
	$("div#hwother").slideDown();
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
			contents+="<button class='atmelnames' id='" + atmel_array[i] + "'>";
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
			contents+="<button class='atmelnames' id='" + atmel_array[i] + "'>";
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
	
	// Set the pin colors
	colorPins();
}	

function colorPins() {
	$(".atmelnames").each(function (){
		if ($(this).attr("id")=="GND") {
			$(this).css("background-color","black");
		}
		if ($(this).attr("id")=="3V3") {
			$(this).css("background-color","red");
		}
		if ($(this).attr("id")=="ADVREF") {
			$(this).css("background-color","red");
		}
		if ($(this).attr("id")=="VBAT") {
			$(this).css("background-color","red");
		}
		if ($(this).attr("id").search("ETH")!=-1) {
			$(this).css("background-color","orange");
		}
		if ($(this).attr("id").search("USB")!=-1) {
			$(this).css("background-color","#81BEF7");
		}
		if ($(this).attr("id").search("MMC")!=-1) {
			$(this).css("background-color","#DA81F5");
		}
		if ($(this).attr("id").search("PA")!=-1 || $(this).attr("id").search("PB")!=-1 || $(this).attr("id").search("PC")!=-1) {
			$(this).css("background-color","green");
		}
		if ($(this).text().search("RXD")!=-1 || $(this).text().search("TXD")!=-1) {
			$(this).css("background-color","#2E2EFE");
		}
		if ($(this).text().search("CTS")!=-1 || $(this).text().search("RTS")!=-1) {
			$(this).css("background-color","#2E2EFE");
		}
		if ($(this).text().search("AD")!=-1) {
			$(this).css("background-color","#FE2EC8");
		}
		if ($(this).text().search("SDA")!=-1 || $(this).text().search("SCL")!=-1) {
			$(this).css("background-color","#2ECCFA");
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

function showSignal(pinName,signal) {
	if ($("#" + pinName).text()!=signal) {
		$("#" + pinName).fadeOut(function() {
			$(this).text(signal).fadeIn(colorPins());
		});
	}	
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
			showSignal("PA0","TXD0");
			showSignal("PA1","RXD0");
		} else {
			data=data.replace("[usart0status]","disabled");
			showSignal("PA0","PA0");
			showSignal("PA1","PA1");
		}	

		if ($("#usart0pinctrl").is(':checked')) {
			data=data.replace("[usart0pinctrl]","pinctrl-0 = <&pinctrl_usart0 &pinctrl_usart0_rts &pinctrl_usart0_cts>;");
			showSignal("PA2","RTS0");
			showSignal("PA3","CTS0");
		} else {
			data=data.replace("[usart0pinctrl]","");
			showSignal("PA2","PA2");
			showSignal("PA3","PA3");
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
			showSignal("PA5","TXD1");
			showSignal("PA6","RXD1");
		} else {
			data=data.replace("[usart1status]","disabled");
			showSignal("PA5","PA5");
			showSignal("PA6","PA6");
		}	

		if ($("#usart1pinctrl").is(':checked')) {
			data=data.replace("[usart1pinctrl]","pinctrl-0 = <&pinctrl_usart1 &pinctrl_usart1_rts &pinctrl_usart1_cts>;");
			showSignal("PC27","RTS1");
			showSignal("PC28","CTS1");
		} else {
			data=data.replace("[usart1pinctrl]","");
			showSignal("PC27","PC27");
			showSignal("PC28","PC28");
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
			showSignal("PA7","TXD2");
			showSignal("PA8","RXD2");
		} else {
			data=data.replace("[usart2status]","disabled");
			showSignal("PA7","PA7");
			showSignal("PA8","PA8");
		}	
	
		//**********************
		// USART3  (/dev/ttyS4)
		//**********************

		if ($("#usart3enabled").is(':checked')) {
			data=data.replace("[usart3status]","okay");
			showSignal("PC22","TXD3");
			showSignal("PC23","RXD3");
		} else {
			data=data.replace("[usart3status]","disabled");
			showSignal("PC22","PC22");
			showSignal("PC23","PC23");
		}	
	
		if ($("#usart3pinctrl").is(':checked')) {
			data=data.replace("[usart3pinctrl]","pinctrl-0 = <&pinctrl_usart3 &pinctrl_usart3_rts &pinctrl_usart3_cts>;");
			showSignal("PC24","RTS3");
			showSignal("PC25","CTS3");
		} else {
			data=data.replace("[usart3pinctrl]","");
			showSignal("PC24","PC24");
			showSignal("PC25","PC25");
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
			showSignal("PC8","UTXD0");
			showSignal("PC9","URXD0");
		} else {
			data=data.replace("[uart0status]","disabled");
			showSignal("PC8","PC8");
			showSignal("PC9","PC9");
		}	
	
		//**********************
		// UART1 (/dev/ttyS6)
		//**********************

		if ($("#uart1enabled").is(':checked')) {
			data=data.replace("[uart1status]","okay");
			showSignal("PC16","UTXD1");
			showSignal("PC17","URXD1");
		} else {
			data=data.replace("[uart1status]","disabled");
			showSignal("PC16","PC16");
			showSignal("PC17","PC17");
		}	
	
		//**********************
		// I2C0 (/dev/i2c-0)
		//**********************

		if ($("#i2c0enabled").is(':checked')) {
			data=data.replace("[i2c0status]","okay");
			showSignal("PA30","SDA0");
			showSignal("PA31","SCL0");
		} else {
			data=data.replace("[i2c0status]","disabled");
			showSignal("PA30","PA30");
			showSignal("PA31","PA31");
		}	

		//**********************
		// I2C1 (/dev/i2c-1)
		//**********************

		if ($("#i2c1enabled").is(':checked')) {
			data=data.replace("[i2c1status]","okay");
			showSignal("PC0","SDA1");
			showSignal("PC1","SCL1");
		} else {
			data=data.replace("[i2c1status]","disabled");
			showSignal("PC0","PC0");
			showSignal("PC1","PC1");
		}	

		if ($("#adcenabled").is(':checked')) {
			showSignal("PB11","AD0");
			showSignal("PB12","AD1");
			showSignal("PB13","AD2");
			showSignal("PB14","AD3");
			data=data.replace("[adcstatus]","okay");
		} else {
			showSignal("PB11","PB11");
			showSignal("PB12","PB12");
			showSignal("PB13","PB13");
			showSignal("PB14","PB14");
			data=data.replace("[adcstatus]","disabled");
		}	

		//**********************
		// SPI0 (/dev/i2c-0)
		//**********************

		if ($("#spi0enabled").is(':checked')) {
			data=data.replace("[spi0status]","okay");
			showSignal("PC0","SDA1");
			showSignal("PC1","SCL1");
		} else {
			data=data.replace("[spi0status]","disabled");
			showSignal("PC0","PC0");
			showSignal("PC1","PC1");
		}	


		//**********************
		// RAM size
		//**********************

		if ($("#ram128").is(':checked')) {
			data=data.replace("[ramsize]","0x8000000");
		} else {
			data=data.replace("[ramsize]","0x10000000");
		}	
	
		//**********************
		// MACB0 (Ethernet)
		// Kernel command line
		//**********************

		if ($("#macb0enabled").is(':checked')) {
			data=data.replace("[macb0status]","okay");
		} else {
			data=data.replace("[macb0status]","disabled");
		}	

		data=data.replace("[macb0macaddress]",$("#macb0macaddress").val());	

		data=data.replace("[kernelargs]",$("#kernelargs").val());	
	
		$("#textarea_dts").val(data);
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

