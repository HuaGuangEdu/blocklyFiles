'use strict';

Blockly.Python.logic_is_in = function() {
  var a = Blockly.Python.valueToCode(this, 'A_in',Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(this, 'B_in',Blockly.Python.ORDER_ATOMIC);
  var code=a+' in '+b;
  return [code ,Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['logic_compare'] = function() {
  var operator = this.getFieldValue('DIR');
  var argument0 = Blockly.Python.valueToCode(this, 'A', Blockly.Python.ORDER_ATOMIC) || '0';
  var argument1 = Blockly.Python.valueToCode(this, 'B', Blockly.Python.ORDER_ATOMIC) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? 'and' : 'or';
  var order = (operator == 'and') ? Blockly.Python.ORDER_LOGICAL_AND :
      Blockly.Python.ORDER_LOGICAL_OR;
  var argument0 = Blockly.Python.valueToCode(block, 'A', order);
  var argument1 = Blockly.Python.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'False';
    argument1 = 'False';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == 'and') ? 'True' : 'False';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Python['logic_negate'] = function(block) {
  // Negation.
  var argument0 = Blockly.Python.valueToCode(block, 'BOOL',
      Blockly.Python.ORDER_LOGICAL_NOT) || 'True';
  var code = 'not ' + argument0;
  return [code, Blockly.Python.ORDER_LOGICAL_NOT];
};

Blockly.Python['logic_boolean'] = function(block) {
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'True' : 'False';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['logic_null'] = function(block) {
  return ['None', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.Python.valueToCode(block, 'IF',
      Blockly.Python.ORDER_CONDITIONAL) || 'False';
  var value_then = Blockly.Python.valueToCode(block, 'THEN',
      Blockly.Python.ORDER_CONDITIONAL) || 'None';
  var value_else = Blockly.Python.valueToCode(block, 'ELSE',
      Blockly.Python.ORDER_CONDITIONAL) || 'None';
  var code = value_then + ' if ' + value_if + ' else ' + value_else;
  return [code, Blockly.Python.ORDER_CONDITIONAL];
};

Blockly.Python['controls_if'] = function() {
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Python.valueToCode(this, 'IF' + n,
      Blockly.Python.ORDER_NONE) || 'False';
    branchCode = Blockly.Python.statementToCode(this, 'DO' + n);

    code += (n > 0 ? 'else ' : '') +
        'if ' + conditionCode + ':\n' + branchCode;

    n += 1;
  } while (this.getInput('IF' + n));

  if (this.getInput('ELSE')) {
    branchCode = Blockly.Python.statementToCode(this, 'ELSE');
    code += 'else: \n' + branchCode + '';
  }
  console.log(code)
  code = code.replaceAll("else if","elif")
  return code + '\n';
};
