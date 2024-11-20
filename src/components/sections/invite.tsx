import { Image, Text, VStack } from "@chakra-ui/react";
import Logo from '@/assets/images/logo.png'

export function Invite(){
    return(
        <VStack  gap={0} align={'center'} justify={'flex-start'}>
            <Image objectFit={'contain'} maxW={{base:'xl',md:'xl'}} maxH={{base:'xs',md:'xl'}} src={Logo}/>
            <Text
                w={'full'}
                color={'#736C5F'}
                fontSize={{base: '3xl', md: '8xl'}} 
                style={{fontFamily: 'Sacramento'}}> Imaculada & Claudio</Text>
        </VStack>
    )
}