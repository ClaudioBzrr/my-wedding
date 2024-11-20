import { Box, Image, Stack, VStack } from "@chakra-ui/react";
import Rose1 from '@/assets/images/rose-1.png'
import Rose2 from '@/assets/images/rose-2.png'
import Rose3 from '@/assets/images/rose-3.png'
import Rose4 from '@/assets/images/rose-4.png'

export function SectionLayout({children}:{children:React.ReactNode}) {
    return(
        <VStack  maxW={'100vw'} maxH={'100vh'} alignItems={'center'} justifyContent={'center'} gap={0} align={'start'}>
            <Box zIndex={-1}>
                <Image position={'fixed'} top={0} left={0} maxW={{sm:'sm',base:'xs'}} maxH={{xl:'sm',base:'1/4'}} objectFit={'fill'} src={Rose1}/>
                <Image position={'fixed'} top={0} right={0} maxW={{sm:'sm',base:'xs'}} maxH={{xl:'sm',base:'1/4'}} objectFit={'fill'} src={Rose2}/>
                <Image position={'fixed'} bottom={0} left={0} maxW={{sm:'sm',base:'xs'}} maxH={{xl:'sm',base:'1/4'}} objectFit={'fill'} src={Rose3}/>
                <Image position={'fixed'} bottom={0} right={0}  maxW={{sm:'sm',base:'xs'}} maxH={{xl:'sm',base:'1/4'}} objectFit={'fill'} src={Rose4}/>
            </Box>
            <Stack  maxW={{base:'60vw',md:'40vw'}} bg={'transparent'}  gap={0}>{children}</Stack>
        </VStack>
    )
}