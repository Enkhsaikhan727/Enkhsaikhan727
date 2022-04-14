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
       Та 7 удаагийн оролдлогоор үгийг таагаарай. Таах бүрт нүдний өнгө солигдож таах үгтэй хэр ойрхон байгааг харуулах болно.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Э"
          status="correct"
        />
        <Cell value="Р" />
        <Cell value="Ч" />
        <Cell value="Т" />
        <Cell value="Э" />
        <Cell value="Й" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Э үсэг нь зөв байрандаа байгааг ногоон өнгөөр харагдана.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="З" />
        <Cell value="О" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Р"
          status="present"
        />
        <Cell value="И" />
        <Cell value="Л" />
        <Cell value="Т" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Р үсэг нь буруу байрандаа байгааг шар өнгөөр илэрхийлнэ.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="А" />
        <Cell value="М" />
        <Cell value="Ж" />
        <Cell isRevealing={true} isCompleted={true} value="И" status="absent" />
        <Cell value="Л" />
        <Cell value="Т" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        И үсэг нь тухайн үгэнд байхгүй байгааг саарал өнгөөр илэрхийлнэ.
      </p>
    </BaseModal>
  )
}
