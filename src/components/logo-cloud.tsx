import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      {
        [ "sagex3", "dynamics365", "sagefrp1000" , "quickbookslogo","odoologo"].map(
          (logo) => (
            <img
              key={logo}
              alt={logo}
              src={`/logo-erp/${logo}.png`}
              className="h-9 w-full object-contain max-sm:mx-auto sm:h-8 lg:h-12"
            />
          ),
        )
      }
    </div>
  )
}
