'use strict';

Blockly.Python["emulator_init"] = function () {
    Blockly.Python.definitions_['os_sys'] = 'import os, sys';
    Blockly.Python.definitions_['change'] = 'from fzq_scnu import change';
    var level = this.getFieldValue('DIR1');
    var code1 = 'fzq = change.Create(level="'+level+'")\n';
    var code2 = 'fzq.go()\n';
    var code = code1 + code2;
    return code;
};

Blockly.Python["emulator_camera"] = function () {
  Blockly.Python.definitions_['fzshijue1'] = 'from fzq_scnu import fzshijue1';
  var cam_name = Blockly.Python.valueToCode(this, 'cam_name',Blockly.Python.ORDER_ATOMIC);
  var cam_num = Blockly.Python.valueToCode(this, 'cam_num', Blockly.Python.ORDER_ATOMIC);
  var code = cam_name + ' = fzshijue1.Img()\n'+ cam_name +'.camera('+cam_num+')\n';
  return code;
};