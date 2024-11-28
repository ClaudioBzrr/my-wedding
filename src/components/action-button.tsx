import { Icon, Stack, Text, VStack} from "@chakra-ui/react";
import React from "react";

export function ActionButton({onAction, text, icon}: {onAction: () => void, text:string, icon: React.ReactElement}){
    return(
        <VStack gap={0}>
            <Stack transition={'all 0.4s ease-in-out'} borderColor={'#736C5F'} bg={'blue.200'} textAlign={'center'}  fontSize={{base: 'md', md: 'lg'}} css={{fontFamily: 'Sour Gummy'}} w={{base:24,md:60}} h={{base:24,md:60}} _hover={{transition: 'all 0.4s ease-in-out', cursor: 'pointer',transform: 'scale(1.02)'}} gap={0} align={'center'} justify={'center'} p={2} borderWidth={4} rounded={'full'}  onClick={onAction}>
                <Icon color={'#736C5F'} w={{base:16,md:32}} h={{base:16,md:32}}>{icon}</Icon>
            </Stack>
            <Text fontSize={{base: 'md', md: '2xl'}} css={{fontFamily: 'Sour Gummy'}}>{text}</Text>
        </VStack>
    )
}