'use strict';



Blockly.Blocks['time_sleep'] = {
    init: function () {
        this.appendValueInput("DELAY_TIME")
            .appendField("延时");
        this.appendDummyInput()
            .appendField("秒");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['threading_create'] = {
    init: function () {
        this.appendValueInput('hs')
            .appendField('将函数')
        this.appendDummyInput()
            .appendField("设置为一个线程");
        this.setInputsInline(true);
        this.setColour(120);
        this.setOutput(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['threading_start'] = {
    init: function () {
        this.appendValueInput("thread")
            .appendField("线程");
        this.appendDummyInput()
            .appendField("启动");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['threading_join'] = {
    init: function () {
        this.appendValueInput("thread_")
            .appendField("线程");
        this.appendValueInput("thread_time")
            .appendField("以");
        this.appendDummyInput()
            .appendField("时间阻塞");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['keyboard'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("启用键盘控制")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['anjian'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("按键检测")
        this.appendValueInput("on_press")
            .appendField("监测按下按键函数")
        this.appendValueInput("on_release")
            .appendField("监测松开按键函数")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_value'] = {
    init: function () {
        this.appendValueInput("key")
        this.appendDummyInput()
            .appendField("的输入")
        this.setOutput(true);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_repeat_ext'] = {
    init: function () {
        this.setColour(120);
        this.appendDummyInput("")
            .appendField("重复")
        this.appendValueInput('TIMES')
        this.appendDummyInput("")
            .appendField("次")
        this.appendStatementInput('DO')
            .appendField('执行');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['controls_whileUntil'] = {
    init: function () {
        this.setColour(120);
        var mode =
            [['当条件满足时重复', ''], ["重复直到条件满足", 'not']];
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(mode), 'DIR')
        this.appendValueInput('VALUE')

        this.appendStatementInput('DO')
            .appendField('执行');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['controls_flow_statements'] = {
    init: function () {
        this.setColour(120);
        var mode =
            [['跳出循环', 'break'], ["继续下一轮循环", 'continue']];
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(mode), 'DIR')
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};





