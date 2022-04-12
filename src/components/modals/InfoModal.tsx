import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Тоглох заавар" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       Та 6 удаагийн оролдлогоор үгийг таагаарай. Таах бүрт нүдний өнгө солигдож таах үгтэй хэр ойрхон байгааг харуулах болно.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="А"
          status="correct"
        />
        <Cell value="В" />
        <Cell value="Д" />
        <Cell value="А" />
        <Cell value="Р" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A үсэг нь зөв байрандаа байгааг ногоон өнгөөр харагдана.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Ц" />
        <Cell value="Э" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Ц"
          status="present"
        />
        <Cell value="Э" />
        <Cell value="Г" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ц үсэг нь буруу байрандаа байгааг шар өнгөөр илэрхийлнэ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Х" />
        <Cell value="Ө" />
        <Cell value="Т" />
        <Cell isRevealing={true} isCompleted={true} value="Ө" status="absent" />
        <Cell value="Ч" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ө үсэг нь тухайн үгэнд байхгүй байгааг саарал өнгөөр илэрхийлнэ.
      </p>
    </BaseModal>
  )
}
