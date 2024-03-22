import { createContext, useContext, useState } from 'react'

type ToggleContextType = {
  isTotalValueVisible: boolean
  toggleTotalValue: (isVisible: boolean) => void
  isAvgOrderValueVisible: boolean
  toggleAvgOrderValue: (isVisible: boolean) => void
  isConversionRateVisible: boolean
  toggleConversionRate: (isVisible: boolean) => void
  isTransactionsUserTypeVisible: boolean
  toggleTransactionsUserType: (isVisible: boolean) => void
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined)

export const useToggleContext = (): ToggleContextType => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error('useToggleContext must be used within a ToggleProvider')
  }
  return context
}

export const ToggleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTotalValueVisible, setIsFeature1Visible] = useState(true)
  const [isAvgOrderValueVisible, setIsFeature2Visible] = useState(true)
  const [isConversionRateVisible, setIsFeature3Visible] = useState(true)
  const [isTransactionsUserTypeVisible, setIsFeature4Visible] = useState(true)

  const toggleTotalValue = (isVisible: boolean) => {
    setIsFeature1Visible(isVisible)
  }
  const toggleAvgOrderValue = (isVisible: boolean) => {
    setIsFeature2Visible(isVisible)
  }
  const toggleConversionRate = (isVisible: boolean) => {
    setIsFeature3Visible(isVisible)
  }
  const toggleTransactionsUserType = (isVisible: boolean) => {
    setIsFeature4Visible(isVisible)
  }

  const contextValue: ToggleContextType = {
    isTotalValueVisible,
    toggleTotalValue,
    isAvgOrderValueVisible,
    toggleAvgOrderValue,
    isConversionRateVisible,
    toggleConversionRate,
    isTransactionsUserTypeVisible,
    toggleTransactionsUserType,
  }

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  )
}
