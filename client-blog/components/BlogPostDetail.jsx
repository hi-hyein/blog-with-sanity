import { Row, Col } from 'antd';
import Link from 'next/link';
import BlockContents from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function BlogPostDetail ({blocks}) {
    const serializers = {
      type: {
        code: ({node}) => {
          const code = {node}
          return <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
        },
        video: ({node}) => {
          const video = {node}
          return <p>{video}</p>
        },
        link: ({node}) => {
          const link = {node}
          return <p>{link}</p>
        },
        imageGallery: ({node}) => {
          const imageGallery = {node}
          return <p>{imageGallery}</p>
        },
      }
    }
    return (
       <Row>
          <Col span={24}>
            <BlockContents blocks={blocks} dataset='production' projectId={process.env.SANITY_PROJECT_ID} serializers={serializers}/>
          </Col>
       </Row>
    )
}