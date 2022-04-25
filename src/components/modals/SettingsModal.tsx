import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
  isInfinityMode: boolean
  handleinfinityMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  // isHighContrastMode,
  // handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title="Тохиргоо" isOpen={isOpen} handleClose={handleClose}>
      <div className="grid-cols-2 gap-4">
        <SettingsToggle
          settingName="Хэцүү горим"
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={"Өмнөх үгийн өнгөөр илэрхийлсэн үсгийн дараагийн үгэнд ашиглана"}
        />
        <SettingsToggle
          settingName="Харанхуй горим"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
          description={"Бараан өнгөөр дэлгэцийг өөрчлөх өөрчлөх"}
        />
        {/* <SettingsToggle
          settingName="Тодосгогч горим"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={"Илүү тод өнгөөр дэлгэцийг өөрчлөх"}
        /> */}
          {/* <SettingsToggle
          settingName="Хязгааргүй"
          flag={isInfinityMode}
          handleFlag={handleinfinityMode}
        /> */}
      </div>
    </BaseModal>
  )
}
