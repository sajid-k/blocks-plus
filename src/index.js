const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar, InspectorControls, ColorPalette } = wp.editor;
const { PanelBody } = wp.components;

registerBlockType( 'blocks-plus/cta-block', {
	title: 'Call to Action',
  description: 'This is some description',
	icon: 'align-center',
	category: 'layout',
	attributes: {
    title: {
			type: 'string',
			source: 'text',
			selector: 'h2,h3,h4,h5,h6'
		},
    titleStyle: {
			type: 'object',
			default: {
				color: 'black',
				textAlign: 'left'
			}
		},
    // content: {
		// 	type: 'array',
		// 	source: 'children',
		// 	selector: 'p',
		// },
    content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
    contentStyle: {
			type: 'object',
			default: {
				color: 'black',
				textAlign: 'left'
			}
		}
	},
	edit: ( props ) => {

    const { attributes: { title, content, titleStyle, contentStyle }, setAttributes, className } = props;

    const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
    const onChangeTitle = ( newTitle ) => {
			setAttributes( { title: newTitle } );
		};

    const onChangeAlignment = ( newAlignment ) => {
			let alignmentValue = ( newAlignment === undefined ) ? 'none' : newAlignment;
			setAttributes( {
        titleStyle: {
					color: titleStyle.color,
					textAlign: alignmentValue
				},
        contentStyle: {
					color: contentStyle.color,
					textAlign: alignmentValue
				}
			} );
		};

    const onChangeContentColor = ( newColor ) => {
			let newColorValue = ( newColor === undefined ) ? 'none' : newColor;
			setAttributes( {
				contentStyle: {
					color: newColorValue,
					textAlign: contentStyle.textAlign
				}
			} );
		};

    const onChangeTitleColor = ( newColor ) => {
			let newColorValue = ( newColor === undefined ) ? 'none' : newColor;
			setAttributes( {
				titleStyle: {
					color: newColorValue,
					textAlign: titleStyle.textAlign
				}
			} );
		};

		return (
			<div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ contentStyle.textAlign }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
				}
        {
					<InspectorControls style={ { marginBottom: '40px' } }>
            <PanelBody title={ 'Font Color Settings', 'blocks-plus' }>
              <p><strong>Select a Title Color</strong></p>
              <ColorPalette
                onChange={onChangeTitleColor} // onChange event callback
              />
              <p><strong>Select a Content Color</strong></p>
              <ColorPalette // Element Tag for Gutenberg standard colour selector
                onChange={onChangeContentColor} // onChange event callback
              />
            </PanelBody>
					</InspectorControls>
				}
        <RichText
					tagName="h2"
					style={ titleStyle }
					className={ className }
					onChange={ onChangeTitle }
					value={ title }
          placeholder="Title..."
				/>
        <RichText
					tagName="p"
					style={ contentStyle }
					className={ className }
					onChange={ onChangeContent }
					value={ content }
          placeholder="Content..."
				/>
			</div>
		);
	},
	save: ( props ) => {

    return (
      <div className={props.className}>
        <RichText.Content style={ props.attributes.titleStyle } tagName="h2" value={ props.attributes.title } />
        <RichText.Content style={ props.attributes.contentStyle } tagName="p" value={ props.attributes.content } />
      </div>
    );

  },
} );
