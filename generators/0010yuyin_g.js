'use strict';

Blockly.Python.hardware_raspberrypi_yuyin_user= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var app_id =Blockly.Python.valueToCode(this, 'app_id', Blockly.Python.ORDER_ATOMIC);
    var api_key =Blockly.Python.valueToCode(this, 'api_key', Blockly.Python.ORDER_ATOMIC);
    var secret_key =Blockly.Python.valueToCode(this, 'secret_key', Blockly.Python.ORDER_ATOMIC);
    var code = 'yuyin.TxtWrite('+app_id+','+api_key+','+secret_key+')\n';
    return code;
};


Blockly.Python.hardware_raspberrypi_yuyin_s= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var s =Blockly.Python.valueToCode(this, 's', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
//    var code =s+'=yuyin.Yuyin(online='+mode+')\n';
    var code =s+'=yuyin.Yuyin()\n';
    return code;
};

Blockly.Python.play_music = function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var s = Blockly.Python.valueToCode(this, 's', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    var code = s + '.play_music("' + mode + '.mp3")\n';
    return code;
};


Blockly.Python.hardware_raspberrypi_read= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var read =Blockly.Python.valueToCode(this, 'read', Blockly.Python.ORDER_ATOMIC);
    var code = 'control.TxtRead('+read+')\n';
    return code;
};

Blockly.Python.hardware_raspberrypi_luyin= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var yuyin_s_luyin =Blockly.Python.valueToCode(this, 'yuyin_s_luyin', Blockly.Python.ORDER_ATOMIC);
    var luyin_time =Blockly.Python.valueToCode(this, 'luyin_time', Blockly.Python.ORDER_ATOMIC);
    var luyin_path =Blockly.Python.valueToCode(this, 'luyin_path', Blockly.Python.ORDER_ATOMIC);
    var code = yuyin_s_luyin+'.my_record('+luyin_time +',"'+luyin_path +'")\n';
    return code;
};

Blockly.Python.hardware_raspberrypi_yuyin_txt= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var yuyin_s_stt =Blockly.Python.valueToCode(this, 'yuyin_s_stt', Blockly.Python.ORDER_ATOMIC);
    var txt =Blockly.Python.valueToCode(this, 'txt', Blockly.Python.ORDER_ATOMIC);
    var code = yuyin_s_stt+'.stt("'+txt+'")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.hardware_raspberrypi_read_txt= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
     var yuyin_s_tts =Blockly.Python.valueToCode(this, 'yuyin_s_tts', Blockly.Python.ORDER_ATOMIC);
    var txt_4 =Blockly.Python.valueToCode(this, 'txt_4', Blockly.Python.ORDER_ATOMIC);
    var filename =Blockly.Python.valueToCode(this, 'filename', Blockly.Python.ORDER_ATOMIC);
    var code = yuyin_s_tts+'.tts('+txt_4 +',"'+filename+'")\n';
    return code;
};

Blockly.Python.hardware_raspberrypi_read_txt_1= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var yuyin_s_play =Blockly.Python.valueToCode(this, 'yuyin_s_play', Blockly.Python.ORDER_ATOMIC);
    var filename_1 =Blockly.Python.valueToCode(this, 'filename_1', Blockly.Python.ORDER_ATOMIC);
    var code = yuyin_s_play+'.play_music("' +filename_1 + '")\n';
    return code;
};
/*
Blockly.Python.hardware_raspberrypi_qinyunke= function () {
   Blockly.Python.definitions_['control_yuyin_1'] = 'import urllib\n'+'import requests';
   var code = 'def qingyunke(msg):\n'+'   url = \'http://api.qingyunke.com/api.php?key=free&appid=0&msg={}\'.format(urllib.parse.quote(msg))\n'+'   html = requests.get(url)\n'+'   return html.json()["content"]\n';
   return code;
};
Blockly.Python.hardware_raspberrypi_qinyunke_2= function () {
   var code = 'qingyunke(txt)';
   return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.hardware_raspberrypi_qinyunke_3= function () {
   Blockly.Python.definitions_['control_yuyin_2'] = 'import time\n'+'from mutagen.mp3 import MP3\n';
   var filename_1 =Blockly.Python.valueToCode(this, 'filename_1', Blockly.Python.ORDER_ATOMIC);
   var code = 'audio_time = MP3("class/speech/{}".format('+'\''+filename_1+'.mp3'+'\''+'))\n'+'t_1 = audio_time.info.length + 1\n'+'time.sleep(t_1)\n';
   return code;
};
*/


Blockly.Python.hardware_raspberrypi_robot_get_text= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var s =Blockly.Python.valueToCode(this, 's', Blockly.Python.ORDER_ATOMIC);
    var txt =Blockly.Python.valueToCode(this, 'txt', Blockly.Python.ORDER_ATOMIC);
    var code = s+'.chat('+txt+')\n';
    return code;
};

Blockly.Python.hardware_raspberrypi_robot_word= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var s =Blockly.Python.valueToCode(this, 's', Blockly.Python.ORDER_ATOMIC);
    var code = s+'.chat_ret';
    return [code, Blockly.Python.ORDER_ATOMIC];
};




Blockly.Python.plat_txt= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var s =Blockly.Python.valueToCode(this, 's', Blockly.Python.ORDER_ATOMIC);
    var txt =Blockly.Python.valueToCode(this, 'txt', Blockly.Python.ORDER_ATOMIC);
    var code = s+'.play_txt('+txt+')\n';
    return code;
};


Blockly.Python.change_setting_DUI= function () {
    Blockly.Python.definitions_['control'] = 'from control import yuyin';
    var s =Blockly.Python.valueToCode(this, 's', Blockly.Python.ORDER_ATOMIC);
    var vol = this.getFieldValue('vol');
    var spd = this.getFieldValue('spd');
    var gender = this.getFieldValue('gender');
    var code = s+'.change_vol_spd_gender_DUI('+vol+', '+spd+', "'+gender+'")\n';
    return code;
};

