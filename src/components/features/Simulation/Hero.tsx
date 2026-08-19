import PiggyBankImage from '@/assets/images/piggy-bank.png'

export function SimulationHero(){
  return (
    <div className='mb-8 text-center'>
      <div className='flex flex-col items-center sm:flex-row'>
        <h1 className='text-foreground text-3x1 font-semibold sm:text-4x1'>
          Vamos planejar seu fututo
        </h1>
        <img 
          src={PiggyBankImage}
          alt=""
          aria-hidden="true"
          className='h-16 w-16 sm:-mt-2 sm:-ml-3'
        />
        <p className='text-muted-foreground text-sm'>
          Responda algumas questões para ter insights financeiras personalizadas
        </p>
      </div>
    </div>
  )
}