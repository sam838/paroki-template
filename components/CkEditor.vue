<template>
  <div>
    <div :id="toolBarId" />
    <div :id="editorId" class="ckeditor-content" />
  </div>
</template>
<script>
let DecoupledEditor
if (process.browser) {
  DecoupledEditor = require('@ckeditor/ckeditor5-build-decoupled-document')
}
export default {
  props: {
    toolBarId: {
      type: String,
      default () {
        return 'toolbar-container'
      }
    },
    editorId: {
      type: String,
      default () {
        return 'editor'
      }
    },
    content: {
      type: String,
      default () {
        return ''
      }
    },
    fieldName: {
      type: String,
      default () {
        return 'editor'
      }
    }
  },
  mounted () {
    DecoupledEditor
      .create(document.querySelector('#' + this.editorId), {
        removePlugins: [
          'MediaEmbed',
          'FontFamily',
          'FontBackgroundColor'
          // 'EasyImage',
          // 'Image',
          // 'ImageCaption',
          // 'ImageStyle',
          // 'ImageTextAlternative',
          // 'ImageToolbar',
          // 'ImageUpload',
          // 'AutoImage'
        ]
      })
      .then((editor) => {
        const toolbarContainer = document.querySelector('#' + this.toolBarId)
        toolbarContainer.appendChild(editor.ui.view.toolbar.element)
        editor.setData(this.content)
        this.saveEditor(editor)
      })
      .catch((error) => {
      // eslint-disable-next-line no-console
        console.error(error)
      })
  },
  methods: {
    saveEditor (editor) {
      this.$emit('getEditor', editor, this.fieldName)
    }
  }
}
</script>
