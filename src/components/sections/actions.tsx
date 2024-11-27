import { HStack, Text, VStack } from "@chakra-ui/react";
import { ActionButton } from "../action-button";
import { IoLocationOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { LuGift } from "react-icons/lu";

export function Actions() {
    return (
        <VStack w={'100%'} minH={'100vh'}>
            <Text textAlign={'center'} css={{fontFamily: 'Authentic Signature', color: 'blue.400',}} fontSize={{base: '2xl', md: '7xl'}}>Clíque nos ícones para acessar</Text>
            <VStack w={'full'} h={'full'} gap={5}>
                <HStack w={'full'} h={'full'}>
                    <ActionButton onAction={() => {}} icon={<IoLocationOutline/>} text={'Localização da cerimônia'} />
                    <ActionButton onAction={() => {}} icon={<IoLocationOutline/>} text={'Localização do evento'} />
                </HStack>
                <HStack w={'full'} h={'full'}>
                    <ActionButton onAction={() => {}} icon={<FiCheckCircle/>} text={'Confirme sua presença'} />
                    <ActionButton onAction={() => {}} icon={<LuGift/>} text={'Presente'} />
                </HStack>
            </VStack>
        </VStack>
    )
}