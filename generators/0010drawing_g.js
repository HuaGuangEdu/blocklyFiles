
'use strict';

Blockly.Python["MUxSVu"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code='turtle.forward('+NUM1+')'+'\n';
 return code;
};

Blockly.Python["HhbRej"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code='turtle.backward('+NUM1+')'+'\n';
 return code;
};

Blockly.Python["fkFEQy"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code='turtle.right('+NUM1+')'+'\n';
 return code;
};

Blockly.Python["QSiFTf"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code='turtle.left('+NUM1+')'+'\n';
 return code;
};

Blockly.Python["QmjVrR"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var NUM2=Blockly.Python.valueToCode(this,'NUM2',Blockly.Python.ORDER_ATOMIC);
  var code='turtle.goto('+NUM1+','+NUM2+')'+'\n';
 return code;
};

Blockly.Python["IBbgKe"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var code='turtle.up()'+'\n';
 return code;
};

Blockly.Python["haRyhR"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var code='turtle.down()'+'\n';
 return code;
};

Blockly.Python["fYdSWn"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code='turtle.pensize('+NUM1+')'+'\n';
 return code;
};

Blockly.Python["PTQFyJ"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var MODE1=this.getFieldValue('MODE1');
var code='turtle.pencolor('+MODE1+')'+'\n';
 return code;
};

Blockly.Python["CjONFi"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var code='turtle.clear()'+'\n';
 return code;
};

Blockly.Python["mKMKUW"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code='turtle.circle('+NUM1+')'+'\n';
 return code;
};

Blockly.Python["GCqkbF"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var code='turtle.done()'+'\n';
 return code;
};

Blockly.Python["KwBunK"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var NUM2=Blockly.Python.valueToCode(this,'NUM2',Blockly.Python.ORDER_ATOMIC);
  var code='turtle.setup('+NUM1+','+NUM2+')'+'\n';
 return code;
};

Blockly.Python["aEZAqL"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
  var MODE1=this.getFieldValue('MODE1');
var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var MODE2=this.getFieldValue('MODE2');
var code='turtle.write('+STR1+',font=('+MODE1+','+NUM1+','+MODE2+'))'+'\n';
 return code;
};

Blockly.Python["EXEC"]= function () {
  Blockly.Python.definitions_['turtle']='import turtle';
 var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
var code='exec('+STR1+')'+'\n';
 return code;
};

Blockly.Python["XAnNIW"]= function () {
  Blockly.Python.definitions_['control_unique']='from control import unique';
 var code='unique.generateCloud()'+'\n';
 return code;
};
