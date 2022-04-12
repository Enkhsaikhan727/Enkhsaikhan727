import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AddWord = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Үг таалгах" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Тун удахгүй...
      </p>
    </BaseModal>
  )
}
