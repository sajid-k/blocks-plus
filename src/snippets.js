{
  <InspectorControls style={ { marginBottom: '40px' } }>
    <PanelBody title={ __( 'Font Color Settings', 'blocks-plus' ) }>
      <p><strong>Block Background Color</strong></p>
      <ColorPalette
        onChange={onChangeBackgroundColor} // onChange event callback
      />
      <p><strong>Title Color</strong></p>
      <ColorPalette
        onChange={onChangeTitleTextColor} // onChange event callback
      />
      <p><strong>Content Color</strong></p>
      <ColorPalette // Element Tag for Gutenberg standard colour selector
        onChange={onChangeContentTextColor} // onChange event callback
      />
    </PanelBody>
  </InspectorControls>
}
