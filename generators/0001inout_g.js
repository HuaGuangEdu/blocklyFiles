'use strict';


Blockly.Python["inout_print"] = function() {
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "print("+str+",flush=True)\n";
  return code;
};


Blockly.Python["inout_print_inline"] = function() {
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "print("+str+',end ="",flush=True)\n';
  return code;
};

Blockly.Python["inout_print_end"] = function() {
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var end = Blockly.Python.valueToCode(this, 'END', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "print("+str+',end =' + end + ',flush=True)\n';
  return code;
};

Blockly.Python["inout_type_input"] = function() {
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var type = this.getFieldValue('DIR');
  var code= type + "(input(" + str + "))";
  return [code, Blockly.Python.ORDER_ATOMIC];
};


