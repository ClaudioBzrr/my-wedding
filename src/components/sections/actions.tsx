import {  HStack, Image, Mark, Text, VStack } from "@chakra-ui/react";
import { ActionButton } from "../action-button";
import { FiCheckCircle } from "react-icons/fi";
import { PiMapPinAreaBold } from "react-icons/pi";
import { LuGift } from "react-icons/lu";
import { DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTrigger } from "../ui/dialog";
import QRCode from '@/assets/images/qrcode.jpg'
import { ClipboardIconButton, ClipboardLabel, ClipboardRoot } from "../ui/clipboard";

export function Actions() {
    const confirmationMessage:string ='Olá, gostaria de confirmar minha presença na sua cerimônia de casamento do dia 01/02/2025.'
    const encondedMessage:string = encodeURIComponent(confirmationMessage)
    const whatsappLink = `https://api.whatsapp.com/send?phone=5585989349171&text=${encondedMessage}`
    const locationChurch:string = 'https://maps.app.goo.gl/2nKQTGgGkzayKR9s5'
    const locationLunch:string = 'https://maps.app.goo.gl/SXWuSuMKaAx29KdVA'
    return (
        <VStack align={'center'} justify={{base:'center',md:'space-evenly'}} w={'full'} minH={'100vh'}>
            <Text pb={{base:20,md:0}} textAlign={'center'} css={{fontFamily: 'Sacramento', color: 'blue.400',}} fontSize={{base: '4xl', md: '7xl'}}>Clique nos ícones para acessar</Text>
            <VStack align={'center'} justify={'center'}  w={'full'} h={'full'} gap={{base:5,md:12}}>
                <HStack align={'center'} justify={'center'} gap={{base:5,md:12}} w={'full'} h={'full'}>
                    <ActionButton onAction={() => {window.open(locationChurch,'_blank')}} icon={<PiMapPinAreaBold/>} text={'Localização da cerimônia'} />
                    <ActionButton onAction={() => {window.open(locationLunch,'_blank')}} icon={<PiMapPinAreaBold/>} text={'Localização do evento'} />
                </HStack>
                <HStack align={'center'} justify={'center'} gap={{base:5,md:12}} w={'full'} h={'full'}>
                    <ActionButton onAction={() => { window.open(whatsappLink,'_blank')}} icon={<FiCheckCircle/>} text={'Confirme sua presença'} />
                    <DialogRoot size={{base:'xs',md:'md'}} placement={'center'}>
                        <DialogTrigger>
                            <ActionButton onAction={() => {}} icon={<LuGift/>} text={'Presente'} />
                        </DialogTrigger>
                        <DialogBackdrop backdropFilter={'blur(10px)'}/>
                        <DialogContent>
                            <DialogCloseTrigger/>
                            <DialogHeader pt={12} css={{fontFamily: 'Sour Gummy',fontSize: 'xl'}} textAlign={'center'}>Quer dar um presente para o casal?</DialogHeader>
                            <DialogBody>
                                <Text pb={5} lineHeight={'normal'} css={{fontFamily: 'Sour Gummy',fontSize: 'xl'}} textAlign={'center'}>Contribua com a <Mark color={'blue.400'} css={{fontFamily: 'Authentic Signature',fontSize: {base:'4xl',md:'5xl'}}}>❤ Operação Lua de Mel ❤</Mark></Text>
                                <VStack align={'center'} justify={'center'}>
                                    <ClipboardRoot>
                                        <ClipboardLabel mr={2}>Chave pix (CPF): 06925896352 </ClipboardLabel>
                                        <ClipboardIconButton/>
                                    </ClipboardRoot>
                                    <Image objectFit={'contain'} maxW={{base:'xs',md:'md'}} maxH={{base:'xs',md:'xl'}} src={QRCode}/>
                                    <Text  css={{fontFamily: 'Sour Gummy',fontSize: 'md'}} textAlign={'center'}>Imaculada Nayra de Oliveira Souza</Text>
                                </VStack>
                            </DialogBody>
                        </DialogContent>
                    </DialogRoot>
                </HStack>
            </VStack>
        </VStack>
    )
}