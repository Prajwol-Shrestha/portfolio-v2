import InfiniteScroll from '@/components/marquee/infinite-scroll'
import { TECHNOLOGIES } from '@/constants/static-lists'
import React from 'react'

export default function TechonologiesSection() {
  return (
    <div>
      <InfiniteScroll list={TECHNOLOGIES} />
    </div>
  )
}
