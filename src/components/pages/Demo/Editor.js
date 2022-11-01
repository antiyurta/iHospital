import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, Patch, Post } from "../../comman";
import { Editor } from '@tinymce/tinymce-react';
import { Button, Descriptions, Input, PageHeader } from "antd";

function Editors() {
    const IncomeReportId = useLocation().state?.reportId;
    const navigate = useNavigate();
    const token = useSelector(selectCurrentToken);
    const editorRef = useRef(null);
    const config = {
        headers: {},
        params: {}
    }

    const [content, setContent] = useState([]);
    const [appId, setAppId] = useState(0);
    const [depId, setDepId] = useState(0);
    const [name, setName] = useState('');


    const getReport = async () => {
        const response = await Get('report/' + IncomeReportId, token, config);
        setAppId(response.appId);
        setDepId(response.depId);
        setName(response.name);
        setContent(response.description);
    }
    const save = async () => {
        const data = editorRef.current.getContent();
        const response = await Patch('report/' + IncomeReportId, token, config, {
            name: name,
            appId: appId,
            depId: depId,
            description: data,
        });
    }

    const changeName = (value) => {
        setName(value);
    }

    useEffect(() => {
        getReport();
    }, [IncomeReportId])
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => navigate('/reports')}
                title="Маягтууд"
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Нэр"><Input value={name} onChange={(e) => changeName(e.target.value)} /></Descriptions.Item>
                </Descriptions>
            </PageHeader>
            <div className='page'>
                {
                    <p>Нэр: <Input value={name} onChange={(e) => changeName(e.target.value)} /></p>
                }
                <Button className='bg-sky-700' onClick={save}>Хадгалах</Button>
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
            </div>
        </>
    );
}
export default Editors;