import { HStack, VStack } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Invite } from "./components/sections/invite";
import { SectionLayout } from "./components/section-layout";

export function App() {


  return (
    <VStack gap={0} w={'100%'}>
      <HStack><ColorModeButton color={'white'} size={'xs'} _hover={{bg:'transparent', backdropFilter:'blur(2px)'}} position={'fixed'} top={2} right={2} /></HStack>
      <VStack maxW={'100vw'} minH={'100vh'} align={'center'} justify={'center'} gap={0}>
          {/* Section Components here */}
          <SectionLayout children={<Invite/>}/>
      </VStack>
    </VStack>
  )
}


