'use strict';


Blockly.Python["math_arithmetic"] = function () {
  var NUM1 = Blockly.Python.valueToCode(this, 'A', Blockly.Python.ORDER_ATOMIC);
  var NUM2 = Blockly.Python.valueToCode(this, 'B', Blockly.Python.ORDER_ATOMIC);
  var MODE1 = this.getFieldValue('MODE1');
  var code = NUM1 + MODE1 + NUM2;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["math_single"] = function () {
  Blockly.Python.definitions_['math'] = 'import math';
  var NUM1 = Blockly.Python.valueToCode(this, 'NUM', Blockly.Python.ORDER_ATOMIC);
  var MODE1 = this.getFieldValue('MODE1');
  var code = MODE1 + NUM1 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["math_trig"] = function () {
  Blockly.Python.definitions_['control_maths'] = 'from control import maths';
  var NUM1 = Blockly.Python.valueToCode(this, 'NUM', Blockly.Python.ORDER_ATOMIC);
  var MODE1 = this.getFieldValue('MODE1');
  var code = "maths." + MODE1 + "(" + NUM1 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python["math_constant"] = function () {
  Blockly.Python.definitions_['math'] = 'import math';
  var MODE1 = this.getFieldValue('MODE1');
  var code = MODE1;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["math_isPrime"] = function () {
  Blockly.Python.definitions_['control_maths'] = 'from controlimport maths';
  var NUM1 = Blockly.Python.valueToCode(this, 'NUM1', Blockly.Python.ORDER_ATOMIC);
  var code = "maths.math_isPrime(" + NUM1 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["math_round"] = function () {
  Blockly.Python.definitions_['math'] = 'import math';
  var NUM1 = Blockly.Python.valueToCode(this, 'NUM1', Blockly.Python.ORDER_ATOMIC);
  var MODE1 = this.getFieldValue('MODE1');
  var code = MODE1 + NUM1 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["math_modulo"] = function () {
  var NUM1 = Blockly.Python.valueToCode(this, 'DIVIDEND', Blockly.Python.ORDER_ATOMIC);
  var NUM2 = Blockly.Python.valueToCode(this, 'DIVISOR', Blockly.Python.ORDER_ATOMIC);
  var code = NUM1 + " % " + NUM2;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["math_random_int"] = function () {
  Blockly.Python.definitions_['random'] = 'import random';
  var NUM1 = Blockly.Python.valueToCode(this, 'FROM', Blockly.Python.ORDER_ATOMIC);
  var NUM2 = Blockly.Python.valueToCode(this, 'TO', Blockly.Python.ORDER_ATOMIC);
  var code = "random.randint(" + NUM1 + "," + NUM2 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python["math_random_float"] = function () {
  Blockly.Python.definitions_['random'] = 'import random';
  var code = "random.random()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["math_atan2"] = function () {
  Blockly.Python.definitions_['random'] = 'import random';
  var NUM1 = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
  var NUM2 = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
  var code = "math.atan2(" + NUM1 + "," + NUM2 + ") / math.pi * 180";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["math_on_list"] = function () {
  Blockly.Python.definitions_['control_maths'] = 'from control import maths';
  var NUM1 = Blockly.Python.valueToCode(this, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var MODE1 = this.getFieldValue('MODE1');
  var code = "maths." + MODE1 + "(" + NUM1 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};
