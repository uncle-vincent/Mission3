$(
    function() {
        Simditor.locale = 'zh-CN';
        var toolBarOptions = [
            'title',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontScale',
            'color',
            '|',
            'ol',
            'ul',
            'blockquote',
            'code',
            'table',
            '|',
            'link',
            'image',
            'hr',
            '|',
            'indent',
            'outdent',
            'alignment',
        ];
        var editor = new Simditor({
            textarea: $("#id_content"),
            placeholder: "在此编辑你的文章",
            pasteImage: true,
            toolbar: toolBarOptions,
            toolbarFloat: true,
            upload: {
                url: '/admin/media/uploads/files',
                fileKey: 'upload_file',
                connectionCount: 3,
                leaveConfirm: '正在上传文件'
            },
            //optional options
            }
        )
    }
)

