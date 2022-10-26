'use strict';




//图元io
Blockly.Python["io"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = 'gpio.Io(' + num + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};



//图元setinout
Blockly.Python["setinout"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var i = Blockly.Python.valueToCode(this, 'i', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    var code = i + '.set_in_out("' + mode + '")\n';
    return code;
};

//图元setioout
Blockly.Python["setioout"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var i = Blockly.Python.valueToCode(this, 'i', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    var code = i + '.set_io_out("' + mode + '")\n';
    return code;
};




//图元getioin
Blockly.Python["getioin"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var i = Blockly.Python.valueToCode(this, 'i', Blockly.Python.ORDER_ATOMIC);
    var code = i + '.get_io_in()\n';
    return code;
};



//图元ioin
Blockly.Python["__ioin"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var i = Blockly.Python.valueToCode(this, 'i', Blockly.Python.ORDER_ATOMIC);
    var code = i + '.ioin';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


//图元cleanio
Blockly.Python["cleanio"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var i = Blockly.Python.valueToCode(this, 'i', Blockly.Python.ORDER_ATOMIC);
    var code = i + '.clean_io()\n';
    return code;
};


//图元io_pwm
Blockly.Python["io_pwm"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = 'gpio.IoToPwm(' + num + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


//图元pwm_start
Blockly.Python["pwm_start"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var p = Blockly.Python.valueToCode(this, 'p', Blockly.Python.ORDER_ATOMIC);
    var code = p + '.start()\n';
    return code;
};


//图元setfreq
Blockly.Python["setfreq"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var p = Blockly.Python.valueToCode(this, 'p', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = p + '.set_freq(' + num + ')\n';
    return code;
};


//图元setduty
Blockly.Python["setduty"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var p = Blockly.Python.valueToCode(this, 'p', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = p + '.set_duty(' + num + ')\n';
    return code;
};


//图元pwm_end
Blockly.Python["pwm_end"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var p = Blockly.Python.valueToCode(this, 'p', Blockly.Python.ORDER_ATOMIC);
    var code = p + '.end()\n';
    return code;
};


// 图元 Led
Blockly.Python["led"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = 'gpio.Led(' + num + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["closeled"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var led = Blockly.Python.valueToCode(this, 'led', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    if (mode == 'closeled') { var code = led + '.closeled()\n'; }
    else if (mode == 'openled') { var code = led + '.openled()\n'; }
    return code;
};


//图元 温湿度
Blockly.Python["tmp_hum"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var t_num = Blockly.Python.valueToCode(this, 't_num', Blockly.Python.ORDER_ATOMIC);
    var code = 'gpio.TempHump(' + t_num + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};




Blockly.Python["getTemp_Humi"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var tem = Blockly.Python.valueToCode(this, 'tem', Blockly.Python.ORDER_ATOMIC);
    var code = tem + '.getTemp_Humi()\n';
    return code;
};


Blockly.Python["t_humi"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var tem = Blockly.Python.valueToCode(this, 'tem', Blockly.Python.ORDER_ATOMIC);
    var code = tem + '.humi';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["t_temp"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var tem = Blockly.Python.valueToCode(this, 'tem', Blockly.Python.ORDER_ATOMIC);
    var code = tem + '.temp';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// 图元 红外
Blockly.Python["hongwai"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = 'gpio.HongWai(' + num + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["getOcclusion"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var i = Blockly.Python.valueToCode(this, 'i', Blockly.Python.ORDER_ATOMIC);
    var code = i + '.get_return()\n';
    return code;
};


Blockly.Python["ioin"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var i = Blockly.Python.valueToCode(this, 'i', Blockly.Python.ORDER_ATOMIC);
    var code = i + '.data';
    return [code, Blockly.Python.ORDER_ATOMIC];
};




Blockly.Python["initial_servo"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var servo = Blockly.Python.valueToCode(this, 'servo', Blockly.Python.ORDER_ATOMIC);
    var code = servo + '.init_servo()\n';
    return code;
};




//图元 超声波
Blockly.Python["csb_"] = function () {
    Blockly.Python.definitions_['control'] = 'from control import gpio';
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = 'gpio.CSB(' + num + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["csb_get_distance"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var M = Blockly.Python.valueToCode(this, 'M', Blockly.Python.ORDER_ATOMIC);
    var code = M + '.get_distance()\n';
    return code;
};


Blockly.Python["csb_distance"] = function () {
    Blockly.Python.definitions_['control'] = 'from control import gpio';
    var M = Blockly.Python.valueToCode(this, 'M', Blockly.Python.ORDER_ATOMIC);
    var code = M + '.dis';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["driverless_car_raspberrypi_macanum_wheel_connect"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var b = Blockly.Python.valueToCode(this, 'b', Blockly.Python.ORDER_ATOMIC);
    var code = b + '=gpio.Mecanum_wheel()\n' + b + '.uart_init()\n';
    return code;
};

Blockly.Python["driverless_car_raspberrypi_car_move"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var b = Blockly.Python.valueToCode(this, 'car_m', Blockly.Python.ORDER_ATOMIC);
    var speed = Blockly.Python.valueToCode(this, 'speed', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    // var speed_text = mode;
    var code = b + '.' + mode + '(' + speed + ')' + '\n';
    return code;
};

Blockly.Python["driverless_car_raspberrypi_car_circle"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var b = Blockly.Python.valueToCode(this, 'car_m', Blockly.Python.ORDER_ATOMIC);
    var speed = Blockly.Python.valueToCode(this, 'speed', Blockly.Python.ORDER_ATOMIC);
    var radius = Blockly.Python.valueToCode(this, 'radius', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    var code = b + '.' + mode + '(' + speed + ',' + radius + ')' + '\n';
    return code;
};

Blockly.Python["driverless_car_raspberrypi_car_stop"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var b = Blockly.Python.valueToCode(this, 'b', Blockly.Python.ORDER_ATOMIC);
    var code = b + '.car_stop()' + '\n';
    return code;
};



Blockly.Python["GUuKXc"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var servo = Blockly.Python.valueToCode(this, 'servo', Blockly.Python.ORDER_ATOMIC);
    var MODE1 = this.getFieldValue('MODE1');
    var NUM2 = Blockly.Python.valueToCode(this, 'NUM2', Blockly.Python.ORDER_ATOMIC);
    var NUM1 = Blockly.Python.valueToCode(this, 'NUM1', Blockly.Python.ORDER_ATOMIC);
    var code = servo + '.turn(' + MODE1 + ',' + NUM2 + ',' + NUM1 + ')' + '\n';
    return code;
};

Blockly.Python["ZesoGg"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var code = 'gpio.Servo(0)' + '\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["uUtesR"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var Lcd = Blockly.Python.valueToCode(this, 'Lcd', Blockly.Python.ORDER_ATOMIC);
    var code = Lcd + '=gpio.Screen()' + '\n';
    return code;
};

Blockly.Python["YrpEZH"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var Lcd = Blockly.Python.valueToCode(this, 'Lcd', Blockly.Python.ORDER_ATOMIC);
    var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
    var code = Lcd + '.screen_display(' + STR1 + ')' + '\n';
    return code;
};

Blockly.Python["pLpkHi"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var Lcd = Blockly.Python.valueToCode(this, 'Lcd', Blockly.Python.ORDER_ATOMIC);
    var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
    var code = Lcd + '.screen_display_picture(' + STR1 + ')' + '\n';
    return code;
};

Blockly.Python["FsWBeE"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var Lcd = Blockly.Python.valueToCode(this, 'Lcd', Blockly.Python.ORDER_ATOMIC);
    var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
    var code = Lcd + '.video_show(' + STR1 + ')' + '\n';
    return code;
};

Blockly.Python["PFLdYN"] = function () {
    Blockly.Python.definitions_['control_gpio'] = 'from control import gpio';
    var Lcd = Blockly.Python.valueToCode(this, 'Lcd', Blockly.Python.ORDER_ATOMIC);
    var code = Lcd + '.live_view_camera()' + '\n';
    return code;
};