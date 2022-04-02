'use strict';

//color = 60;

/*
  Blockly.Blocks['inout_input']={
    init: function() {
      this.setColour(60);
      this.appendValueInput("VAR")
          .appendField("")
          .setCheck(String);
      this.setOutput(true,null);
          //this.setTooltip(Blockly.Msg.INOUT_input_TOOLTIP);
    }
  };
*/

  Blockly.Blocks['inout_print'] = {
    init: function() {
      this.setColour(60);
          this.appendValueInput("VAR")
          .appendField("打印（自动换行）");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          //this.setTooltip(Blockly.Msg.BLOCKPY_PRINT_TOOLTIP);
    }
  };
  

  
  Blockly.Blocks['inout_print_inline'] = {
    init: function() {
      this.setColour(60);
          this.appendValueInput("VAR")
          .appendField("打印");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          //this.setTooltip(Blockly.Msg.TEXT_PRINT_INLINE_TOOLTIP);
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
          //this.setTooltip(Blockly.MIXLY_PYTHON_INOUT_PRINT_END_TOOLTIP);
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
    /*
     var thisBlock = this;
      this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('DIR');
        var TOOLTIPS = {
          'str': Blockly.MIXLY_MIXPY_INOUT_STR_INPUT_TOOLTIP,
          'int': Blockly.MIXLY_MIXPY_INOUT_INT_INPUT_TOOLTIP,
          'float': Blockly.MIXLY_MIXPY_INOUT_FLOAT_INPUT_TOOLTIP
        };
        return TOOLTIPS[mode];
      });
      */
    }
  };
  
  Blockly.Blocks['inout_print_many'] = {
    
    init: function() {
      this.setColour(60);
      
      this.itemCount_ = 2;
      this.updateShape_();
      this.setPreviousStatement(false);
      this.setNextStatement(false);
      this.setInputsInline(true);
      this.setMutator(new Blockly.Mutator(['inout_print_item']));
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      //this.setTooltip(Blockly.MIXLY_MIXPY_INOUT_PRINT_MANY_TOOLTIP);
    },
    
    mutationToDom: function() {
      var container = document.createElement('mutation');
      container.setAttribute('items', this.itemCount_);
      return container;
    },
  
    domToMutation: function(xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
      this.updateShape_();
    },
  
    decompose: function(workspace) {
      var containerBlock =
          Blockly.Block.obtain(workspace, 'inout_print_container');
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection;
      for (var i = 0; i < this.itemCount_; i++) {
        var itemBlock = Blockly.Block.obtain(workspace, 'inout_print_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);
        connection = itemBlock.nextConnection;
      }
      return containerBlock;
    },
  
    compose: function(containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      // Count number of inputs.
      var connections = [];
      var i = 0;
      while (itemBlock) {
        connections[i] = itemBlock.valueConnection_;
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
        i++;
      }
      this.itemCount_ = i;
      this.updateShape_();
      // Reconnect any child blocks.
      for (var i = 0; i < this.itemCount_; i++) {
        if (connections[i]) {
          this.getInput('ADD' + i).connection.connect(connections[i]);
        }
      }
    },
  
    saveConnections: function(containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      var i = 0;
      while (itemBlock) {
        var input = this.getInput('ADD' + i);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        i++;
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
    },
  
    updateShape_: function() {
      // Delete everything.
      if (this.getInput('EMPTY')) {
        this.removeInput('EMPTY');
      } else {
        var i = 0;
        while (this.getInput('ADD' + i)) {
          this.removeInput('ADD' + i);
          i++;
        }
      }
      // Rebuild block.
      if (this.itemCount_ == 0) {
        this.appendDummyInput('EMPTY')
            .appendField(Blockly.MIXLY_MIXPY_INOUT_PRINT_EMPTY);
      } else {
        for (var i = 0; i < this.itemCount_; i++) {
          var input = this.appendValueInput('ADD' + i);
          if (i == 0) {
            input.appendField(Blockly.blockpy_inout_print);
          }
        }
      }
    }
  };

  Blockly.Blocks['inout_print_container'] = {  
    init: function() {
      this.setColour(60);
      this.appendDummyInput()
          .appendField(Blockly.blockpy_inout_print);
      this.appendStatementInput('STACK');
      //this.setTooltip(Blockly.MIXLY_MIXPY_INOUT_PRINT_MANY_CONTAINER_TOOLTIP);
      this.contextMenu = false;
    }
  };
  
  Blockly.Blocks['inout_print_item'] = {
    init: function() {
      this.setColour(60);
      this.appendDummyInput()
          .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      //this.setTooltip(Blockly.MIXLY_MIXPY_INOUT_PRINT_MANY_ITEM_TOOLTIP);
      this.contextMenu = false;
    }
  };

