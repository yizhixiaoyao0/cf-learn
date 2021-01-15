import React from "react";
import JianSignIn from "./signIn";
import JianSignUp from "./signUp";
import { Box, Tabs, TabPanels, TabPanel, TabList, Tab, Flex } from "@chakra-ui/react";

export default function Form() {
  return (
    <Box w={400} p='50px 50px 30px' borderRadius={4} boxShadow='0 0 8px rgba(0,0,0,.1)'>
      <Tabs align="center" colorScheme="pink" isLazy>
        <TabList borderBottom="none">
          <Tab _focus={{boxShadow: 'none'}}>登录</Tab>
          <Flex align='center' mx={2}>·</Flex>
          <Tab _focus={{boxShadow: 'none'}}>注册</Tab>
        </TabList>
        <TabPanels mt='50px'>
          <TabPanel>
            <JianSignIn></JianSignIn>
          </TabPanel>
          <TabPanel>
            <JianSignUp></JianSignUp>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
