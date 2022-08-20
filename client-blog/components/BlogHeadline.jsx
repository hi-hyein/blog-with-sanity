import { Row, Col, Typography } from 'antd';
const { Title, Text } = Typography;

export default function BlogHeadline () {
    return (
       <Row
        align="middle"
        style={{
          height: 400,
          textAlign: 'center',
        }}
       >
        <Col span={24}>
          <Title>Hyein's Blog</Title>
          <Text>어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고<br />
          어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고 어쩌고 저쩌고</Text>
        </Col>
       </Row>
    )
}