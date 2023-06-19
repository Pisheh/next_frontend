import { localize } from '@/app/utils/helpers'
import {
  useMediaQuery,
  Box,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Tooltip
} from '@chakra-ui/react'

const GuideSteps = () => {
  const [isMd] = useMediaQuery('(max-width: 1024px)')

  const steps = [
    { title: 'سینتکس پایه' },
    { title: 'جنگو' },
    { title: 'فلسک' },
    { title: 'هوش مصنوعی' },
    { title: 'هوش مصنوعی' },
    { title: 'هوش مصنوعی' }
  ]

  return (
    <Stepper
      orientation={isMd ? 'vertical' : 'horizontal'}
      colorScheme='primary'
      index={-1}
      gap={0}
      className='flex flex-row items-center justify-center mb-10'
      height={isMd ? `${steps.length * 100}px` : 'auto'}
    >
      {steps.map((step, index) => (
        <Step key={index} className='w-[200px] mx-auto'>
          {isMd ? (
            <>
              <StepIndicator className=''>
                <StepStatus
                  incomplete={<span className='text-lg'>{localize(index + 1)}</span>}
                />
              </StepIndicator>

              <Box flexShrink='0'>
                <Tooltip
                  label='یادگیری قواعد پایه‌ای پایتون'
                  placement='top'
                  hasArrow
                >
                  <StepTitle className='text-lg'>{step.title}</StepTitle>
                </Tooltip>
              </Box>
            </>
          ) : (
            <Tooltip
              label='یادگیری قواعد پایه‌ای پایتون'
              placement='bottom'
              hasArrow
            >
              <div
                className={
                  !isMd ? 'flex flex-col items-center p-5 border rounded-2xl' : ''
                }
              >
                <StepIndicator className=''>
                  <StepStatus
                    incomplete={
                      <span className='text-lg'>{localize(index + 1)}</span>
                    }
                  />
                </StepIndicator>

                <Box flexShrink='0'>
                  <StepTitle className='mt-3 text-lg'>{step.title}</StepTitle>
                </Box>
              </div>
            </Tooltip>
          )}

          <StepSeparator className='mr-0 right' />
        </Step>
      ))}
    </Stepper>
  )
}

export default GuideSteps
