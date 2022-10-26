'use strict';


Blockly.Blocks["math_arithmetic"] = {
  init: function () {
    this.setColour("5b67a5");
    this.appendValueInput('A')
    var MODE1 = [['+', '+'], ['-', '-'], ['x', '*'], ['÷', '/'], ['^', '**']];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendValueInput('B')

    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["math_single"] = {
  init: function () {
    this.setColour("5b67a5");
    var MODE1 = [['平方根', 'math.sqrt('], ['绝对值', 'math.fabs('],
    ['-', '-('], ["ln", "math.log("], ['log10', 'math.log10('],
    ['e^', 'math.exp('], ['10^', 'math.pow(10,']];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendValueInput('NUM')
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["math_trig"] = {
  init: function () {
    this.setColour("5b67a5");
    var MODE1 = [['sin', 'sin'], ['cos', 'cos'],
    ['tan', 'tan'], ['asin', 'asin'],
    ['acos', 'acos'], ['atan', 'atan'],];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendValueInput('NUM')
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["math_constant"] = {
  init: function () {
    this.setColour("5b67a5");
    var MODE1 = [['圆周率π', 'math.pi'], ['自然常数e', 'math.e'],
    ['黄金比例φ', '(1 + math.sqrt(5)) / 2'], ['2的平方根', 'math.sqrt(2)'],
    ['1/2的平方根', 'math.sqrt(1.0 / 2)'], ['无穷∞', "float('inf')"]];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["math_isPrime"] = {
  init: function () {
    this.setColour("5b67a5");
    this.appendValueInput('NUM1')
    this.appendDummyInput().appendField('为质数');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["math_round"] = {
  init: function () {
    this.setColour("5b67a5");
    var MODE1 = [['四舍五入', 'round('], ['向上舍入', 'math.ceil('],
    ['向下舍入', 'math.floor(']];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["math_modulo"] = {
  init: function () {
    this.setColour("5b67a5");
    this.appendDummyInput().appendField('取');
    this.appendValueInput('DIVIDEND')
    this.appendDummyInput().appendField('÷');
    this.appendValueInput('DIVISOR')
    this.appendDummyInput().appendField('的余数');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["math_random_int"] = {
  init: function () {
    this.setColour("5b67a5");
    this.appendDummyInput().appendField('从');
    this.appendValueInput('FROM')
    this.appendDummyInput().appendField('到');
    this.appendValueInput('TO')
    this.appendDummyInput().appendField('范围内的随机整数');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["math_random_float"] = {
  init: function () {
    this.setColour("5b67a5");
    this.appendDummyInput().appendField('0到1之间的随机小数');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["math_atan2"] = {
  init: function () {
    this.setColour("5b67a5");
    this.appendDummyInput().appendField('点(x:');
    this.appendValueInput('X')
    this.appendDummyInput().appendField(',y:');
    this.appendValueInput('Y')
    this.appendDummyInput().appendField(')的方位角');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["math_constrain"] = {
  init: function () {
    this.setColour("5b67a5");
    this.appendDummyInput().appendField('将');
    this.appendValueInput('VALUE')
    this.appendDummyInput().appendField('限制在最低');
    this.appendValueInput('LOW')
    this.appendDummyInput().appendField('到最高');
    this.appendValueInput('HIGH')
    this.appendDummyInput().appendField('之间');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["math_on_list"] = {
  init: function () {
    this.setColour("5b67a5");
    var MODE1 = [['列表中数值的和', 'Sum'], ['列表最小值', 'Min'],
    ['列表最大值', 'Max'], ['列表平均值', 'mean'],
    ['列表中位数', 'median'], ['列表中的众数', 'modes'],
    ['列表的标准差', 'standard_deviation'], ['列表随机项', 'choice']
    ];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendValueInput('VALUE')
    this.setInputsInline(true);
    this.setOutput(true);
  },
};
