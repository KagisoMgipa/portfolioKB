import React from 'react'
import { BentoGrid, BentoGridItem } from './UI/BentoGrid'
import { GridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid className=''>
            {GridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid