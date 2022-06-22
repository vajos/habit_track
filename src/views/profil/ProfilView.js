import Paragraph from "antd/es/typography/Paragraph";
import { Button, Form, Input, Select } from "antd";
import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useRecoilState} from "recoil";
import {user_meta_data_state} from "../../atoms/atoms";
import {cloneDeep} from "lodash";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function ProfilView() {





  const {logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0();
  const [userMetadata, setUserMetadata] = useRecoilState(user_meta_data_state);



  function add_user_Data(user_data) {
    if (isAuthenticated) {
      console.log("INSIDE ADDING ");
      const sUserMetadata = async () => {
        const domain = "https://dev-xc-yysm1.eu.auth0.com";
        try {
          const accessToken = await getAccessTokenSilently({
            audience: `${domain}/api/v2/`,
            scope: "update:current_user_metadata",
          });


          const userDetailsByIdUrl = `${domain}/api/v2/users/${user.sub}`;
          const metadataResponse = await fetch(userDetailsByIdUrl, {
            method: 'PATCH',

            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user_data),
          })

          let user_metadata = await metadataResponse.json();

        } catch (e) {
          console.log("error adding habit" + e);
        }

      };
      sUserMetadata().then(r => {
        //setUserMetadata(user_data);

      });
    }
  }


  useEffect(() => {


    if (isAuthenticated) {

      let response;
      const getUserMetadata = async () => {
        const domain = "https://dev-xc-yysm1.eu.auth0.com";

        try {
          const accessToken = await getAccessTokenSilently({
            audience: `${domain}/api/v2/`,
            scope: "read:current_user",
          });

          const userDetailsByIdUrl = `${domain}/api/v2/users/${user.sub}`;

          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,

            },
          });

          response = await metadataResponse.json();
          const {user_metadata} = response;
          setUserMetadata(user_metadata);
          console.log(user_metadata);
        } catch (e) {
          console.log(e);
        }
      };
      getUserMetadata().then(r=> null);
    }


  }, [getAccessTokenSilently, user?.sub]);


  const [form] = Form.useForm();
  const [name, setName] = useState(userMetadata.name);
  const [alter, setAlter] = useState(userMetadata.alter);

  function onFinish(values) {
    setName(values.name);
    setAlter(values.alter);

    console.log("Fdfsdfdsfsdfsdfsdfsd");
    let user_metadata = cloneDeep(userMetadata);
    user_metadata.name = values.name;
    user_metadata.alter = 15;
    let user_data = {
      user_metadata
    };
    console.log(user_metadata);
    console.log(user_data);


    add_user_Data(user_data);
    setUserMetadata(user_metadata);
  }



  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: "80%",
        margin: "20px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        data-testid="heading"
        style={{ marginBottom: "30px", fontWeight: "bolder" }}
      >
        Sei Willkommen auf deinem Profil {name}
      </h1>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={{
          name: name,
          alter: alter
        }}
      >
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Alter">
          <Input />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Change
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
