import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Logo from '@/assets/images/logo.png'

export function Invite(){
    return(
        <VStack h={'100vh'}  gap={0} align={'center'} justify={'center'} >
            <Image objectFit={'contain'} maxW={{base:'xl',md:'xl'}} maxH={{base:'xs',md:'xl'}} src={Logo}/>
            <VStack mb={4} css={{fontSize:{base: '2xs', md: 'lg'},fontFamily: 'Sour Gummy', color: '#736C5F'}} w={'full'}>
                <Text>Com a benção de seus pais,</Text>
                <HStack w={'full'} justify={'space-between'}>
                    <VStack>
                        <Text>Antonio Ferreira</Text>
                        <Text>Andrelina Oliveira</Text>
                    </VStack>
                    <VStack>
                        <Text>Maria de Fátima</Text>
                        <Text></Text>
                    </VStack>
                </HStack>
            </VStack>
            <Stack gap={{base:0,md:'4'}} direction={{base:'column',md:'row'}}>
                <Text
                    textAlign={'center'}
                    w={'full'}
                    color={'#736C5F'}
                    fontSize={{base: '3xl', md: '8xl'}} 
                    style={{fontFamily: 'Authentic Signature'}}>Imaculada</Text>
                <Text
                    textAlign={'center'}
                    w={'full'}
                    color={'#736C5F'}
                    fontSize={{base: '3xl', md: '8xl'}} 
                    style={{fontFamily: 'Authentic Signature'}}>&</Text>
                <Text
                    textAlign={'center'}
                    w={'full'}
                    color={'#736C5F'}
                    fontSize={{base: '3xl', md: '8xl'}} 
                    style={{fontFamily: 'Authentic Signature'}}>Claudio</Text>
            </Stack>
        </VStack>
    )
}