'use client'

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

function LoginModal() {
  return (
    <Modal>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ثبت نام یا ورود به حساب کاربری</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
