import { HStack, Text, VStack } from "@chakra-ui/react";
import { ActionButton } from "../action-button";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
import { LuGift } from "react-icons/lu";

export function Actions() {
    const confirmationMessage:string ='Olá, gostaria de confirmar minha presença na sua cerimônia de casamento do dia 01/02/2024.'
    const encondedMessage:string = encodeURIComponent(confirmationMessage)
    const whatsappLink = `https://api.whatsapp.com/send?phone=5585989349171&text=${encondedMessage}`
    const locationChurch:string = 'https://maps.app.goo.gl/2nKQTGgGkzayKR9s5'
    const locationLunch:string = 'https://maps.app.goo.gl/SXWuSuMKaAx29KdVA'
    return (
        <VStack align={'center'} justify={{base:'center',md:'space-evenly'}} w={'full'} minH={'100vh'}>
            <Text pb={{base:20,md:0}} textAlign={'center'} css={{fontFamily: 'Authentic Signature', color: 'blue.400',}} fontSize={{base: '2xl', md: '7xl'}}>Clíque nos ícones para acessar</Text>
            <VStack align={'center'} justify={'center'}  w={'full'} h={'full'} gap={{base:5,md:12}}>
                <HStack align={'center'} justify={'center'} gap={{base:5,md:12}} w={'full'} h={'full'}>
                    <ActionButton onAction={() => {window.open(locationChurch,'_blank')}} icon={<PiMapPinAreaBold/>} text={'Localização da cerimônia'} />
                    <ActionButton onAction={() => {window.open(locationLunch,'_blank')}} icon={<PiMapPinAreaBold/>} text={'Localização do evento'} />
                </HStack>
                <HStack align={'center'} justify={'center'} gap={{base:5,md:12}} w={'full'} h={'full'}>
                    <ActionButton onAction={() => { window.open(whatsappLink,'_blank')}} icon={<FiCheckCircle/>} text={'Confirme sua presença'} />
                    <ActionButton onAction={() => {}} icon={<LuGift/>} text={'Presente'} />
                </HStack>
            </VStack>
        </VStack>
    )
}