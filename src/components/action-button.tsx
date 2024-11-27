import { Icon, Stack} from "@chakra-ui/react";
import React from "react";

export function ActionButton({onAction, text, icon}: {onAction: () => void, text:string, icon: React.ReactElement}){
    return(
        <Stack w={60} h={60} _hover={{bg:'blue.100', transition: 'all 0.2s ease-in-out', cursor: 'pointer'}} gap={0} align={'center'} justify={'center'} p={12} borderWidth={1} rounded={'full'}  onClick={onAction}>
            <Icon w={{base:16,md:32}} h={{base:16,md:32}}>{icon}</Icon>
            {text}
        </Stack>
    )
}