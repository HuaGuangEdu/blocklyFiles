'use strict';

//初始化仿真器并设置虚拟场景
Blockly.Blocks.emulator_init = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput()
        .appendField('仿真初始化，设置虚拟场景为');
    var level =
        [
            ["默认", ''],
            ["空白", '0'],
            ["红外", '1'],
            ["超声波", '2'],
            ["简单运动", '3'],
            ["简单巡线", '4'],
            ["智能家居", '5']
        ];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(level), 'DIR1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//设置仿真摄像头
Blockly.Blocks.emulator_camera = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('cam_name')
        .appendField('赋值')
        .setCheck('var');
    this.appendValueInput('cam_num', Number)
      .appendField('为')
      .setCheck('Number');
    this.appendDummyInput()
        .appendField('号仿真摄像头');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};