'use strict';
goog.provide('Blockly.Blocks.ottorobot');
goog.require('Blockly.Blocks');
Blockly.Blocks.ottorobot.HUE = 0; //红色
Blockly.Blocks.ottorobot.HUE0 = 0; //红色
Blockly.Blocks.ottorobot.HUE1 = 60; //黄色
Blockly.Blocks.ottorobot.HUE2 = 120; //绿色
Blockly.Blocks.ottorobot.HUE3 = 180; //青色
Blockly.Blocks.ottorobot.HUE4 = 240; //蓝色
Blockly.Blocks.ottorobot.HUE5 = 300; //紫色


Blockly.Blocks.OTTO_include = {
  init: function() {
     this.setColour(Blockly.Blocks.ottorobot.HUE3);
     this.appendDummyInput("")
        .appendField("#include <")
        .appendField(new Blockly.FieldTextInput('Otto'), 'INCLUDE')
        .appendField(".h>");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.OTTO_define = {
  init: function() {
         this.setColour(Blockly.Blocks.ottorobot.HUE3);
         this.appendDummyInput("")
              .appendField(new Blockly.FieldTextInput('#define'), 'TYPE')
              .appendField(" ")
              .appendField(new Blockly.FieldTextInput('PIN_YL 2'), 'NAME')
         this.setPreviousStatement(true);
         this.setNextStatement(true);
  }
};
Blockly.Blocks.OTTO_declare = {
  init: function() {
        this.setColour(Blockly.Blocks.ottorobot.HUE3);
        this.appendDummyInput("")
             .appendField(new Blockly.FieldTextInput('Otto'), 'TYPE')
             .appendField(" ")
             .appendField(new Blockly.FieldTextInput('Otto'), 'NAME')
             .appendField(";");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
  }
};
Blockly.Blocks.OTTO_home = {
  init: function() {
        this.setColour(Blockly.Blocks.ottorobot.HUE3);
        this.appendDummyInput("")
             .appendField(new Blockly.FieldTextInput('Otto'), 'TYPE')
             .appendField(".")
             .appendField(new Blockly.FieldTextInput('home()'), 'NAME')
             .appendField(";");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
  }
};

Blockly.Blocks.OTTO_init_lcs = {
  init: function() {
    this.setColour(Blockly.Blocks.ottorobot.HUE3);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown([["True", "true"],["False", "false"]]), "STAT");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.OTTO_init = {
  init: function() {
    this.setColour(Blockly.Blocks.ottorobot.HUE3);
    this.appendDummyInput("").appendField("OTTO init");
    this.appendValueInput("YL", Number).setCheck(Number).appendField("PIN YL");
    this.appendValueInput("YR", Number).setCheck(Number).appendField("PIN YR");
    this.appendValueInput("RL", Number).setCheck(Number).appendField("PIN RL");
    this.appendValueInput("RR", Number).setCheck(Number).appendField("PIN RR");
    this.appendValueInput("Load_Calibration", Number).appendField("Load Calibration");
//    this.appendDummyInput("").appendField("Load Calibration").appendField();
    this.appendValueInput("NoiseSensor", Number).setCheck(Number).appendField("PIN NoiseSensor");
    this.appendValueInput("Buzzer", Number).setCheck(Number).appendField("PIN Buzzer");
    this.appendValueInput("USTrigger", Number).setCheck(Number).appendField("PIN Trigger");
    this.appendValueInput("USEcho", Number).setCheck(Number).appendField("PIN Echo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
  }
};
Blockly.Blocks.OTTO_sing_sound = {
  init: function() {
    this.setColour(Blockly.Blocks.ottorobot.HUE3);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown([["S_surprise","S_surprise"],
        ["S_OhOoh","S_OhOoh"],
        ["S_OhOoh2","S_OhOoh2"],
        ["S_cuddly","S_cuddly"],
        ["S_sleeping","S_sleeping"],
        ["S_happy","S_happy"],
        ["S_superHappy","S_superHappy"],
        ["S_happy_short","S_happy_short"],
        ["S_sad","S_sad"],
        ["S_confused","S_confused"],
        ["S_fart1","S_fart1"],
        ["S_fart2","S_fart2"],
        ["S_fart3","S_fart3"],
        ["S_mode1","S_mode1"],
        ["S_mode2","S_mode2"],
        ["S_mode3","S_mode3"],
        ["S_connection","S_connection"],
        ["S_disconnection","S_disconnection"],
        ["S_buttonPushed","S_buttonPushed"]]), "STAT");
    this.setOutput(true);
  }
};


Blockly.Blocks.OTTO_sing = {
  init: function() {
     this.setColour(Blockly.Blocks.ottorobot.HUE3);
     this.appendValueInput("SOUND").appendField("Otto.sing(");
     this.appendDummyInput("").appendField(");");
     this.setInputsInline(true);
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
  }
};

  Blockly.Blocks.OTTO_playGesture_emotion= {
  init: function() {
    this.setColour(Blockly.Blocks.ottorobot.HUE3);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown([["OttoSuperHappy","OttoSuperHappy"],
        ["OttoSad","OttoSad"],
        ["OttoSleeping","OttoSleeping"],
        ["OttoFart","OttoFart"],
        ["OttoConfused","OttoConfused"],
        ["OttoFretful","OttoFretful"],
        ["OttoLove","OttoLove"],
        ["OttoAngry","OttoAngry"],
        ["OttoMagic","OttoMagic"],
        ["OttoWave","OttoWave"],
        ["OttoVictory","OttoVictory"],
        ["OttoFail","OttoFail"]]), "STAT");
    this.setOutput(true);
  }
};

Blockly.Blocks.OTTO_playGesture = {
  init: function() {
    this.setColour(Blockly.Blocks.ottorobot.HUE3);
    this.appendValueInput("emotion").appendField("Otto.playGesture(");
    this.appendDummyInput("").appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};