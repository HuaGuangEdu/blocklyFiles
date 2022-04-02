'use strict';

//Blockly.Blocks.loops.HUE = 120;

Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.appendValueInput("DELAY_TIME")
        .setCheck("Number")
        .appendField("延时");
    this.appendDummyInput()
        .appendField("秒");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['threading_create'] = {
  init: function() {
    this.appendValueInput('hs',String)
      .appendField('将函数')
      .setCheck("String");
    this.appendDummyInput()
        .appendField("设置为一个线程");
    this.setInputsInline(true);
    this.setColour(120);
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['threading_start'] = {
  init: function() {
    this.appendValueInput("thread")
        .setCheck("var")
        .appendField("线程");
    this.appendDummyInput()
        .appendField("启动");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['threading_join'] = {
  init: function() {
    this.appendValueInput("thread_")
        .setCheck("var")
        .appendField("线程");
    this.appendValueInput("thread_time")
        .setCheck("Number")
        .appendField("以");
    this.appendDummyInput()
        .appendField("时间阻塞");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keyboard'] = {
    init:function(){
    this.appendDummyInput()
        .appendField("启用键盘控制")
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['anjian'] = {
    init:function(){
    this.appendDummyInput()
        .appendField("按键检测")
    this.appendValueInput("on_press")
        .appendField("监测按下按键函数")
        .setCheck("String")
    this.appendValueInput("on_release")
        .appendField("监测松开按键函数")
        .setCheck("String")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['key_value'] = {
    init:function(){
    this.appendValueInput("key")
        .setCheck("var");
    this.appendDummyInput()
        .appendField("的输入")
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};
