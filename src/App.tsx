import { HStack, VStack } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Invite } from "./components/sections/invite";
import { SectionLayout } from "./components/section-layout";

export function App() {


  return (
    <VStack gap={0} w={'100%'}>
      <HStack><ColorModeButton position={'absolute'} top={2} right={2} /></HStack>
      <VStack gap={0}>
          {/* Section Components here */}
          <SectionLayout children={<Invite/>}/>
          {/* <Invite/> */}
      </VStack>
    </VStack>
  )
}


