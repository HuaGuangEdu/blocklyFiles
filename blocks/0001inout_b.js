'use strict';



Blockly.Blocks['inout_print'] = {
  init: function() {
    this.setColour(60);
        this.appendValueInput("VAR")
        .appendField("打印（自动换行）");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
  }
};
  

  
  Blockly.Blocks['inout_print_inline'] = {
    init: function() {
      this.setColour(60);
          this.appendValueInput("VAR")
          .appendField("打印");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
    }
  };
  
  Blockly.Blocks['inout_print_end'] = {
    init: function() {
      this.setColour(60);
          this.appendValueInput("VAR")
              .appendField("打印");
          this.appendValueInput("END")
              .appendField("结尾于");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setInputsInline(true);
    }
  };
  
  Blockly.Blocks['inout_type_input'] = {
    init: function() {
      
    var input_type =
          [["字符串", 'str'],["整数", 'int'],["小数", 'float']];
      
      this.setColour(60);
      this.appendDummyInput("")
          .appendField("获取")
          .appendField(new Blockly.FieldDropdown(input_type), 'DIR')
      this.appendValueInput("VAR")
          .appendField("输入")
          .setCheck("String");    
      this.setInputsInline(true);
      this.setOutput(true,null);
    }
  };


  
