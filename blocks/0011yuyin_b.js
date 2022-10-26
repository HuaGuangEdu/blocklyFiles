'use strict';

Blockly.Blocks["recognizer_init"] = {
  init: function () {
    this.setColour(180);
    this.appendDummyInput().appendField('赋值');
    this.appendValueInput('recognizer')
    this.appendDummyInput().appendField('为');
    this.appendDummyInput().appendField('语音识别器，模型为');
    var mode = [["百度在线模型", "'online'"], ["RNN模型", "'k2_rnnt'"],
    ["conformer模型", "'conformer'"], ["流式模型", "'stream'"]]
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["synthesizer_init"] = {
  init: function () {
    this.setColour(180);
    this.appendDummyInput().appendField('赋值');
    this.appendValueInput('synthesizer')
    this.appendDummyInput().appendField('为');
    var mode1 = [['在线', "True"], ['离线', "False"]];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(mode1), 'DIR');
    this.appendDummyInput().appendField('语音合成器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["chatbot_init"] = {
  init: function () {
    this.setColour(180);
    this.appendDummyInput().appendField('赋值');
    this.appendValueInput('chatbot')
    this.appendDummyInput().appendField('为');
    this.appendDummyInput().appendField('聊天机器人');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};



Blockly.Blocks["hardware_raspberrypi_luyin"] = {
  init: function () {
    this.setColour(180);
    this.appendValueInput('luyin_time')
      .appendField('录音')
    this.appendValueInput('luyin_path')
      .appendField('秒，保存到')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks["hardware_raspberrypi_yuyin_txt"] = {
  init: function () {
    this.setColour(180);
    this.appendValueInput('recognizer')
    this.appendValueInput('txt')
      .appendField('识别到的语音文件')
    this.appendDummyInput()
      .appendField('中的文字')
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks["hardware_raspberrypi_read_txt"] = {
  init: function () {
    this.setColour(180);
    this.appendValueInput('synthesizer')
    this.appendValueInput('txt_4')
      .appendField('将文本')
    this.appendValueInput('filename')
      .appendField('转为音频')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks["hardware_raspberrypi_read_txt_1"] = {
  init: function () {
    this.setColour(180);
    this.appendValueInput('filename_1')
      .appendField('播放音频')
      .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//图元hardware_raspberrypi_robot_get_text
Blockly.Blocks["hardware_raspberrypi_robot_get_text"] = {
  init: function () {
    this.setColour(180);
    this.appendDummyInput()
      .appendField('聊天机器人');
    this.appendValueInput('chatbot')
    this.appendDummyInput()
      .appendField('读取文字');
    this.appendValueInput('txt')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



//图元hardware_raspberrypi_robot_word
Blockly.Blocks["hardware_raspberrypi_robot_word"] = {
  init: function () {
    this.setColour(180);
    this.appendDummyInput()
      .appendField('聊天机器人');
    this.appendValueInput('chatbot')
    this.appendDummyInput()
      .appendField('对你说的话');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};



//图元play_txt
Blockly.Blocks["play_txt"] = {
  init: function () {
    this.setColour(180);
    this.appendValueInput('synthesizer')
    this.appendDummyInput()
      .appendField('播放文本');
    this.appendValueInput('txt')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元change_setting_DUI
Blockly.Blocks["change_setting_DUI"] = {
  init: function () {
    this.setColour(180);
    this.appendValueInput('synthesizer')
    this.appendDummyInput()
      .appendField('设置播放器的音量为');
    var vol =
      [
        ["100%", "100"], ["50%", "50"], ["75%", "75"], ["125%", "125"], ["150%", "150"]
      ]
    var spd =
      [
        ["正常", "1"], ["慢", "1.5"], ["较慢", "1.25"], ["快", "0.5"], ["较快", "0.75"]
      ]
    var gender =
      [
        ["粤语女声", "粤语女声何春"], ["山东话女声", "山东话女声大瑶"], ["四川话女声", "四川话女声胖胖"], ["上海话女声", "上海话女声叶子"], ["男声1", "男声小军"], ["男声2", "男声秋木"], ["女声1", "知性女声晶晶"], ["女声2", "客服女声芳芳"]
      ];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(vol), 'vol');
    this.appendDummyInput()
      .appendField('，语速为');
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(spd), 'spd');
    this.appendDummyInput()
      .appendField('，选择声线为');
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(gender), 'gender');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};




