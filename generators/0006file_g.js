'use strict';

Blockly.Python["open_file"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var filename = Blockly.Python.valueToCode(this, 'filename', Blockly.Python.ORDER_ATOMIC);
    var mode1 = this.getFieldValue('DIR');
    var code = f + "=file_operation.Common_file(" + filename + "," + mode1 + ",__file__)\n";
    return code;
};

Blockly.Python["close_file"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".close()\n";
    return code;
};

Blockly.Python["file_read"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".read_all()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["file_readline"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".read_a_line()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["file_readlines"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".read_random_line(" + num + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["file_GiveValue"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".tell()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["BackToFirst"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".seek()\n"
    return code;
};

Blockly.Python["file_write"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var message = Blockly.Python.valueToCode(this, 'message', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".write(" + message + ")\n"
    return code;
};

Blockly.Python["file_write2"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var lines = Blockly.Python.valueToCode(this, 'lines', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".write_lines(" + lines + ")\n";
    return code;
};

Blockly.Python["open_json"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var filename = Blockly.Python.valueToCode(this, 'filename', Blockly.Python.ORDER_ATOMIC);
    var mode1 = this.getFieldValue('DIR');
    var code = f + "=file_operation.Json(" + filename + "," + mode1 + ",__file__)\n";
    return code;
};

Blockly.Python["json_read"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".load()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["json_write"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var massage = Blockly.Python.valueToCode(this, 'massage', Blockly.Python.ORDER_ATOMIC);
    var code = f + ".dump(" + massage + ")\n";
    return code;
};



Blockly.Python["open_csv"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var filename = Blockly.Python.valueToCode(this, 'filename', Blockly.Python.ORDER_ATOMIC);
    var code = f + "=file_operation.CSV(" + filename + ",__file__)\n";
    return code;
};


Blockly.Python["print_head"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation ';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = f + '.print_head(' + num + ')\n';
    return code;
};

Blockly.Python["print_tail"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation ';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = f + '.print_tail(' + num + ')\n';
    return code;
};

Blockly.Python["print_describe"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation ';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + '.print_describe()\n';
    return code;
};

Blockly.Python["get_a_row"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation ';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = f + '.get_a_row(' + num + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["get_a_column"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation ';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var num = Blockly.Python.valueToCode(this, 'num', Blockly.Python.ORDER_ATOMIC);
    var code = f + '.get_a_column(' + num + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["dropna"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation ';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + '.dropna()\n';
    return code;
};

Blockly.Python["fillna"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var x = Blockly.Python.valueToCode(this, 'x', Blockly.Python.ORDER_ATOMIC);
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var code = f + '.fillna(' + x + ')\n';
    return code;
};



Blockly.Python["get_directory"] = function () {
    Blockly.Python.definitions_['File'] = 'from control import file_operation';
    var f = Blockly.Python.valueToCode(this, 'f', Blockly.Python.ORDER_ATOMIC);
    var row = Blockly.Python.valueToCode(this, 'row', Blockly.Python.ORDER_ATOMIC);
    var column = Blockly.Python.valueToCode(this, 'column', Blockly.Python.ORDER_ATOMIC);
    var code = f + '.get_directory(' + row + ',' + column + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["ozdlOz"]= function () {
  Blockly.Python.definitions_['control_file_operation']='from control import file_operation';
 var f=Blockly.Python.valueToCode(this,'f',Blockly.Python.ORDER_ATOMIC);
  var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
  var code=f+'=file_operation.Folder('+STR1+')'+'\n';
 return code;
};

Blockly.Python["OCsdBO"]= function () {
  Blockly.Python.definitions_['control_file_operation']='from control import file_operation';
 var f=Blockly.Python.valueToCode(this,'f',Blockly.Python.ORDER_ATOMIC);
  var code=f+'.get_root_path()'+'';
 return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["kraEwz"]= function () {
  Blockly.Python.definitions_['control_file_operation']='from control import file_operation';
 var f=Blockly.Python.valueToCode(this,'f',Blockly.Python.ORDER_ATOMIC);
  var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
  var code=f+'.create_folder('+STR1+')'+'';
 return [code, Blockly.Python.ORDER_ATOMIC];
};









Blockly.Python["sHLAPQ"]= function () {
  Blockly.Python.definitions_['control_file_operation']='from control import file_operation';
 var f=Blockly.Python.valueToCode(this,'f',Blockly.Python.ORDER_ATOMIC);
  var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
  var MODE1=this.getFieldValue('MODE1');
var code=f+'.get_folder_info('+STR1+', '+MODE1+')'+'';
 return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python["rDsNka"]= function () {
  Blockly.Python.definitions_['control_file_operation']='from control import file_operation';
 var f=Blockly.Python.valueToCode(this,'f',Blockly.Python.ORDER_ATOMIC);
  var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
  var STR2=Blockly.Python.valueToCode(this,'STR2',Blockly.Python.ORDER_ATOMIC);
  var MODE1=this.getFieldValue('MODE1');
var code=f+'.move_file('+STR1+', '+STR2+', '+MODE1+')'+'\n';
 return code;
};

Blockly.Python["_nvRBV"]= function () {
  Blockly.Python.definitions_['control_file_operation']='from control import file_operation';
 var f=Blockly.Python.valueToCode(this,'f',Blockly.Python.ORDER_ATOMIC);
  var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
  var STR2=Blockly.Python.valueToCode(this,'STR2',Blockly.Python.ORDER_ATOMIC);
  var code=f+'.rename('+STR1+', '+STR2+')'+'\n';
 return code;
};