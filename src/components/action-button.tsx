import { Icon, Stack, Text, VStack} from "@chakra-ui/react";
import React from "react";

export function ActionButton({onAction, text, icon}: {onAction: () => void, text:string, icon: React.ReactElement}){
    return(
        <VStack gap={0}>
            <Stack textAlign={'center'}  fontSize={{base: 'md', md: 'lg'}} css={{fontFamily: 'Sour Gummy'}} w={{base:24,md:72}} h={{base:24,md:72}} _hover={{bg:'blue.100', transition: 'all 0.2s ease-in-out', cursor: 'pointer'}} gap={0} align={'center'} justify={'center'} p={2} borderWidth={1} rounded={'full'}  onClick={onAction}>
                <Icon w={{base:16,md:32}} h={{base:16,md:32}}>{icon}</Icon>
            </Stack>
            <Text fontSize={{base: 'md', md: '2xl'}} css={{fontFamily: 'Sour Gummy'}}>{text}</Text>
        </VStack>
    )
}