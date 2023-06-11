import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface Props {
      page: string
      count?: number
}

export default function Loader ({ page, count = 1 }: Props) {
      return (
            page === 'product' ? (
                  <div className='relative fade'>
                        <div className='mx-10 min-h-[200vh] pb-20 mt-32  max-w-[485px] md:mx-auto'>
                              <SkeletonTheme baseColor="#dee2e6" highlightColor="#eeeeee">
                                    <div className='absolute -top-12 right-4'>
                                          <Skeleton height={30} width={30} circle />
                                    </div>
                                    <div>
                                          <Skeleton height={672} />
                                          <div className='flex gap-x-2 pt-2 pl-6'>
                                                <Skeleton height={108} width={80} />
                                                <Skeleton height={108} width={80} />
                                          </div>
                                    </div>
                                    <div className='flex flex-col items-center py-16 h-[484px] justify-between'>
                                          <Skeleton height={38} width={110} />
                                          <Skeleton height={28} width={70} />
                                          <div className='flex flex-col gap-2'>
                                                <div className='ml-8'>
                                                      <Skeleton height={28} width={50} />
                                                </div>
                                                <div className='flex justify-center gap-x-8 w-[320px]'>
                                                      <Skeleton height={44} width={64} />
                                                      <Skeleton height={44} width={64} />
                                                      <Skeleton height={44} width={64} />
                                                </div>
                                          </div>
                                          <div className='w-[80%] pt-4 pb-2'>
                                                <Skeleton height={48} />
                                                <Skeleton style={{margin:'10px 0'}} height={15} />
                                          </div>
                                    </div>

                              </SkeletonTheme>
                        </div>
                  </div>
            ) : (
                  <div className='min-h-[200vh] mx-10 pt-16  mb-5 flex flex-col fade'>
                        <SkeletonTheme baseColor="#dee2e6" highlightColor="#eeeeee">
                              <div className=''>
                                    <div className='flex justify-end'>
                                          <Skeleton height={40} width={140} borderRadius={30} />
                                    </div>
                                    <div className='flex justify-between py-6 gap-x-4 '>
                                          <div className='max-w-xs w-1/2'>
                                                <Skeleton height={56} />
                                          </div>
                                          <div className='max-w-xs w-1/2'>
                                                <Skeleton height={56} />
                                          </div>
                                    </div>
                                    <div className='custom-grid'>
                                          {[...Array(count)].map((_, idx) => (
                                                <div key={idx} className='flex flex-col w-full'>
                                                      <Skeleton height={510} width='100%' />
                                                      <div className='p-5 flex flex-col items-center h-[240px] justify-between'>
                                                            <Skeleton height={28} width={200} />
                                                            <Skeleton height={28} width={65} />
                                                            <Skeleton height={45} width={150} />
                                                            <div className='flex gap-x-3'>
                                                                  <Skeleton height={28} width={28} circle />
                                                                  <Skeleton height={28} width={28} circle />
                                                                  <Skeleton height={28} width={28} circle />
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </SkeletonTheme>
                  </div>
            )
      )
}