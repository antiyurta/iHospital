import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';

function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th colSpan={4} className="text-center font-bold">
                        ДОТРЫН ЭМЧИЙН ҮЗЛЭГ
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Амьсгалын эрхтэн тогтолцоо</th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Харж ажиглах:</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Хамрын амьсгал</p>
                        <p>чөлөөтэй эсэх:</p>
                        <Form.Item
                           name={['doctorInspection', 'respiratory', 'noise']}
                           shouldUpdate
                           className="mb-0"
                           noStyle
                        >
                           <Checkbox.Group className="checkboxx ml-0">
                              <Checkbox className="checkboxx ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Хөхрөлт байгаа эсэх:</p>
                        <Form.Item
                           name={['doctorInspection', 'respiratory', 'bluish']}
                           shouldUpdate
                           className="mb-0"
                           noStyle
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Тийм бол:</p>
                        <Form.Item
                           name={['doctorInspection', 'respiratory', 'isTrue']}
                           shouldUpdate
                           className="mb-0"
                           noStyle
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'center'}>
                                 Төвийн
                              </Checkbox>
                              <Checkbox value={'border'}>Захын</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Амьсгалд туслах булчингууд оролцож</p>
                        <p>байгаа эсэх:</p>
                        <Form.Item
                           name={[
                              'doctorInspection',
                              'respiratory',
                              'musclesIsHelp'
                           ]}
                           shouldUpdate
                           className="mb-0"
                           noStyle
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Амьсгалын тоо 1:</p>
                        <p>
                           минутанд{' '}
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'respiratory',
                                 'breathOneMinute'
                              ]}
                           >
                              <Input
                                 className="amaraInput w-10"
                                 style={{ textAlign: 'center' }}
                              />
                           </Form.Item>{' '}
                           удаа:
                        </p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'respiratory',
                              'breathStatus'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'even'}>
                                 Хэм жигд
                              </Checkbox>
                              <Checkbox value={'unEven'}>Жигд бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Цээжний хэлбэр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'respiratory', 'chest']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal'}
                              >
                                 Зөв
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Эмгэг</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Амьсгалын хэлбэр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'respiratory', 'breath']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'chest'}>
                                 Цээжний
                              </Checkbox>
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'abdomen'}
                              >
                                 Хэвлийн
                              </Checkbox>
                              <Checkbox value={'mixed'}>Холимог</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Цээжний 2 талд</p>
                        <p>амьсгал жигд оролцох</p>
                        <p>байдал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'respiratory',
                              'chestTwoSide'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Жигд(баруун/зүүн)
                              </Checkbox>
                              <Checkbox value={'unnormal'}>Хоцорно</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Тэмтрэлт:</th>
                     <th colSpan={2}>Тогшилт:</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Эмзэглэлтэй эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'touch', 'injury']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'unNormal'}
                              >
                                 Эмзэглэлгүй
                              </Checkbox>
                              <Checkbox value={'normal'}>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           [
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'touch', 'isUnNormal']}
                           >
                              <Input className="w-32" />
                           </Form.Item>
                           ]
                        </p>
                        <p>Уян чанар:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'touch', 'flex']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'decreased'}>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Дууны доргион:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'touch', 'sound']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн Суларсан
                              </Checkbox>
                              <Checkbox value={'undefined'}>
                                 Тодорхойлогдохгүй
                              </Checkbox>
                              <Checkbox value={'strong'}>
                                 Хүчтэй болсон
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Тогшилтын дуу:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'knock', 'sound']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'twoSide'}>
                                 2 талд ижил
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Хэсэгт тогшилтын дуу:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'knock', 'partSound']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'faded'}>
                                 Бүдгэрсэн
                              </Checkbox>
                              <Checkbox value={'determined'}>Тодорсон</Checkbox>
                              <Checkbox value={'deaf'}>Дүлий болсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Чагналт</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <p>Амьсгал 2 талд:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'listen', 'twoSide']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'same'}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={'notSame'}>Ижил буc</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <span>
                           (
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'listen',
                                 'twoSideNotSame'
                              ]}
                           >
                              <Input className="amaraInput w-12" />
                           </Form.Item>
                           хэсэгт )
                        </span>
                        <p>Эмгэг амьсгалтай:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'listen', 'badBreath']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           Тийм бол: (цулцангийн суларсан, цулцангийн ширүүссэн,
                           гуурсан хоолойн эмгэг, стенозын, амьсгал
                           сонсогдохгүй)
                        </p>
                     </th>
                     <th colSpan={2}>
                        <p>Нэмэлт шуугиантай эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'listen', 'extraNoise']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>
                           Тийм бол: (нойтон хэржигнүүр, шажигнуур, хуурай
                           хэржигнүүр, гялтангийн шүргэлцэх чимээ
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'listen',
                                 'extroNoiseTrue'
                              ]}
                           >
                              <Input className="amaraInput w-20" />
                           </Form.Item>
                           хэсэгт)
                        </p>
                        <p>Бронхофони</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'listen', 'bronhofoni']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="w-full" value={'bigger'}>
                                 Тодорсон
                              </Checkbox>
                              <Checkbox className="w-auto" value={'decresead'}>
                                 Суларсан
                              </Checkbox>
                              <p className="inline">
                                 (
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={[
                                       'doctorInspection',
                                       'listen',
                                       'decreseadTrue'
                                    ]}
                                 >
                                    <Input className="amaraInput w-28" />
                                 </Form.Item>
                                 хэсэгт )
                              </p>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Зүрх судасны тогтолцоо</th>
                  </tr>
                  <tr>
                     <th colSpan={2}>Зүрх судасны эрсдэлт хүчин зүйлс:</th>
                     <th colSpan={2}>Ажиглалт</th>
                  </tr>
                  <tr>
                     <th>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'listen', 'heart']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'poorFood'}
                              >
                                 Зохисгүй хооллолт
                              </Checkbox>
                              <Checkbox value={'badMovement'}>
                                 Хөдөлгөөний хомсдол
                              </Checkbox>
                              <Checkbox className="w-full" value={'stress'}>
                                 Стресс
                              </Checkbox>
                              <Checkbox className="w-full" value={'Obesity'}>
                                 Таргалалт
                              </Checkbox>
                              <Checkbox value={'smoking'}>Тамхидалт</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th className="w-20">
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'listen', 'heart2']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2 w-full" value={'vodka'}>
                                 Архины зохисгүй хэрэглээ
                              </Checkbox>
                              <Checkbox value={'Heredity'}>Удамшил</Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'arterialHypertension'}
                              >
                                 Артерийн гипертензи
                              </Checkbox>
                              <Checkbox
                                 className="w-full"
                                 value={'Hypercholesterolemia'}
                              >
                                 Гиперхолестеринеми
                              </Checkbox>
                              <Checkbox value={'diabetes'}>
                                 Чихрийн шижин
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th colSpan={2}>
                        <div className="inline-flex">
                           <div>
                              <p>Арьсны хөхрөлттэй эсэх:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'observation',
                                    'skin'
                                 ]}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={true}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={false}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                           <div>
                              <p>Захын хавантай эсэх:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'observation',
                                    'isEdema'
                                 ]}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={true}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={false}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                        <div className="inline-flex">
                           <div>
                              <p>Гүрээний венийн лугшилт:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'observation',
                                    'vien'
                                 ]}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox
                                       className="ml-2"
                                       value={'notObserved'}
                                    >
                                       Ажиглагдахгүй
                                    </Checkbox>
                                    <Checkbox value={'observed'}>
                                       Ажиглагдана
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              <p>(хүчтэй, дунд, сул)</p>
                           </div>
                           <div>
                              <p>Зүрхний оройн түлхэлт:</p>
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'observation',
                                    'heartBreath'
                                 ]}
                              >
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox
                                       className="ml-2"
                                       value={'notObserved'}
                                    >
                                       Ажиглагдана
                                    </Checkbox>
                                    <Checkbox value={'observed'}>
                                       Ажиглагдахгүй
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </div>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={2}>Тэмтрэлтээр</th>
                     <th>Тогшилтоор</th>
                  </tr>
                  <tr>
                     <th className="w-72">
                        <p>Зүрхний оройн түлхэлт Байрлал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'observation',
                              'heartPos'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox
                                 className="ml-2 w-full"
                                 value={'normal'}
                              >
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <div className="inline-flex">
                           <p>Хүч:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'observation',
                                 'power'
                              ]}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={'middle'}>
                                    Дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={'strong'}>Хүчтэй</Checkbox>
                                 <Checkbox value={'decreased'}>Сул</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>Шууны артерийн лугшилт</p>
                        <div className="inline-flex">
                           <p>Хэмнэл:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'observation', 'wave']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={'smooth'}>
                                    Жигд
                                 </Checkbox>
                                 <Checkbox value={'unSmooth'}>
                                    Жигд бус
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </th>
                     <th>
                        <p>
                           Давтамж:
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'observation',
                                 'frequency'
                              ]}
                           >
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                           /мин/
                        </p>
                        <p>Хүчдэл:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'observation', 'voltage']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'middle'}>
                                 Дунд зэрэг
                              </Checkbox>
                              <Checkbox value={'big'}>Их</Checkbox>
                              <Checkbox value={'less'}>Бага</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <div className="inline-flex">
                           <p>Дүүрэлт:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'observation',
                                 'filling'
                              ]}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={'medium'}>
                                    Дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={'less'}>Cул</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>2 талд ижил эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'observation',
                              'twoSideSame'
                           ]}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'same'}>
                                 Ижил
                              </Checkbox>
                              <Checkbox value={'notSame'}>Ижил бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Зүрхний (харьцангүй) хил хязгаар:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'observation',
                              'heartLimit'
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
                        <p>(дээд, баруун, зүүн хил)</p>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th colSpan={2}>Чагналтаар</th>
                  </tr>
                  <tr>
                     <th>
                        <p>Зүрхний авиа:</p>
                        <div className="inline-flex">
                           <p>Хэмнэл:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'overHead', 'rhythm']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={'normal'}>
                                    Жигд
                                 </Checkbox>
                                 <Checkbox value={'unNormal'}>
                                    Жигд бус
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>
                           Давтамж:
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'overHead',
                                 'frequency'
                              ]}
                           >
                              <Input className="amaraInput w-28" />
                           </Form.Item>
                           /мин
                        </p>
                        <div className="inline-flex">
                           <p>I авиа:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'overHead', 'oneWave']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-3" value={'bright'}>
                                    Тод
                                 </Checkbox>
                                 <Checkbox value={'dim14'}>
                                    Бүдгэвтэр(I,IV цэгт)
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'overHead',
                                 'oneWave2'
                              ]}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-14" value={'dim15'}>
                                    Бүдэг(I,V)
                                 </Checkbox>
                                 <Checkbox value={'bright14'}>
                                    Чангарсан(I,IV цэгт)
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p>II авиа:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'overHead', 'twoWave']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={'bright'}>
                                    Тод
                                 </Checkbox>
                                 <Checkbox value={'dim235'}>
                                    Бүдэг(II, III,V цэгт)
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'overHead',
                                 'twoWave2'
                              ]}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-14" value={'raised23'}>
                                    Өргөгдсөн(II,III цэгт)
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="inline-flex">
                           <p>III авиа:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={[
                                 'doctorInspection',
                                 'overHead',
                                 'threeWave'
                              ]}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-1" value={'hear'}>
                                    Сонсогдоно
                                 </Checkbox>
                                 <Checkbox value={'unHear'}>
                                    Сонсогдохгүй
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </th>
                     <th className="w-1/2">
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'overHead', 'threeWave2']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'noNoise'}>
                                 Шуугиангүй
                              </Checkbox>
                              <Checkbox value={'noise'}>шуугиантай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <p>Байрлал: I; II; III; IV; V цэг</p>
                        <p>Систолын: (I; II; III; IV; V цэгт)</p>
                        <p>Диастолын: (I; II; III; IV; V цэгт)</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'overHead', 'threeWave3']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'notPass'}>
                                 Үл дамжина
                              </Checkbox>
                              <Checkbox value={'pass'}>Дамжина</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <div className="inline-flex">
                           <p>Хүч:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'overHead', 'power']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={'bright'}>
                                    Сул
                                 </Checkbox>
                                 <Checkbox value={'middle'}>
                                    Дунд зэрэг
                                 </Checkbox>
                                 <Checkbox value={'strong'}>Хүчтэй</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <p>Перикардын шүргэлцэх чимээ бий эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'overHead',
                              'Pericardium'
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
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
