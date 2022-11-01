import json from './mamagrapi.json';
import demoJson from './demo.json';
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState, version } from 'react';
import { Button } from 'antd';
function Demo() {
    const editorRef = useRef(null);
    const [dad, setDad] = useState({});

    const [content, setContent] = useState(
        `
        <p style="text-align: right;">Эрүүл мэндын сайдын 2019 оны 12 дугаар сарын 30-ны</p>
<p style="text-align: right;">өдрийн A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
<p style="text-align: right;"><span style="font-size: 12pt;"><strong>Эрүүл мэндийн бүртгэлийн маягт ЭИМ-4.3</strong></span></p>
<p style="text-align: center;"><span style="font-size: 12pt;"><strong>Маммографи шинэжилгээний маягт</strong></span></p>
<p style="text-align: right;"><span style="font-size: 10pt;">Мэс заслын эмч/Рентген оношлогооны эмч/</span></p>
<p style="text-align: left;"><strong>1.Эмнэлэгийн нэр, код</strong></p>
<table style="border-collapse: collapse; width: 33.9175%;" border="1">
<tbody>
<tr>
<td style="width: 100%;">{{hosipitalID}}</td>
</tr>
</tbody>
</table>
<table style="height: 18px; width: 44%; border-collapse: collapse; float: right;" border="1">
<tbody>
<tr style="height: 18px;">
<td style="width: 16.5625%; height: 18px;"><strong>2.РД</strong></td>
<td style="width: 69.375%; height: 18px;">{{regno}}</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%; height: 10px;" border="1">
<tbody>
<tr style="height: 10px;">
<td style="width: 12.5%; height: 10px;"><strong>3.Эцэг, эхийн нэр:</strong>{{lastname}}</td>
<td style="width: 12.5%; height: 10px;"><strong>4. Өөрийн нэр:</strong>{{firstname}}</td>
</tr>
</tbody>
</table>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 40.3733%;"><strong>5.Төрсөн</strong>{{year}} <strong>он</strong> {{month}} <strong>Сар</strong> {{day}} <em>өдөр</em></td>
<td style="width: 26.2933%;">&nbsp;</td>
<td style="width: 33.3333%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 40.3733%;">&nbsp;</td>
<td style="width: 26.2933%;">&nbsp;</td>
<td style="width: 33.3333%;">&nbsp;</td>
</tr>
</tbody>
</table>
    `);

    const addVariables = (variable) => {
        return demoJson[variable]
    }

    const checkVariables = (section) => {
        let udd = section;
        let match = udd.match(/{{\s*[\w.]+\s*}}/g);
        if (match) {
            let vueTemp = match.map(function (x) {
                return x.match(/[\w.]+/)[0]; // temdegtiin 2 taliin haaltiig hasaj ogch bn.
            });
            vueTemp.map((v, index) => {
                udd = udd.replace(match[index], addVariables(v));
                setDad(udd);
            })
        }
        console.log("=====>", udd);
    }

    const log = () => {
        checkVariables(editorRef.current.getContent());
        console.log(editorRef.current.getContent());
    }

    return (
        <div className='page'>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={content}
                init={{
                    height: 500,
                    menubar: true,
                    table_tab_navigation: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | fontsizeselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:10px }'
                }}
            />
            <Button className='bg-sky-700' onClick={log}>Log editor content</Button>
            {
                JSON.stringify(dad)
            }
        </div>
    )
}
export default Demo;