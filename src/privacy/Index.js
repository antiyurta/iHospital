import React from 'react';
import { Card, Layout, Typography } from 'antd';
import Logo from '../assets/logo/iHospital.png';
import { Container } from 'react-bootstrap';
const { Title } = Typography;
const { Header, Footer, Content } = Layout;
function Index() {
   return (
      <div>
         <Layout className="layout-default layout-signin">
            <Header>
               <div className="header-col header-brand">
                  <img className="h-24" src={Logo} alt="logo" />
               </div>
            </Header>
            <Content className="signin">
               <Container>
                  <div className="flex flex-wrap">
                     <div className="w-full">
                        <Card
                           className="header-solid max-h-max rounded-md"
                           title={<Title level={2}>Үйлчилгээний нөхцөл</Title>}
                           bordered={false}
                        >
                           <Title
                              level={5}
                              style={{
                                 color: '#2d8cff',
                                 paddingBottom: '24px'
                              }}
                           >
                              НЭГ. ЕРӨНХИЙ ЗААЛТ
                           </Title>
                           <p
                              style={{
                                 fontSize: 16,
                                 fontWeight: 400,
                                 whiteSpace: 'break-spaces',
                                 paddingBottom: '24px'
                              }}
                           >
                              Зээлийн маркет платформын хэрэглэгчдэд зориулсан
                              Digitalcredit.mn веб сайт болон digitalcredit.mn
                              аппликейшн цаашид нийтэд нь систем гэх нь “Дижитал
                              кредит” ХХК-ийн өмч бөгөөд Энэхүү үйлчилгээний
                              нөхцөл нь уг системээр үйлчлүүлэх этгээд онлайнаар
                              зээлийн хүсэлтээ сонгосон банк санхүүгийн
                              байгууллагад илгээх, зээл авахтай холбоотой үүсэх
                              харилцааг зохицуулахад оршино.
                           </p>
                           <p
                              style={{
                                 fontSize: 16,
                                 fontWeight: 400,
                                 whiteSpace: 'break-spaces',
                                 paddingBottom: '24px'
                              }}
                           >
                              1.1 Хэрэглэгч нь 18 нас хүрсэн Монгол улсын иргэн,
                              хуулийн этгээд байна.
                           </p>
                        </Card>
                     </div>
                  </div>
               </Container>
            </Content>
            <Footer>
               {/* <Menu mode="horizontal" className="menu-nav-social" items={MenuNav} /> */}
               <p className="copyright">
                  Copyright © 2023 by <a href="gurensoft.com">GurenSoft LLC</a>
               </p>
            </Footer>
         </Layout>
      </div>
   );
}
export default Index;
