'use strict';

  Blockly.Blocks["MUxSVu"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('向前移动');
    this.appendValueInput('NUM1', Number).setCheck('Number');
    this.appendDummyInput().appendField('长度');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["HhbRej"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('向后移动');
    this.appendValueInput('NUM1', Number).setCheck('Number');
    this.appendDummyInput().appendField('长度');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["fkFEQy"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('向右转动');
    this.appendValueInput('NUM1', Number).setCheck('Number');
    this.appendDummyInput().appendField('度');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["QSiFTf"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('向左转动');
    this.appendValueInput('NUM1', Number).setCheck('Number');
    this.appendDummyInput().appendField('度');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["QmjVrR"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('移动到坐标（');
    this.appendValueInput('NUM1', Number).setCheck('Number');
    this.appendDummyInput().appendField(',');
    this.appendValueInput('NUM2', Number).setCheck('Number');
    this.appendDummyInput().appendField('）');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["IBbgKe"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('画笔抬起，移动会不绘图');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["haRyhR"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('笔画落下，移动会绘图');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["fYdSWn"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('设置画笔宽度为');
    this.appendValueInput('NUM1', Number).setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["PTQFyJ"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('设置画笔颜色为');
    var MODE1=[['蓝色', "'blue'"], ['红色', "'red'"], ['绿色', "'green'"]];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1),'MODE1');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["CjONFi"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('清空窗口');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["mKMKUW"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('绘制一个半径为');
    this.appendValueInput('NUM1', Number).setCheck('Number');
    this.appendDummyInput().appendField('圆形');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["GCqkbF"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('保持图像显示（如果不加上这个块，无法正常显示图像）');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };
  
  Blockly.Blocks["KwBunK"]={
    init: function () {
    this.setColour(60);
    this.appendDummyInput().appendField('设置窗口的长为');
    this.appendValueInput('NUM1', Number).setCheck('Number');
    this.appendDummyInput().appendField('，高为');
    this.appendValueInput('NUM2', Number).setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    },
  };


Blockly.Blocks["aEZAqL"]={
  init: function () {
  this.setColour(60);
  this.appendDummyInput().appendField('在窗口上写文字');
  this.appendValueInput('STR1',String).setCheck('String')
  this.appendDummyInput().appendField('，字体为');
  var MODE1=[['黑体', "'黑体'"], ['楷体', "'楷体'"], ['宋体', "'宋体'"]];
  this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1),'MODE1');
  this.appendDummyInput().appendField(',字体大小为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.appendDummyInput().appendField(',字体类型为');
  var MODE2=[['正常', "'normal'"], ['粗体', "'bold'"], ['斜体', "'italic'"]];
  this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE2),'MODE2');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks["EXEC"]={
  init: function () {
  this.setColour(60);
  this.appendDummyInput().appendField('执行代码：');
  this.appendValueInput('STR1',String).setCheck('String')
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

