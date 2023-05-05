import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {

      const [currentStep, setCurrentStep] = useState(0)

      function onNext() {
            setCurrentStep(i => {
                  if (currentStep >= steps.length - 1) return i
                  return i + 1
            })
      }

      function onBack() {
            setCurrentStep(i => {
                  if (currentStep <= 0) return i
                  return i - 1
            })
      }

      function goToStep(step: number) {
            setCurrentStep(step)
      }

      return {
            currentStep,
            step: steps[currentStep],
            goToStep,
            onNext,
            onBack,
            steps,
            isFirstStep: currentStep === 0,
            isLastStep: currentStep === steps.length - 1
      }
}