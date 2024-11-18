import { Image, Text, VStack } from "@chakra-ui/react";
import Logo from '@/assets/images/logo.png'

export function Invite(){
    return(
        <VStack  gap={0} align={'center'} justify={'flex-start'}>
            <Image  src={Logo}/>
            <Text
                color={'#736C5F'}
                fontSize={{base: '2xl', md: '8xl'}} 
                style={{fontFamily: 'Sacramento'}}> Imaculada & Claudio</Text>
        </VStack>
    )
}