import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
const { TextArea } = Input;
function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th colSpan={4}>Хоол боловсруулалх эрхтэн тогтолцоо</th>
                  </tr>
                  <tr>
                     <th>Харж ажиглах:</th>
                     <th>Өнгөц тэмтрэлтээр:</th>
                     <th>Тогшилтоор</th>
                     <th>Чагналтаар</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Хэл өнгөртэй эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'see', 'colorful']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Арьс, салст-чийлэг:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'see', 'skin']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           Өнгө
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'see', 'color']}
                           >
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                        </p>
                        <p>Хэвлийн - хэм</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'see', 'abdomen']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Жигд
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Жигд бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           Хэлбэр
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'see', 'shape']}
                           >
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                        </p>
                     </th>
                     <th>
                        <p>Хэвлий эмзэглэлтэй эсэх</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'touch', 'abdomen']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'unInjury'}
                              >
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'injury'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Булчингийн чангарал байгаа эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'touch', 'muscle']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Хэвлийн хэнгэрэгэн чимээ:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'knock', 'wave']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'increased'}>Ихэссэн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Ихэссэн хэсэгт тогшилтын дуу:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'knock', 'partWave']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'faded'}>
                                 Бүдгэрсэн
                              </Checkbox>
                              <Checkbox className="w-full" value={'determined'}>
                                 Тодорсон
                              </Checkbox>
                              <Checkbox value={'deaf'}>Дүлий болсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Гэдэсний гүрвэлзэх хөдөлгөөн:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'knock', 'overheard']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'increased'}>Ихэссэн</Checkbox>
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal1'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'deaf'}>Дүлий</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Гүнзгий тэмтрэлтээр:</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Тахир гэдэс - байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'crookedStomach'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'unInjury'}
                              >
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'injury'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'crookedStomachT'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'hard'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'soft'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөн</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'crookedStomachH'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Өгсөх болон уруудах гэдэс: - Байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'deepKnock', 'adStomach']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'unInjury'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'injury'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'adStomachT'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'hard'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'soft'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөнтэй</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'adStomachH'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Хөндлөн гэдэс: Байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'deepKnock', 'tsStomach']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'unInjury'}
                              >
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'injury'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'tsStomachT'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'hard'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'soft'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөн</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'tsStomachH'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Цутгалан гэдэс: Байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'deepKnock', 'fbStomach']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'unInjury'}
                              >
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'injury'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тогтоц</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'fbStomachT'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'hard'}>
                                 Хатуу
                              </Checkbox>
                              <Checkbox value={'soft'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөдөлгөөн</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'deepKnock',
                              'fbStomachH'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Элэг цөс, дэлүү</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Элэгний шинж тэмдгүүд:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'liverBileSpleen',
                              'liver'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'Nervousness'}
                              >
                                 Мэдрэл сульдал
                              </Checkbox>
                              <Checkbox value={'syndrome'}>
                                 Биж хам шинж
                              </Checkbox>
                              <Checkbox value={'symptoms'}>
                                 Иммуни-үрэвслийн шинж
                              </Checkbox>
                              <Checkbox value={'painSyndrome'}>
                                 Өвдөх хам шинж:
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           <span>
                              Хүч:
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'liverBileSpleen',
                                    'power'
                                 ]}
                              >
                                 <Input className="amaraInput w-14" />
                              </Form.Item>
                           </span>
                           <span>
                              Хугацаа &nbsp; [
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'liverBileSpleen',
                                    'time'
                                 ]}
                              >
                                 <Input className="amaraInput w-14" />
                              </Form.Item>
                              ]
                           </span>
                        </p>
                     </th>
                     <th>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'liverBileSpleen',
                              'liver2'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'jaundiceSyndrome'}
                              >
                                 Шарлах хам шинж
                              </Checkbox>
                              <Checkbox className="w-full" value={'itching'}>
                                 Загатналт
                              </Checkbox>
                              <Checkbox value={'hemorrhagicSyndrome'}>
                                 Цусархаг хам шинж
                              </Checkbox>
                              <Checkbox value={'liverSymptoms'}>
                                 Элэгний их шинж
                              </Checkbox>
                              <Checkbox value={'lowLiverSymptoms'}>
                                 Элэгний бага шинж
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Элэгний хэмжээ тэмтрэлтээр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'liverBileSpleen',
                              'liverSize'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'bigger'}>Томорсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>(баруун, зүүн дэлбэн, зур)</p>
                     </th>
                     <th>
                        <p>Дэлүүний хэмжээ тэмтрэлтээр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'liverBileSpleen',
                              'spleenSize'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'bigger'}>Томорсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>(I,II,III,IV зэрэг, дугуйл)</p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Шээс бэлгийн тогтолцоо</th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th>
                        <p>Хоногийн шээсний гарц:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'dayPee'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'increased'}>Ихэссэн</Checkbox>
                              <Checkbox value={'decreased'}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Шээсний өнгө:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'colorPee'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'strawYellow'}
                              >
                                 Сүрлэн шар
                              </Checkbox>
                              <Checkbox className="w-full" value={'redYellow'}>
                                 Улаан шар
                              </Checkbox>
                              <Checkbox className="w-full" value={'noColor'}>
                                 Өнгөргүй
                              </Checkbox>
                              <Checkbox className="w-full" value={'sediment'}>
                                 Тундастай
                              </Checkbox>
                              <Checkbox value={'noSediment'}>
                                 Тундасгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th className="w-40">
                        <p>Шөнө шээдэг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'nightPee'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={true}>
                                 Тийм, тоо____
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Шээс тассалддаг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'peeIssus'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Дутуу шээдэг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'peeHalf'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th className="w-40">
                        <p>Дүлж шээдэг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'pushPee'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Шээхэд давсгаар өвддөг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'peePain'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Бөөр тэмтрэлтээр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'kidney'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'unInjury'}
                              >
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'injury'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>(Баруун, зүүн)</p>
                        <p>Пастернацкий</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'UrogenitalSystem',
                              'pasternatskyi'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'right'}>
                                 Баруун(____)
                              </Checkbox>
                              <Checkbox value={'left'}>Зүүн(____)</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={3}>Мэдрэлийн тогтолцоо</th>
                  </tr>
                  <tr>
                     <th className="w-64">
                        <p>Үнэрлэх мэдрэмж:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'nervousSystem', 'smell']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'decreased'}>Буурсан</Checkbox>
                              <Checkbox value={'notOut'}>Ялгахгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Сонсголын мэдрэмж:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'nervousSystem', 'hear']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'increased'}>Ихэссэн</Checkbox>
                              <Checkbox value={'decreased'}>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Нүүрний 2 тал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'nervousSystem',
                              'faceTwoSide'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'same'}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={'notSame'}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Рефлексүүд:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'nervousSystem',
                              'reflex'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'saved'}>
                                 Хадгалагдана
                              </Checkbox>
                              <Checkbox value={'unSaved'}>
                                 Хадгалагдаагүй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Мэдрэхүй:</p>
                        <div className="inline-flex">
                           <div>
                              <p>Өнгөц:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'nervousSystem',
                                    'sensation'
                                 ]}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox
                                       className="ml-2 w-full"
                                       value={'normal'}
                                    >
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'increased'}>
                                       Ихэссэн
                                    </Checkbox>
                                    <Checkbox value={'decreased'}>
                                       Буурсан
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div>
                              <p>Гүн:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'nervousSystem',
                                    'duke'
                                 ]}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox
                                       className="ml-2 w-full"
                                       value={'normal'}
                                    >
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'increased'}>
                                       Ихэссэн
                                    </Checkbox>
                                    <Checkbox value={'decreased'}>
                                       Буурсан
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div>
                              <p>Хэт мэдрэгшил:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'nervousSystem',
                                    'hyperSens'
                                 ]}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox
                                       className="ml-2 w-full"
                                       value={'normal'}
                                    >
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'increased'}>
                                       Ихэссэн
                                    </Checkbox>
                                    <Checkbox value={'decreased'}>
                                       Буурсан
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={3}>
                        <p>Сэтгэцийн байдал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'nervousSystem',
                              'mindStatus'
                           ]}
                        >
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={3}>
                        <p>Бусад: (Арьс, үе мөч, тунгалагийн тогтолцоо)</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'nervousSystem',
                              'others'
                           ]}
                        >
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page2;
