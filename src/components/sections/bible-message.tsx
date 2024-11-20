import { Text, VStack } from "@chakra-ui/react";


export function BibleMessage(){
    return(
        <VStack w={'full'} alignItems={'center'} justify={'center'} h={'100vh'}>
            <Text color={'#736C5F'} css={{fontFamily: 'Sour Gummy'}} fontSize={{base: '2xl', md: '6xl'}}>
                “Para que todos vejam e saibam e considerem e, juntamente, entendam que a mão do Senhor fez isso.”
            </Text>
            <Text color={'#736C5F'} css={{fontFamily: 'Sour Gummy',}} fontSize={{base: '2xl', md: '6xl'}}> – Isaías 41:20</Text>
        </VStack>
    )
}