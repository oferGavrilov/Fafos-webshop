import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


export default function Loader () {
      return (
            <div className='h-[200vh] pb-20 mt-24 px-4 max-w-[480px] mx-auto'>
                  <SkeletonTheme baseColor="#dee2e6" highlightColor="#eeeeee">
                        <div>
                              <Skeleton height={672}  />
                              <div className='flex gap-x-2 pt-2 pl-6'>
                                    <Skeleton height={108} width={80} />
                                    <Skeleton height={108} width={80} />
                              </div>
                        </div>
                  </SkeletonTheme>
            </div>
      )
}