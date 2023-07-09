import Button from '@/app/components/Button'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useMediaQuery
} from '@chakra-ui/react'
import AddJobForm from './AddJobForm'

const AddJobModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const [isMd] = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={`${isMd ? 'sm' : '2xl'}`}>
        <ModalOverlay />
        <ModalContent py={8} px={5}>
          <ModalHeader mb={5}>
            <h1 className='text-2xl font-bold text-center'>افزودن فرصت شغلی جدید</h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody px={isMd ? 0 : 5}>
            <AddJobForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddJobModal
