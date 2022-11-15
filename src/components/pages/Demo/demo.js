import json from './mamagrapi.json';
import demoJson from './demo2.json';
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import axios from 'axios';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Demo() {
    const editorRef = useRef(null);
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const [dad, setDad] = useState({});
    //
    const [isOpenCheckbox, setIsOpenCheckbox] = useState(false);
    const [form] = Form.useForm();
    //
    const [content, setContent] = useState(
        `
        <p style="text-align: right;">Эрүүл мэндын сайдын 2019 оны 12 дугаар сарын 30-ны</p>
<p style="text-align: right;">өдрийн A/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
<p style="text-align: right;"><span style="font-size: 12pt;"><strong>Эрүүл мэндийн бүртгэлийн маягт ЭИМ-4.3<br /></strong></span></p>
<p style="text-align: center;"><span style="font-size: 12pt;"><strong>ГЭМТЛИЙН ЭМЧИЙН ҮЗЛЭГ</strong></span></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 33.3333%; text-align: center;"><strong>Биеийн ерөнхий байдал</strong></td>
<td style="width: 33.3333%; text-align: center;"><strong>Ухаан санаа</strong></td>
<td style="width: 33.3333%; text-align: center;"><strong>Арьс сальт</strong></td>
</tr>
<tr>
<td style="width: 33.3333%;">
<p>{{medium}}{{moreSerious}}</p>
<p>{{heavy}}{{veryHeavy}}</p>
</td>
<td style="width: 33.3333%;"></td>
<td style="width: 33.3333%;">&nbsp;</td>
</tr>
</tbody>
</table>
    `);

    const addVariables = (variable) => {
        console.log("======>", variable);
        // return demoJson[variable];
        return demoJson.filter((item) => item.key === variable);
    }

    const checkVariables = (section) => {
        let udd = section;
        let match = udd.match(/{{\s*[\w.]+\s*}}/g);
        if (match) {
            let vueTemp = match.map(function (x) {
                return x.match(/[\w.]+/)[0]; // temdegtiin 2 taliin haaltiig hasaj ogch bn.
            });
            vueTemp.map((v, index) => {
                // udd = udd.replace(match[index], addVariables(v));
                const data = addVariables(v);
                var string = "";
                if (data.length > 0) {
                    data.map((item) => {
                        if (item.value === true) {
                            string += `
                        <input type="${item.type}" id="${item.key}" checked/>
                        <label for="${item.key}">${item.label}</label>
                        `
                        } else {
                            string += `
                        <input type="${item.type}" id="${item.key}"/>
                        <label for="${item.key}">${item.label}</label>
                        `
                        }

                    })
                }
                udd = udd.replace(match[index], string);
                setDad(udd);
            })
        }
        console.log(dad);
    }

    const log = () => {
        checkVariables(editorRef.current.getContent());
        console.log("=======>", editorRef.current.getContent());
    }

    const radioClick = () => {
        editorRef.current.insertContent(
            `
        <input type="radio" id="html" name="fav_language" value="html" checked>
        <label for="html">HTML</label>
        `
        );
    }

    const checkBox = () => {
        setIsOpenCheckbox(true);
        //         editorRef.current.insertContent(`
        //         <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        //   <label for="vehicle1">Дунд</label><br>`);
    }

    const checkboxAdd = (value) => {
        setIsOpenCheckbox(false);
        editorRef.current.insertContent
            (`
                <input type="checkbox" id="${value.keyWord}" name="${value.keyWord}">
                <label for="${value.keyWord}">${value.labelWord}</label><br>`
            );
    }

    return (
        <div className='page'>
            <div>
                <Button onClick={radioClick}>radio</Button>
                <Button onClick={checkBox}>check</Button>
            </div>
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
                    toolbar: 'undo redo | link image | code | formatselect | fontsizeselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    images_upload_handler: async (blobInfo, success, failure) => {
                        let data = new FormData();
                        data.append('file', blobInfo.blob());
                        config.headers['Authorization'] = `Bearer ${token}`;
                        config.headers['x-api-key'] = API_KEY;
                        const response = await axios.post(DEV_URL + "global-files/fileUpload", data, config);
                        console.log(response);
                        if (response.status === 201) {
                            success(DEV_URL + "global-files/" + response.data.response.id);
                        }
                    },
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:10px }'
                }}
            />
            <Button className='bg-sky-700' onClick={log}>Log editor content</Button>
            <Modal
                open={isOpenCheckbox}
                onCancel={() => { setIsOpenCheckbox(false) }}
                onOk={() => form.validateFields().then((value) => checkboxAdd(value))}
            >
                <Form form={form}>
                    <Form.Item
                        name="keyWord"
                        label="Tulhuur ug"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="labelWord"
                        label="Бичвэр"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default Demo;