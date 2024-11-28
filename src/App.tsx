import { HStack, VStack } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Invite } from "@/components/sections/invite";
import { SectionLayout } from "@/components/section-layout";
import { BibleMessage } from "@/components/sections/bible-message";
import { Details } from "@/components/sections/details";
import { Actions } from "@/components/sections/actions";
import Sound from '@/assets/music/sound.mp3'

export function App() {

  return (
    <VStack gap={0} w={'100%'}>
      <audio src={Sound} autoPlay/>
      <HStack><ColorModeButton color={'white'} size={'xs'} _hover={{bg:'transparent', backdropFilter:'blur(2px)'}} position={'fixed'} top={2} right={2} /></HStack>
      <VStack maxW={'100vw'} minH={'100vh'} align={'center'} justify={'center'} gap={0}>
          {/* Section Components here */}
          <SectionLayout children={<Invite/>}/>
          <SectionLayout children={<BibleMessage/>}/>
          <SectionLayout children={<Details/>}/>
          <SectionLayout children={<Actions/>}/>
      </VStack>
    </VStack>
  )
}


