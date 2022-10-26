'use strict';

Blockly.Python["recognizer_init"]= function () {
    Blockly.Python.definitions_['control_yuyin']='from control import yuyin';
    var recognizer=Blockly.Python.valueToCode(this,'recognizer',Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    var code=recognizer+'=yuyin.SpeechRecognizer(model='+mode+')'+'\n';
    return code;
};
Blockly.Python["synthesizer_init"]= function () {
    Blockly.Python.definitions_['control_yuyin']='from control import yuyin';
    var synthesizer=Blockly.Python.valueToCode(this,'synthesizer',Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    var code=synthesizer+'=yuyin.SpeechSynthesis(online='+mode+')'+'\n';
    return code;
};

Blockly.Python["chatbot_init"]= function () {
    Blockly.Python.definitions_['control_yuyin']='from control import yuyin';
    var chatbot=Blockly.Python.valueToCode(this,'chatbot',Blockly.Python.ORDER_ATOMIC);
    var code=chatbot+'=yuyin.ChatBot()'+'\n';
    return code;
};



Blockly.Python["hardware_raspberrypi_yuyin_user"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var app_id =Blockly.Python.valueToCode(this, 'app_id', Blockly.Python.ORDER_ATOMIC);
    var api_key =Blockly.Python.valueToCode(this, 'api_key', Blockly.Python.ORDER_ATOMIC);
    var secret_key =Blockly.Python.valueToCode(this, 'secret_key', Blockly.Python.ORDER_ATOMIC);
    var code = 'yuyin.TxtWrite('+app_id+','+api_key+','+secret_key+')\n';
    return code;
};




Blockly.Python["hardware_raspberrypi_read"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var read =Blockly.Python.valueToCode(this, 'read', Blockly.Python.ORDER_ATOMIC);
    var code = 'control.TxtRead('+read+')\n';
    return code;
};










Blockly.Python["play_txt"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var synthesizer =Blockly.Python.valueToCode(this, 'synthesizer', Blockly.Python.ORDER_ATOMIC);
    var txt =Blockly.Python.valueToCode(this, 'txt', Blockly.Python.ORDER_ATOMIC);
    var code = synthesizer+'.play_txt('+txt+')\n';
    return code;
};


Blockly.Python["change_setting_DUI"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var synthesizer =Blockly.Python.valueToCode(this, 'synthesizer', Blockly.Python.ORDER_ATOMIC);
    var vol = this.getFieldValue('vol');
    var spd = this.getFieldValue('spd');
    var gender = this.getFieldValue('gender');
    var code = synthesizer+'.change_vol_spd_gender_DUI('+vol+', '+spd+', "'+gender+'")\n';
    return code;
};



Blockly.Python["hardware_raspberrypi_yuyin_user"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var app_id =Blockly.Python.valueToCode(this, 'app_id', Blockly.Python.ORDER_ATOMIC);
    var api_key =Blockly.Python.valueToCode(this, 'api_key', Blockly.Python.ORDER_ATOMIC);
    var secret_key =Blockly.Python.valueToCode(this, 'secret_key', Blockly.Python.ORDER_ATOMIC);
    var code = 'yuyin.TxtWrite('+app_id+','+api_key+','+secret_key+')\n';
    return code;
};



Blockly.Python["hardware_raspberrypi_read"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var read =Blockly.Python.valueToCode(this, 'read', Blockly.Python.ORDER_ATOMIC);
    var code = 'control.TxtRead('+read+')\n';
    return code;
};

Blockly.Python["hardware_raspberrypi_luyin"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var luyin_time =Blockly.Python.valueToCode(this, 'luyin_time', Blockly.Python.ORDER_ATOMIC);
    var luyin_path =Blockly.Python.valueToCode(this, 'luyin_path', Blockly.Python.ORDER_ATOMIC);
    var code = 'yuyin.my_record('+luyin_time +',"'+luyin_path +'")\n';
    return code;
};

Blockly.Python["hardware_raspberrypi_yuyin_txt"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var recognizer =Blockly.Python.valueToCode(this, 'recognizer', Blockly.Python.ORDER_ATOMIC);
    var txt =Blockly.Python.valueToCode(this, 'txt', Blockly.Python.ORDER_ATOMIC);
    var code = recognizer+'.stt("'+txt+'")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["hardware_raspberrypi_read_txt"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
     var synthesizer =Blockly.Python.valueToCode(this, 'synthesizer', Blockly.Python.ORDER_ATOMIC);
    var txt_4 =Blockly.Python.valueToCode(this, 'txt_4', Blockly.Python.ORDER_ATOMIC);
    var filename =Blockly.Python.valueToCode(this, 'filename', Blockly.Python.ORDER_ATOMIC);
    var code = synthesizer+'.tts('+txt_4 +',"'+filename+'")\n';
    return code;
};

Blockly.Python["hardware_raspberrypi_read_txt_1"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var filename_1 =Blockly.Python.valueToCode(this, 'filename_1', Blockly.Python.ORDER_ATOMIC);
    var code = 'yuyin.play_music("' +filename_1 + '")\n';
    return code;
};

Blockly.Python["hardware_raspberrypi_robot_get_text"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var chatbot =Blockly.Python.valueToCode(this, 'chatbot', Blockly.Python.ORDER_ATOMIC);
    var txt =Blockly.Python.valueToCode(this, 'txt', Blockly.Python.ORDER_ATOMIC);
    var code = chatbot+'.chat('+txt+')\n';
    return code;
};

Blockly.Python["hardware_raspberrypi_robot_word"]= function () {
    Blockly.Python.definitions_['control_yuyin'] = 'from control import yuyin';
    var chatbot =Blockly.Python.valueToCode(this, 'chatbot', Blockly.Python.ORDER_ATOMIC);
    var code = chatbot+'.chat_ret';
    return [code, Blockly.Python.ORDER_ATOMIC];
};




