"use strict";

var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;
registerBlockType('blocksplus/cta-block', {
  title: 'Call to Action',
  description: 'Block to generate a custom Call to Action',
  icon: 'align-center',
  category: 'layout',
  // Custom attributes
  attributes: {},
  edit: function edit() {},
  save: function save() {}
});
//# sourceMappingURL=blocks-plus.js.map
