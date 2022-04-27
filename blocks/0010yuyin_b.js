'use strict';

//colour = 180;

Blockly.Blocks.hardware_raspberrypi_yuyin_user = {
  init: function () {
    this.setColour(180);
    this.appendValueInput('app_id',String)
      .appendField('百度语音AI的APP_ID为：')
      .setCheck("String");
      this.appendValueInput('api_key',String)
      .appendField('API_KEY为：')
      .setCheck("String");
      this.appendValueInput('secret_key',String)
      .appendField('SECRET_KEY为：')
      .setCheck("String");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.hardware_raspberrypi_yuyin_s = {
  init: function () {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("赋值");
    this.appendValueInput('s')
      .setCheck('var');
   this.appendDummyInput()
        .appendField("为");
   var mode = [["在线", "True"], ["本地", "False"]]
   this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(mode), 'DIR')
   this.appendDummyInput()
        .appendField("语音交互器");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.play_music = {
    init: function () {
        this.setColour(180);
        this.appendValueInput('s')
            .setCheck('var');
        this.appendDummyInput()
            .appendField("播放");
        var mode =
            [["规避障碍物", 'Avoiding obstacles'], ["搭起临时桥", 'Build a temporary bridge'], ["收集能量球", 'Collect energy balls'],
            ["收集能量块", 'Collect energy blocks'], ["遭遇障碍物", 'Encounter obstacles'], ["挖出矿石", 'Excavate ore'],
            ["巡线完成", 'Line patrol completed'], ["火星车出发", 'Mars rover set out'], ["火星车启动", 'Mars rover starts'],
            ["夹起能量球", 'Pinch energy ball'], ["放置能量球", 'Place the energy ball'], ["救援宇航员", 'Rescue astronauts'],
            ["开始巡线", 'Start line patrol'], ["启动救援车", 'Start the rescue vehicle'], ["转移基地车", 'Transfer base vehicle'],
            ];
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(mode), 'DIR')
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['hardware_raspberrypi_read'] = {
  init: function() {
    this.appendValueInput("read",Number)
        .setCheck('String')
        .appendField("读取");
    this.appendDummyInput()
        .appendField("的文字");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks.hardware_raspberrypi_luyin= {
  init: function () {
    this.setColour(180);
    this.appendValueInput('yuyin_s_luyin')
      .setCheck('var');
    this.appendValueInput('luyin_time',Number)
     .appendField('录音')
      .setCheck("Number");
    this.appendValueInput('luyin_path')
      .appendField('秒，保存到')
      .setCheck("var");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.hardware_raspberrypi_yuyin_txt= {
  init: function () {
    this.setColour(180);
    this.appendValueInput('yuyin_s_stt')
      .setCheck('var');
      this.appendValueInput('txt')
      .appendField('识别到的语音文件')
      .setCheck("var");
      this.appendDummyInput()
      .appendField('中的文字')
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.hardware_raspberrypi_read_txt= {
  init: function () {
    this.setColour(180);
    this.appendValueInput('yuyin_s_tts')
      .setCheck('var');
      this.appendValueInput('txt_4',String)
      .appendField('将文本')
      .setCheck("String");
    this.appendValueInput('filename')
      .appendField('转为音频')
      .setCheck("var");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.hardware_raspberrypi_read_txt_1= {
  init: function () {
    this.setColour(180);
    this.appendValueInput('yuyin_s_play')
    .setCheck('var');
    this.appendValueInput('filename_1')
    .appendField('播放音频')
    .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
/*
Blockly.Blocks.hardware_raspberrypi_qinyunke = {
  init: function () {
    this.setColour(180);
   this.appendDummyInput()
        .appendField("创造聊天机器人");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.hardware_raspberrypi_qinyunke_2= {
  init: function () {
    this.setColour(180);
   this.appendDummyInput()
        .appendField("机器人的回答");
    this.setInputsInline(true);
    this.setOutput(true);
  }
};
Blockly.Blocks.hardware_raspberrypi_qinyunke_3 = {
  init: function () {
    this.setColour(180);
   this.appendDummyInput()
        .appendField("请等机器人说完");
   this.appendValueInput('filename_1')
        .setCheck("var");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
*/

//图元hardware_raspberrypi_robot_get_text
Blockly.Blocks.hardware_raspberrypi_robot_get_text={
  init: function () {
    this.setColour(180);
    this.appendDummyInput()
      .appendField('聊天机器人');
    this.appendValueInput('s')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('读取文字');
    this.appendValueInput('txt', String)
      .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



//图元hardware_raspberrypi_robot_word
Blockly.Blocks.hardware_raspberrypi_robot_word={
  init: function () {
    this.setColour(180);
    this.appendDummyInput()
      .appendField('聊天机器人');
    this.appendValueInput('s')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('对你说的话');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};



//图元plat_txt
Blockly.Blocks.plat_txt={
  init: function () {
    this.setColour(180);
    this.appendValueInput('s')
        .setCheck('var');
    this.appendDummyInput()
        .appendField('播放文本');
    this.appendValueInput('txt',String)
        .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元change_setting_DUI
Blockly.Blocks.change_setting_DUI={
  init: function () {
    this.setColour(180);
    this.appendValueInput('s')
        .setCheck('var');
    this.appendDummyInput()
        .appendField('设置播放器的音量为');
    var vol = 
        [
          ["100%","100"],["50%","50"],["75%","75"],["125%","125"],["150%","150"]
        ]
    var spd =
        [
          ["正常","1"],["慢","1.5"],["较慢","1.25"],["快","0.5"],["较快","0.75"]
        ]
    var gender = 
        [
					["粤语女声","粤语女声何春"],["山东话女声","山东话女声大瑶"],["四川话女声","四川话女声胖胖"],["上海话女声","上海话女声叶子"],["男声1","男声小军"],["男声2","男声秋木"],["女声1","知性女声晶晶"],["女声2","客服女声芳芳"]
				];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(vol),'vol');
    this.appendDummyInput()
        .appendField('，语速为');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(spd),'spd');
    this.appendDummyInput()
        .appendField('，选择声线为');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(gender),'gender');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


