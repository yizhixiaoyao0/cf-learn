import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export default function JianSignIn() {
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, actions) => {
    console.log(values, "values");
    axios
      .post("https://conduit.productionready.io/users/login", {user:values})
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
            <Field name="email">
              {({ field, form }) => (
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    htmlFor="email"
                    children={<FaUser color="gray.300" />}
                  />
                  <Input
                    {...field}
                    id="email"
                    placeholder="手机号或邮箱"
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
                    children={<FaLock color="gray.300" />}
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
          <Flex my={3}>
            <Checkbox defaultIsChecked>记住我</Checkbox>
            <Spacer />
            <Menu>
              <MenuButton
                as="a"
                bg="none"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
              >
                <Text fontSize="sm" fontWeight="light">
                  登录遇到问题
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem>用手机号重置密码</MenuItem>
                <MenuItem>用邮箱重置密码 </MenuItem>
                <MenuItem>无法用海外手机号登录</MenuItem>
                <MenuItem>无法用 Google 帐号登录</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Button
            w="100%"
            colorScheme="blue"
            borderRadius="25px"
            isLoading={props.isSubmitting}
            type="submit"
          >
            登录
          </Button>
        </Form>
      )}
    </Formik>
  );
}
