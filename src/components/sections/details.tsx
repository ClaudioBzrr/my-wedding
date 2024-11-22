import {HStack, Separator, Text, VStack } from "@chakra-ui/react";

export function Details(){
    return(
        <VStack gap={5}  w={'full'} h={'100vh'} align={'center'} justify={'center'}>
            <Text textAlign={{base:'center',md:'left'}} fontSize={{base: '3xl', md: '7xl'}} css={{fontFamily: 'Authentic Signature', color: 'blue.400'}} >Você está convidado para celebrar conosco o dia mais feliz de nossas vidas!</Text>
            <VStack w={'full'} gap={10}>
                <VStack fontFamily={'Sour Gummy'}>
                    <Separator orientation={'horizontal'} w={'100%'} h={'1px'} bg={'blue.400'} />
                    <Text fontSize={{base: 'lg', md: '5xl'}}>01 | FEVEREIRO | 2025</Text>
                    <Text fontSize={{base: 'lg', md: '5xl'}}>Sábado, às 09H</Text>
                    <Separator orientation={'horizontal'} w={'100%'} h={'1px'} bg={'blue.400'} />
                 </VStack>
                 <HStack gap={4}>
                    <VStack gap={4}>
                        <Text textAlign={'center'} css={{fontFamily: 'Authentic Signature', color: 'blue.400',}} fontSize={{base: '2xl', md: '7xl'}}>Local da cerimônia</Text>
                        <Text textAlign={'left'}  css={{fontFamily: 'Sour Gummy'}} fontSize={{base: 'md', md: '3xl'}}>R. Fernando Farias de Melo, 830</Text>
                        <Text textAlign={'left'}  css={{fontFamily: 'Sour Gummy'}} fontSize={{base: 'md', md: '3xl'}}>Manuel Sátiro, Fortaleza - CE</Text>
                    </VStack>
                    <Separator orientation={'vertical'} w={'1px'} h={'100%'} bg={'blue.400'} />
                    <VStack gap={0}>
                        <Text textAlign={'center'} css={{fontFamily: 'Authentic Signature', color: 'blue.400',}} fontSize={{base: '2xl', md: '7xl'}}>Local do almoço</Text>
                        <Text textAlign={'center'} css={{fontFamily: 'Authentic Signature', color: 'blue.400',}} fontSize={{base: '2xl', md: '4xl'}}>(Espaço com piscina)</Text>
                        <Text textAlign={'left'} css={{fontFamily: 'Sour Gummy'}} fontSize={{base: 'md', md: '3xl'}}>R. Júlio Maciel, 84</Text>
                        <Text textAlign={'left'}  css={{fontFamily: 'Sour Gummy'}} fontSize={{base: 'md', md: '3xl'}}>Manuel Sátiro, Fortaleza - CE</Text>
                    </VStack>
                 </HStack>
            </VStack>
        </VStack>
    )
}