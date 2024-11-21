import {Text, VStack } from "@chakra-ui/react";

export function Details(){
    return(
        <VStack gap={5}  w={'full'} h={'100vh'} align={'center'} justify={'center'}>
            <Text fontSize={{base: '3xl', md: '8xl'}} css={{fontFamily: 'Authentic Signature', color: 'blue.400'}} >Você está convidado para celebrar conosco o dia mais feliz de nossas vidas!</Text>
            <VStack w={'full'} gap={10}>
                <VStack fontFamily={'Sour Gummy'}>
                    <Text fontSize={{base: 'lg', md: '5xl'}}>01 | FEVEREIRO | 2025</Text>
                    <Text fontSize={{base: 'lg', md: '5xl'}}>Sábado, às 09H</Text>
                 </VStack>
                 <VStack>
                    <Text css={{fontFamily: 'Authentic Signature', color: 'blue.400',}} fontSize={{base: '2xl', md: '8xl'}}>Local da cerimônia</Text>
                    <Text css={{fontFamily: 'Sour Gummy'}} fontSize={{base: 'md', md: '4xl'}}>R. Fernando Farias de Melo, 830</Text>
                    <Text css={{fontFamily: 'Sour Gummy'}} fontSize={{base: 'md', md: '4xl'}}>Manuel Sátiro, Fortaleza - CE</Text>
                 </VStack>
            </VStack>
        </VStack>
    )
}