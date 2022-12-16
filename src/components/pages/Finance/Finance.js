import UTable from '../../UTable';
function Finance() {
    const column = [
        {
            index: "m_id",
            label: "барааны ДДД",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "b_id",
            label: "байгууллага ID",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "barcode",
            label: "барааны баркод",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "m_name",
            label: "барааны нэр",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "e_name",
            label: "гадаад нэр захиалгад хэрэглэх",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "mark",
            label: "марк",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "seri",
            label: "сери эмийн санд хэрэглэх",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "xn",
            label: "хэмжих нэгж",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "dotcode",
            label: "дотоод код",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "shortname",
            label: "богино нэр ПОС-н талонд хэрэглэх",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "atype_id",
            label: "барааны төрөл",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "agroup_id",
            label: "барааны бүлэг",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "m_brand",
            label: "брэнд",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "m_infos",
            label: "нэмэлт тайлбар техникийн үзүүлэлт",
            isView: true,
            input: "textarea",
            col: 24,
        },
        {
            index: "salepercent",
            label: "хөнгөлөлтийн хувь",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "mincount",
            label: "Нөөцийн доод хэмжээ",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "nodiscount",
            label: "хөнгөлөлт үзүүлэх боломжгүй (1) эсэх",
            isView: true,
            input: "switch",
            col: 24,
        },
        {
            index: "clientname",
            label: "нийлүүлэгчийн нэр",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "m_cost",
            label: "нэгжийн өртөг дундаж",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "price_low",
            label: "үнэ",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "price_big",
            label: "бөөний үнэ",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "price_lowV",
            label: "үнэ валютаар",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "price_bigV",
            label: "бөөний үнэ валютаар",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "sale_priority",
            label: "борлуулалтын зэрэг",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "m_mass",
            label: "барааны жин",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "pcount",
            label: "бөөний тоо",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "pcount_n",
            label: "багцын тоо",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "whcode",
            label: "байршил",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "regdate",
            label: "бүртгэсэн огноо",
            isView: true,
            input: "date",
            col: 24,
        },
        {
            index: "enddate",
            label: "дуусах хугацаа",
            isView: true,
            input: "date",
            col: 24,
        },
        {
            index: "ratecode",
            label: "ашиглахгүй",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "checked",
            label: "тэмдэглэгээ",
            isView: true,
            input: "switch",
            col: 24,
        },
        {
            index: "d_code",
            label: "код",
            isView: true,
            input: "input",
            col: 24,
        },
        {
            index: "clid",
            label: "нийлүүлэгчийн ДДД",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "m_id2",
            label: "өмнөх бүртгэлийн барааны ДДД",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "saletype",
            label: "борлуулалтын ангилал",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "ct_per",
            label: "НХАТ-н хувь",
            isView: true,
            input: "inputNumber",
            col: 24,
        },
        {
            index: "adate",
            label: "огноо",
            isView: true,
            input: "date",
            col: 24,
        },
        {
            index: "updatePrice",
            label: "шинэслэсэн огноо",
            isView: true,
            input: "date",
            col: 24,
        },
        {
            index: "t_sent",
            label: "илгээсэн эсэх",
            isView: true,
            input: "switch",
            col: 24,
        },
        {
            index: "t_get",
            label: "татсан эсэх",
            isView: true,
            input: "switch",
            col: 24,
        },
        // {
        //     index: "taxtype",
        //     label: "татварын төрөл",
        //     isView: true,
        //     input: "switch",
        //     col: 24,
        // },
    ];
    return (
        <>
            <UTable
                title={"Finance"}
                url={"finance/material"}
                column={column}
                width="30%"
                isCreate={true}
                isRead={true}
                isUpdate={true}
                isDelete={true}
            />
        </>
    )
}
export default Finance;