'use strict';

Blockly.Blocks['flappy_bird']={
  init: function () {
    this.setColour(20);
    this.appendDummyInput()
      .appendField('启动下坠的小鸟');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['driverless_car_raspberrypi_car_xunxian'] = {
  init: function () {
    this.setColour(20);
    this.appendDummyInput()
    .appendField('小车');
    this.appendDummyInput()
    .appendField('结合语音开始巡线');
    this.appendDummyInput()
    .appendField('（请将左，右红外传感器分别插入0，1号io口）');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['autoPoetry'] = {
  init: function () {
    this.setColour(20);
    this.appendDummyInput()
    .appendField('启动古诗生成器');
    this.appendDummyInput()
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};