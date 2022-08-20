import { Row, Col, Card } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs'

export default function BlogHeadline ({posts}) {
    return (
       <>
          <Row align="middle" style={{height: 100}}>
            <Col span={24}>
              <h1 style={{
                fontSize: 30,
                fontWeight: 'bold'
              }}>Latest Posts</h1>
            </Col>
          </Row>
          <Row align='top' gutter={16} style={{height: 'auto'}}>
            {posts.map(p => {
              return (
                <Col span={6}>
                  <Link href={`/post/${p.slug}`}>
                    <a>
                      <Card style={{
                        width: '100%',
                        border: 'none',
                        marginBottom: 30,
                        
                      }}
                      cover={<img alt={p.thumbnail.alt} src={p.thumbnail.imageUrl} />}
                      >
                        <h3>{p.title}</h3>
                        <h4>{p.author.name} . {dayjs(p.createddAt).format('YY-MM-DD')}</h4>
                      </Card>
                    </a>
                  </Link>
                </Col>
              )
            })}
          </Row>
       </>
    )
}