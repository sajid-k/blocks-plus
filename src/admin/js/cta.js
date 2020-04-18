const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'blocks-plus/cta-block', {
  title: 'Call to Action',
  description: 'Block to generate a custom Call to Action',
  icon: 'align-center',
  category: 'layout',

  // Custom attributes
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    }
  },

  // edit( { className, attributes, setAttributes } ) {
  //
  //   // const {
  //   //   title,
  //   //   content
  //   // } = attributes;
  //
  //   // function updateTitle(event) {
  //   //
  //   // }
  //
  //   return (
  //     // <div class="bp-cta-container">
  //       <RichText
  //         tagName= "h2"
  //         className={ className }
  //         value={ attributes.title }
  //         formattingControls={ [ 'bold', 'italic' ] }
  //         //key="editable"
  //         placeholder={ __( 'Title...' ) }
  //         onChange={ ( title ) => setAttributes( { title } ) }
  //       />
  //     // </div>
  //   );
  // },
  //
  // save( { attributes } ) {
  //   return <RichText.Content tagName="h2" value={ attributes.title } />; // Saves <h2>Content added in the editor...</h2> to the database for frontend display
  // }

  edit: ( props ) => {
      console.log( props );
      const { attributes: { content }, setAttributes, className } = props;
      const onChangeContent = ( newContent ) => {
         setAttributes( { content: newContent } );
      };
      return (
         <RichText
            tagName="p"
            className={ className }
            onChange={ onChangeContent }
            value={ content }
         />
      );
   },
   save: ( props ) => {
      return <RichText.Content tagName="p" value={ props.attributes.content } />;
   },
} )
