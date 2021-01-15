import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export default function JianSignUp() {
  const initialValues = { email: "", password: "", username: "" };

  const handleSubmit = (values, actions) => {
    axios
      .post("https://conduit.productionready.io/users", { user: values })
      .then(() => {
        actions.setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        actions.setSubmitting(false);
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <InputGroup>
            <Field name="username">
              {({ field, form }) => (
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    htmlFor="username"
                    children={<FaUser color="gray.100" />}
                  />
                  <Input
                    placeholder="你的昵称"
                    bg="hsla(0,0%,71%,.1)"
                    borderTopRightRadius="0"
                    borderTopLeftRadius="0"
                  />
                </InputGroup>
              )}
            </Field>
          </InputGroup>
          <InputGroup>
            <Field name="email">
              {({ field, form }) => (
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    htmlFor="email"
                    children={<FaPhoneAlt color="gray.100" />}
                  />
                  <Input
                    {...field}
                    id="email"
                    placeholder="手机号"
                    bg="hsla(0,0%,71%,.1)"
                    borderBottomRightRadius="0"
                    borderBottomLeftRadius="0"
                  />
                </InputGroup>
              )}
            </Field>
          </InputGroup>
          <InputGroup>
            <Field name="password">
              {({ field, form }) => (
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock color="gray.100" />}
                  />
                  <Input
                    placeholder="密码"
                    type="password"
                    bg="hsla(0,0%,71%,.1)"
                    borderTopRightRadius="0"
                    borderTopLeftRadius="0"
                  />
                </InputGroup>
              )}
            </Field>
          </InputGroup>
          <Button
            w="100%"
            colorScheme="blue"
            borderRadius="25px"
            my={5}
            isLoading={props.isSubmitting}
            type="submit"
          >
            登录
          </Button>
          <Box>
            <Text fontSize={12}>点击 “注册” 即表示您同意并愿意遵守简书</Text>
            <Text fontSize={12}>
              <Box as="a" href="https://www.jianshu.com/p/c44d171298ce">
                <Text as="span" color="#3194d0">
                  用户协议
                </Text>
              </Box>{" "}
              和
              <Box as="a" href="https://www.jianshu.com/p/2ov8x3">
                <Text as="span" color="#3194d0">
                  隐私政策
                </Text>
              </Box>
              。
            </Text>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
