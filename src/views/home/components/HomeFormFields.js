import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, Space } from "antd";
import { useState } from "react";
import blobToBase64 from "../../../helpers/blobToBase64";
import { Link } from "react-router-dom";
import { RouteName } from "../../../routes/routesnames";

export default function HomeFormFields({ isLoading = false }) {
  const [thumbnailBase64, setThumbnailBase64] = useState();

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload thumbnail</div>
    </div>
  );

  const beforeUpload = async (file) => {
    const base64 = await blobToBase64(file);
    setThumbnailBase64(base64);

    return false;
  };

  const normFile = (e) => e.file;

  return (
    <>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Thumbnail"
        rules={[{ required: true }]}
        name="thumbnail"
        valuePropName="file"
        getValueFromEvent={normFile}
      >
        <Upload.Dragger
          style={{ padding: 20 }}
          name="thumbnail"
          showUploadList={false}
          beforeUpload={beforeUpload}
          accept=".jpg,.jpeg,.png,.gif"
          data-testid="drop"
        >
          {thumbnailBase64 ? (
            <img
              src={thumbnailBase64}
              alt="thumbnail"
              style={{ width: "100%" }}
            />
          ) : (
            uploadButton
          )}
        </Upload.Dragger>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 18 }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Space>
            <Link to={`${RouteName.HOME}`}>
              <Button type="ghost" loading={isLoading}>
                Back
              </Button>
            </Link>

            <Button type="primary" htmlType="submit" loading={isLoading}>
              Add this story
            </Button>
          </Space>
        </div>
      </Form.Item>
    </>
  );
}
