import { Image, Stack, VStack } from "@chakra-ui/react";
import Roses from '@/assets/images/roses-serenity.png'

export function SectionLayout({children}:{children: React.ReactNode}){
    return(
        <VStack w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'} gap={0} align={'start'}>
            <Image w={'100vw'} h={'100vh'} src={Roses}/>
            <Stack w={'full'} h={'full'} maxH={'90vh'}  maxW={{base:'90vw',md:'60vw'}}  borderRadius={'4xl'} p={48} backdropFilter={'blur(35px)'} position={'absolute'} gap={0}>{children}</Stack>
        </VStack>
    )
}