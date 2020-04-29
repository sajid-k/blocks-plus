const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  ColorPalette,
  PanelColorSettings,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const { PanelBody, Button } = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'blocks-plus/cta-block', {
	title: 'Call to Action',
  description: 'Block to generate a custom Call to Action',
	icon: 'align-center',
	category: 'blocks-plus-category',
	attributes: {
    title: {
			type: 'string',
			source: 'text',
			selector: 'h2'
		},
    content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
    alignment: {
      type: 'string',
    },
    backgroundImage: {
      type: 'string',
      default: null
    },
    backgroundColor: {
      type: 'string',
    },
    id: {
      type: 'number',
    },
    alt: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'alt',
      default: '',
    },
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src',

    }
	},
	edit: ( props ) => {

    const { attributes: { title, content, backgroundImage, alignment, backgroundColor }, setAttributes, className } = props;

    const onChangeContent = ( content ) => {
			setAttributes( { content } );
		};

    const onChangeTitle = ( title ) => {
			setAttributes( { title } );
		};

    const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'image-selector-example' ) }</p>;

    const onSelectImage = ( newImage ) => {
      // console.log(newImage);
			setAttributes( { backgroundImage: newImage.sizes.full.url } );
		};

    const onChangeAlignment = ( alignment ) => {
			setAttributes( { alignment } );
		};

    const onChangeBackgroundColor = ( backgroundColor ) => {
			setAttributes( { backgroundColor } );
		};

		return (
      <div className={ className } style={ {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: backgroundColor
      } }>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
				}
        {
					<InspectorControls style={ { marginBottom: '40px' } }>
            <PanelColorSettings
              title={ __( 'Color Settings', 'blocks-plus' ) }
              colorSettings={[
                {
                  value: backgroundColor,
                  onChange: onChangeBackgroundColor,
                  label: __( 'Block Background Color', 'blocks-plus' )
                }
              ]}
            />
            <PanelBody
              title={ __( 'Background Image Settings', 'blocks-plus' ) }>
              <MediaUploadCheck fallback={ instructions }>
                <MediaUpload
                  title={ __( 'Background image', 'blocks-plus' ) }
                  onSelect={ onSelectImage }
                  allowedTypes={ ALLOWED_MEDIA_TYPES }
                  value={ backgroundImage }
                  render={ ( { open } ) => (
          					<Button
                      onClick={ open }
                      className="button"
                    >
          						{ __( 'Open Media Library', 'blocks-plus' ) }
          					</Button>
          				) }
                />
              </MediaUploadCheck>
            </PanelBody>
					</InspectorControls>
				}
        <RichText
					tagName="h2"
					style={ { textAlign: alignment } }
					className={ className }
					onChange={ onChangeTitle }
					value={ title }
          placeholder={ __( 'Title...', 'blocks-plus' ) }
				/>
        <RichText
					tagName="p"
					style={ { textAlign: alignment } }
					className={ className }
					onChange={ onChangeContent }
					value={ content }
          placeholder={ __( 'Content...', 'blocks-plus' ) }
				/>
			</div>
		);
	},
	save: ( props ) => {

    return (
      <div className={ props.className } style={ {
        backgroundImage: `url(${props.attributes.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: props.attributes.backgroundColor
      } }>
        <RichText.Content style={ { textAlign: props.attributes.alignment } } tagName="h2" value={ props.attributes.title } />
        <RichText.Content style={ { textAlign: props.attributes.alignment } } tagName="p" value={ props.attributes.content } />
      </div>
    );

  },
} );
